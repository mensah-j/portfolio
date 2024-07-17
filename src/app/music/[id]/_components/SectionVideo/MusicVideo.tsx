"use client";

import Plyr from "plyr";
import "./plyr.css";
import { useEffect, useRef, useState } from "react";
import mix from "classnames";

export interface MusicVideoProps {
  video: string;
}

export function MusicVideo(props: MusicVideoProps) {
  const [ready, setReady] = useState(false);
  const videoContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const player = new Plyr("#player", {
      keyboard: { focused: true, global: true },
      youtube: {
        noCookie: false,
        rel: 0,
        loop: true,
        playlist: props.video,
      },
      settings: ["quality", "speed"],
    });

    document
      .querySelector(".plyr progress")
      ?.classList.add("plyr-progress-hidden");

    document.querySelector(".plyr iframe")?.setAttribute("tabIndex", "-1");

    player.on("ready", () => {
      player.play();
      player.pause();

      setInterval(() => {
        if (player.duration - player.currentTime < 0.1) {
          player.currentTime = 0;
          player.pause();
        }
      }, 50);
      setReady(true);
    });

    player.on("statechange", (e) => {
      if (e.detail.code === 1) {
        document
          .querySelector(".plyr progress")
          ?.classList.remove("plyr-progress-hidden");
      }
    });

    player.on("enterfullscreen", () => {
      player.embed?.setPlaybackQuality("hd1080");
      document
        .querySelector(".plyr__video-wrapper")
        ?.setAttribute("data-fullscreen", "true");
      if (videoContainer.current) {
        videoContainer.current.style.maxHeight = "100vh";
      }
    });

    player.on("exitfullscreen", () => {
      document
        .querySelector(".plyr__video-wrapper")
        ?.setAttribute("data-fullscreen", "false");
      if (videoContainer.current) {
        videoContainer.current.style.maxHeight = "";
      }
    });

    player.on("qualitychange", () => {
      player.embed?.setPlaybackQuality("hd1080");
    });
  });

  return (
    <div
      ref={videoContainer}
      className={mix(
        "w-screen sm:w-full aspect-video bg-gray-900 shadow-gray-400",
        {
          "animate-pulse-slow": !ready,
        },
      )}
    >
      <div
        className={
          ready ? "block animate-[plyr-fade-in_0.5s] h-full" : "hidden"
        }
      >
        <div
          id="player"
          data-plyr-provider="youtube"
          data-plyr-embed-id={props.video}
        />
      </div>
    </div>
  );
}

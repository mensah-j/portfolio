import * as Toast from "@radix-ui/react-toast";
import { MdClose } from "react-icons/md";
import { BaseDialog } from "../BaseDialog";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { PiCopyBold } from "react-icons/pi";
import "./toast.css";
import mix from "classnames";

const socialMedias = [
  {
    label: "twitter",
    url: "https://twitter.com/share?url=",
    icon: "/socials/twitter.svg",
  },
  {
    label: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    icon: "/socials/facebook.svg",
  },
  {
    label: "reddit",
    url: "https://reddit.com/submit?url=",
    icon: "/socials/reddit.svg",
  },
];

export interface ShareDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;

  link?: string;
}

export function ShareDialog(props: ShareDialogProps) {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);

  return (
    <BaseDialog
      title="Share"
      className="overflow-hidden fixed shadow-lg shadow-[#575757] top-0 left-1/2 -translate-x-1/2 translate-y-[100px] w-[calc(100%-40px)] sm:w-[400px] md:w-[500px] h-fit rounded bg-gray-100"
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <div className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-between">
          <span className="sm:text-lg font-semibold">share</span>
          <button
            className="hover:bg-gray-300 rounded-full h-fit p-1"
            onClick={() => props.setOpen(false)}
          >
            <MdClose size={20} />
          </button>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-row gap-12 transition-all">
            {socialMedias.map((socialMedia) => (
              <a
                key={socialMedia.label}
                href={`${socialMedia.url}${pathname}`}
                target="_blank"
                rel="noopener noreferrer"
                className={mix(
                  "flex flex-col gap-1 items-center font-semibold text-gray-800",
                  "hover:bg-[#e2e2e2] p-2 sm:pr-[9px] sm:pl-[9px] sm:pt-[5px] sm:pb-[5px] rounded",
                )}
              >
                <div className="aspect-square">
                  <Image
                    width={48}
                    height={48}
                    alt={socialMedia.label}
                    src={socialMedia.icon}
                  />
                </div>
                <span className="text-sm">{socialMedia.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div
          onClick={() => {
            navigator.clipboard
              .writeText(window.location.href)
              .then(() => {
                setCopied(true);
              })
              .catch(() => {
                setCopied(false);
              });
          }}
          className="flex flex-row justify-between items-center w-full p-2 bg-gray-300 rounded cursor-pointer"
        >
          <span className="font-semibold text-sm line-clamp-1">
            {props.link ?? window.location.href}
          </span>
          <PiCopyBold size={20} className="text-gray-700" />
        </div>
        <Toast.Root
          open={copied}
          onOpenChange={setCopied}
          className="ToastRoot bg-white shadow rounded p-2 "
        >
          <Toast.Title className="text-sm font-semibold">
            copied to clipboard!
          </Toast.Title>
        </Toast.Root>
      </div>
    </BaseDialog>
  );
}

import { parseMusic } from "./parse";
import { createMusicIndex } from "./search";
import { type Music } from "./parse";

export function createMusic() {
  const parsedMusic = parseMusic();
  const musicMap = new Map<string, Music>(
    parsedMusic.map((music) => [music.id, music]),
  );
  const musicIndex = createMusicIndex(parsedMusic);

  return {
    all: parsedMusic,
    ids: parsedMusic.map((music) => music.id),

    get: (id: string) => {
      return musicMap.get(id);
    },

    search: (query: string) => {
      return musicIndex.search(query);
    },
  };
}

const music = (() => {
  if (process.env.NODE_ENV === "production") {
    return createMusic();
  } else {
    if (!global.music) {
      global.music = createMusic();
    }
    return global.music as ReturnType<typeof createMusic>;
  }
})();

export { type Music };

export default music;

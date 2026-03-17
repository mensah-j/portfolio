---
title: "Using JSX to construct DOM-backed game objects"
date: 2025-12-27
length: "∼1250 words"
---

When rendering games of interactive simulations on the web, one must choose whether to manage their own rendering (say, on a canvas) or let the browser render elements via the DOM. The former allows for a more traditional, stateless, approach to rendering, while the latter is often preferable for user interfaces, as layout, styling, and input can be offloaded the browser. We refer to elements rendered in this way as _DOM-backed objects_. In this post, we show how to construct and manage these objects in a modular way by using [JSX](https://github.com/facebook/jsx?tab=readme-ov-file).

To demonstrate this in action, we will be recreating the card game [Concentration](<https://en.wikipedia.org/wiki/Concentration_(card_game)>) for the browser. Some basic familiarity with Vite, HMR, Typescript, and JSX will be helpful for following along.

## DOM-backed game objects

In simple terms, any program consists of two things: data, and logic that operates on that data. To keep code maintainable, it helps to deliberately organize both into clear, meaningful units. In this post, we will use a simple model with of the following levels of organization:

1. A **game object**, which represents an individual entity in the world. These update themselves each frame in response to external inputs and current game state.
2. A **system**, which represents a general high-level behavior. These primarily contain logic that operates over collections of game objects.
3. A **scene**, which represents a self-contained context in which game objects and systems exist.
4. A **world**, which contains global game state.

To start, we create a new Vite project with no framework and Typescript as our language:

```bash
$ npm create vite@8.2.0
```

In the `src/` directory, we create a module `world.ts` containing all world-level game state. For this game, we will record statistics such as the total number of games played as global state.

```typescript
// src/world.ts

export interface World {
  statistics: {
    gamesPlayed: number;
    pairsFlipped: number;
    pairsMatched: number;
  };
}

export const world: World = {
  statistics: {
    gamesPlayed: 0,
    pairsFlipped: 0,
    pairsMatched: 0,
  },
};
```

```typescript
function run() => {
  update(game);

  for (const object of game.backed) {

  }

  requestAnimationFrame(run);
}
```

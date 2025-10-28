import { parseMath } from "./parse";
import { type Math } from "./parse";

export function createMath() {
  const parsedMath = parseMath();
  const mathMap = new Map<string, Math>(
    parsedMath.map((math) => [math.id, math]),
  );

  return {
    all: parsedMath,
    ids: parsedMath.map((math) => math.id),
    get: (id: string) => {
      return mathMap.get(id);
    },
  };
}

const math = (() => {
  if (process.env.NODE_ENV === "production") {
    return createMath();
  } else {
    if (!global.math) {
      global.math = createMath();
    }
    return global.math;
  }
})();

export { type Math };

export default math;

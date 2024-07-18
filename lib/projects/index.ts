import { parseProjects } from "./parse";

const projects = (() => {
  if (process.env.NODE_ENV === "production") {
    return parseProjects();
  } else {
    if (!global.projects) {
      global.projects = parseProjects();
    }
    return global.projects;
  }
})();

export default projects;

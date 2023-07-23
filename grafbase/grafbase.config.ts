import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  discription: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  project: g
    .relation(() => Projects)
    .list()
    .optional(),
});
const Projects = g.model("Project", {
  title: g.string().length({ min: 3 }),
  discreption: g.string(),
  image: g.url(),
  liveUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});
export default config({
  schema: g,
});

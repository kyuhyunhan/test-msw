import { rest } from "msw";
import data from "./data";

const [skills] = data;

export const handlers = () => {
  return [rest.get("/api/skills", getSkills)];
};

const getSkills = (_, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      skills,
    })
  );
};

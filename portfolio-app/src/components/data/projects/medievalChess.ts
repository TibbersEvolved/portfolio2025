import type { projectData } from "@/components/projects/projectPage";
import icon from "../../../assets/project/medievalChess.png";

export const medievalChess: projectData = {
  title: "Medieval Chess",
  desc: "Salt Bootcamp web browser game using Java, React, SQL DB, Typescript.",
  image: icon,
  skills: ["React", "Java", "PostgreSQL"],
  info: {
    data: [
      {
        pageType: "text",
        pageText:
          "A so called hackweek project where we had a few days to create a fullstack app during my BootCamp @ SALT. The app features a game that saves each move to a SQL database. Backend is powered by spring boot and frontend is a react app using tanstack router for routing. ",
        pageImages: [],
      },
      {
        pageType: "text",
        pageText:
          "The game itself is a variant of chess, where to players play against each other, taking turns to move pieces, spend money to buy new ones and ultimately defeating the opposing king. For this project we did a short presentation in front of a live audience, which was recorded and you can see it here:",
        pageImages: [],
      },
      {
        pageType: "video",
        pageText: "OaX4Zrw5JYw",
        pageImages: ["9203"],
      },
    ],
  },
};

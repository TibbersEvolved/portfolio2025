import type { projectData } from "@/components/projects/projectPage";
import icon from "../../../assets/notion.png";
import diagramImage from "../../../assets/project/notionDiagram.png";

export const notionProxy: projectData = {
  title: "Notion Proxy",
  desc: "A REST API that acts as a gateway between Notion and other apps",
  image: icon,
  skills: ["Java", "Spring Boot"],
  info: {
    data: [
      {
        pageType: "text",
        pageText:
          "A project we took over from a previous team at SALT. It is a gateway app that takes data from SALTS Notion profile, sorts it based on parameters, and then serves it in a restful manner to the client. When our team got our hands on the application it was technically working, but is was slow, prone to error and gave bad results. Some of the requests could take up to 30seconds and it didn't use caching properly.",
        pageImages: [],
      },
      {
        pageType: "images",
        pageText: "",
        pageImages: [diagramImage],
      },
      {
        pageType: "text",
        pageText:
          "We worked a lot on optimising the app, being smart about using Notions apis filters to reduce the amount of requests we hade to make to Notion. We also implemented a smarter working caching system. This allowed us to get the average request time down from 30seconds to 1-2 seconds uncached, and a few 100ms once cached. We also added more features to filter results based on different parementers, added Swagger Documentation and changed the endpoints to be more RESTful.",
        pageImages: [],
      },
    ],
  },
};

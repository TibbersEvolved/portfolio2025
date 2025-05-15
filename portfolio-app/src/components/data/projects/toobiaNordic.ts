import type { projectData } from "@/components/projects/projectPage";
import icon from "../../../assets/spring.svg";

export const toobiaNordic: projectData = {
  title: "Toobia Nordic",
  desc: "Lightweight backend for handling inventory management for Swedish Scouts.",
  image: icon,
  skills: ["Java", "PostgreSQL"],
  info: {
    data: [
      {
        pageType: "text",
        pageText:
          "Lightweight backend for hanlding inventory management powered by Spring Boot. A quick project I did at SALT for a co-worker. The backend has error handling for bad inputs and enforces rules on IDs to make it easier to create a coherent system.",
        pageImages: [],
      },
      {
        pageType: "text",
        pageText:
          "The API is built to be RESTFUL, stateless and follow a C.R.U.D setup for all endpoints and functions. Postgres was chosen for the database and the app can be configured with enviroment variables to work in different enviroments. Swagger was used to create automated documentation and easy implementation for my coworked once he integrated it with his frontend.",
        pageImages: [],
      },
    ],
  },
};

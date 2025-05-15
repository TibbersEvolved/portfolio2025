import type { projectData } from "@/components/projects/projectPage";
import iconTibberstd from "../../../assets/project/tibberstd.png";
import testIMG from "../../../assets/saltImg.png";

export const tibberstd: projectData = {
  title: "Tibbers Tower Defense",
  desc: "A rougelike tower defense with randomized maps. Developed with Unity, using C#",
  image: iconTibberstd,
  skills: ["C#"],
  info: {
    data: [
      {
        pageType: "text",
        pageText:
          "A game project started in 2023 using Unity Game Engine, C# and assets created by myself. During this project I learned 3d modelling using blender, as well as greatly my ability to architecture large codebases. The game is still under development and I am aiming for a release late 2025 or early 2026.",
        pageImages: [],
      },
      {
        pageType: "images",
        pageText: "",
        pageImages: [testIMG, iconTibberstd, testIMG],
      },
      {
        pageType: "video",
        pageText: "Ccnb0l9OqaQ",
        pageImages: ["60"],
      },
    ],
  },
};

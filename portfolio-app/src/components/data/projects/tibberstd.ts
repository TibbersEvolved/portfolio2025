import type { projectData } from "@/components/projects/projectPage";
import iconTibberstd from "../../../assets/project/tibberstd.png";
import screenShot1 from "../../../assets/project/tdScreenshot.png";
import screenShot2 from "../../../assets/project/tdScreenshot2.png";
import screenShot3 from "../../../assets/project/tdScreenshot3.png";

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
        pageImages: [screenShot1, screenShot2, screenShot3],
      },
      {
        pageType: "text",
        pageText:
          "The game features a high degree of randomization, ensuring each playthrough is different. Players get random options of defenses, bonus and enemies to face. Making sure the UX is clear with good player feedback has been important to allow new players to quickly pick-up the game. As the project is turning quite large, good code architecture has been vital to keep it scalable, with regards to perfomance and ease of adding new features. Optimization has been crucial as the game has to handle hundreds of objects at once in the later stages.",
        pageImages: [],
      },
    ],
  },
};

import type { projectData } from "@/components/projects/projectPage";
import icon from "../../../assets/spring.svg";

export const saltCompanion: projectData = {
  title: "Salt Companion",
  desc: "Fullstack Java app that allows teachers to setup a learning enviroment for students. Support for ai content generation.",
  image: icon,
  skills: ["React", "Java", "PostgreSQL"],
  info: {
    data: [
      {
        pageType: "text",
        pageText:
          "Group project we worked on at SALT Bootcamp for two weeks. It is a fullstack flashcard application powered by Java, Spring Boot & React. " +
          "It supports two types of users: Teacher and Student. Teachers can create flashcards for different types of topics. Students enrolled to that teachers bootcamp can then learn more about these topics by studying the flashcards.",
        pageImages: [""],
      },
      {
        pageType: "text",
        pageText:
          "The app tracks the students progress, including their certainity in different topics, streaks and more, which is saved to database. Cards are picked more commonly if the student finds them hard, so you don't repeat stuff you already know. The frontend nicely displays relevant data to the student, including what they need to study more and their progress in each topic.",
        pageImages: [""],
      },
      ,
      {
        pageType: "video",
        pageText: "z2-wnnS37AY",
        pageImages: ["59"],
      },
      {
        pageType: "text",
        pageText:
          "For teachers, we created an interactive UI to create content and administer bootcamps. Teachers also have the option to use AI (powered by CHAT GPT) to generate flashcards with a single button press. This reduces the work teachers have to put in to create a vast array of questions.",
        pageImages: [""],
      },
      {
        pageType: "text",
        pageText:
          "We used Clerk to create the login system. New users will be students by default, but must be assigned by a teacher to a bootcamp to get acess to content.",
        pageImages: [""],
      },
    ],
  },
};

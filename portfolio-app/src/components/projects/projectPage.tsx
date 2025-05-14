import type { pageContent } from "./types";

export default function ProjectPage(prop: pageProps) {
  const data = prop.pageInfo.data;
  data.map((s) => {
    console.log("Type = " + typeof s);
  });

  return <div>kay</div>;
}

export type pageProps = {
  pageInfo: pageInfo;
};

export type pageInfo = {
  data: pageContent[];
};

export type projectData = {
  title: string;
  desc: string;
  image: string;
  skills: string[];
  info: pageInfo;
};

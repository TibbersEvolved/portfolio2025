import type { pageContent } from "./types";

export default function ProjectPage(prop: pageProps) {
  const data = prop.pageInfo.data;
  return (
    <>
      {data.map((s) => {
        if (s.pageType === "text") {
          return <div className="text-lg p-4">{s.pageText}</div>;
        }
        if (s.pageType === "images") {
          return (
            <>
              <section className="flex flex-wrap gap-8 p-2 justify-center">
                {s.pageImages.map((picture) => {
                  return <img className="size-60" src={picture}></img>;
                })}
              </section>
            </>
          );
        }
      })}
    </>
  );
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

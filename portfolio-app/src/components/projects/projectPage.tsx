import YouTube from "react-youtube";
import type { pageContent } from "./types";

export default function ProjectPage(prop: pageProps) {
  const data = prop.pageInfo.data;

  function getTime(db: pageContent) {
    if (db.pageImages.length > 0) {
      let x: number = +db.pageImages[0];
      console.log("X is = " + x);
      return x;
    }
    return 0;
  }
  let ytWidth = 640;
  let ytHeight = 390;
  if (window.screen.width <= 720) {
    console.log("made smaller");
    ytWidth = 320;
    ytHeight = 185;
  }

  function getOptions(db: pageContent) {
    return {
      height: ytHeight,
      width: ytWidth,
      playerVars: {
        start: getTime(db),
        autoplay: 0,
      },
    };
  }

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
        if (s.pageType === "video") {
          return (
            <>
              <div className="flex justify-center pt-8 p-4">
                <YouTube videoId={s.pageText} opts={getOptions(s)} />
              </div>
            </>
          );
        }
        if (s.pageType === "bigImage") {
          return (
            <>
              <section className="flex flex-wrap gap-8 p-2 justify-center">
                <img className="w-1/2 h-60" src={s.pageText}></img>
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

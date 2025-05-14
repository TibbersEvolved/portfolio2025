import type { projectInfo } from "./projectCard";

export default function ProjectDetails(props: prop) {
  let { info } = props.projectData;

  return (
    <>
      {info.data.map((s, key) => {
        <div key={key}>{s.pageText}</div>;
      })}
    </>
  );
}

type prop = {
  projectData: projectInfo;
};

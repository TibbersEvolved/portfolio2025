import CV from "../../assets/Erik Olin Resume 2025.pdf";

export default function CvHolder() {
  return (
    <div
      className="flex justify-center ml-4 mr-4 mt-12 h-dvh border-4 border-slate-500 shadow-md shadow-slate-900
    rounded-sm"
    >
      <iframe
        src={CV}
        height="100%"
        allowFullScreen={true}
        className="w-full"
      ></iframe>
    </div>
  );
}

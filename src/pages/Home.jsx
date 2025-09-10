export function resumeClickHandler() {
  window.open("/public/assets/resume.pdf", "_blank");
}
export default function Home() {
  return (
    <div>
      <div className="flex flex-col pt-30 pl-30 pr-30 pb-10">
        <h1 className="text-black font-roboto text-4xl pl-10">
          Hi, my name is
        </h1>
        <h1 className="font-roboto text-9xl pl-10"> Vivian Chen </h1>
        <p className="font-roboto text-2xl max-w-200 pl-10 pt-10">
          I&apos;m a current junior at Northwestern University studying Computer
          Science and Data Science.
        </p>
      </div>
      <div className="pl-40">
        <button
          onClick={resumeClickHandler}
          className="font-roboto text-2xl bg-amber-400 hover:cursor-pointer"
        >
          check out my resume!
        </button>
      </div>
    </div>
  );
}

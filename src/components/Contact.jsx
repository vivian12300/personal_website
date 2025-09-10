function linkedinClickHandler() {
  window.open("https://www.linkedin.com/in/vivian-chen-a94491181/", "_blank");
}
function emailClickHandler() {
  window.open("mailto:vivian.chen.12503@gmail.com", "_blank");
}

export default function Contact() {
  return (
    <div className="pt-20">
      <p className="text-2xl">
        {" "}
        Contact me through{" "}
        <button
          onClick={linkedinClickHandler}
          className="font-bold underline hover:cursor-pointer"
        >
          LinkedIn{" "}
        </button>{" "}
        or{" "}
        <button
          onClick={emailClickHandler}
          className="font-bold underline hover:cursor-pointer"
        >
          {" "}
          Email{" "}
        </button>{" "}
        !
      </p>
    </div>
  );
}

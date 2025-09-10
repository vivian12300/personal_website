import Home from "./pages/Home";
import ReactDOM from "react-dom/client";
import { Link, Element } from "react-scroll";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="pb-100">
      <nav className="flex justify-end font-roboto p-4">
        <ul className="flex space-x- sm:text-right">
          <li className="p-4">
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="m-4 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="m-4 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="m-4 cursor-pointer"
            >
              Experience
            </Link>
          </li>
          <li className="p-4">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="m-4 cursor-pointer"
            >
              Contact Me!
            </Link>
          </li>
        </ul>
      </nav>
      <Element name="/">
        <section>
          <Home />
        </section>
      </Element>
      <div className="font-roboto pl-40 pr-40 flex flex-col">
        <Element name="about">
          <section>
            <About />
          </section>
        </Element>
        <Element name="experience">
          <section>
            <Experience />
          </section>
        </Element>
        <Element name="contact">
          <section>
            <Contact />
          </section>
        </Element>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

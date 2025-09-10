import { resumeClickHandler } from "../pages/Home";

export default function Experience() {
  return (
    <div>
      <h1 className="text-4xl pt-20 underline"> Experience </h1>
      <p className="flex mt-5 text-2xl justify-between font-bold">
        <p> Amazon Web Services</p>
        <p> New York City, New York </p>
      </p>
      <p className="flex justify-between text-xl italic">
        <p> Software Development Engineer Intern </p>
        <p> June 2025 - September 2025 </p>
      </p>
      <ul className="text-lg list-disc pl-4">
        <li>
          Designed and implemented `cdk flags` Cloud Development Kit (CDK)
          Command Line tool fully in Typescript for 1+ million developers to
          view, modify, and manage configurations for 100+ feature flags across
          their CDK applications.
        </li>
        <li>
          Optimized performance when updating feature flags by 4 times by
          introducing parallelization to improve user experience and ensure
          minimal delays.
        </li>
        <li>
          Collaborated with senior engineers in UX design cycles, incorporating
          developer feedback and usability testing to refine CLI interactions to
          improve the overall developer workflow.
        </li>
      </ul>

      <p className="flex mt-5 text-2xl justify-between font-bold">
        <p> Amazon </p>
        <p> Bellevue, Washington </p>
      </p>
      <p className="flex justify-between text-xl italic">
        <p> Software Development Engineer Intern </p>
        <p> June 2024 - September 2024 </p>
      </p>
      <ul className="text-lg list-disc pl-4">
        <li>
          Developed a response streaming WebSocket API, corresponding Lambda
          handlers, and IAM policies using AWS Cloud Development Kit (CDK) and
          deployed multiple stacks of resources to development accounts with the
          goal of implementing streaming between our LLM and user. Established a
          new development pipeline for tracking stack deployments, ensuring the
          proper AWS resource were created.
        </li>
        <li>
          Led cross-team discussions with a detailed design document to clarify
          project goals and reach alignment on planned implementation
        </li>
        <li>
          Implemented a Bedrock model invocation and asynchronous response
          streaming using Java to enhance latency and improve customer
          experience. Proceeded to integrate necessary logging and metrics, and
          created testing using JUnit and Mockito to ensure reliability and
          performance.
        </li>
      </ul>

      <p className="flex mt-5 text-2xl justify-between font-bold">
        <p> MERGE</p>
        <p> Chicago, Illinois </p>
      </p>
      <p className="flex justify-between text-xl italic">
        <p> Marketing Shadow Intern </p>
        <p> January 2024 - January 2024 </p>
      </p>
      <ul className="text-lg list-disc pl-4">
        <li>
          Gained firsthand knowledge of pipeline processes, allowing for a
          complete understanding of the end-to-end workflow within the
          organization.
        </li>
        <li>
          Developed a network of connections by actively engaging with and
          shadowing professionals across different departments, fostering
          relationships that contribute to a collaborative work environment.
        </li>
        <li>
          Acquired insights into the dynamics of the workplace, including
          effective communication strategies and team collaboration.
        </li>
      </ul>
      <p className="pt-5 font-bold text-xl">
        ... and more! View my{" "}
        <button
          onClick={resumeClickHandler}
          className="underline hover:cursor-pointer"
        >
          resume
        </button>{" "}
        to learn more about my experience.
      </p>
    </div>
  );
}

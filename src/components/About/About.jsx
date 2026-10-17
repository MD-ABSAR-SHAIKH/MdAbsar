import React from "react";
// import mypho from "../../../public/assets/soya.png";
const mypho = "/assets/label.png";


const About = () => {
  return (
    <div className="h-screen sm:mt-0 flex justify-center flex-col sm:block items-center">
      <div className="my-4 sm:my-0">
        <h1 className="sm:text-3xl text-xl font-bold flex justify-center">
          All About Me
        </h1>
        <hr className="bg-white h-0.5 my-2 w-64 mx-auto sm:w-1/2" />
      </div>
      {/* <div className="p-4 sm:w-[110rem]"> */}

      <div
        className="text-white flex justify-center flex-col sm:flex-row items-center gap-4 rounded-xl w-[91.8vw]
     shadow-2xl h-[90vh]"
        id="About"
      >
        <div className="sm:w-[300rem] sm:p-4 sm:mt-32 md:mt-0">
          <img
            src={mypho}
            className="rounded-lg shadow-2xl sm:w-[200rem] mb-12"
            alt=""
          />
        </div>
        <div className="p-4f sm:w-[300rem]">
          <p>
 Hi, I'm Md Absar, a Computer Science and Engineering student passionate about Full Stack Development and AI Engineering. I enjoy building modern, responsive, and user-friendly web applications while exploring how artificial intelligence can solve real-world problems.

I work with the MERN stack, including MongoDB, Express.js, React.js, and Node.js, to develop full-stack applications, RESTful APIs, and interactive user interfaces. I'm also interested in AI, machine learning, and intelligent systems that combine software development with data-driven solutions.

</p>
        </div>
      </div>
    </div>
  );
};

export default About;
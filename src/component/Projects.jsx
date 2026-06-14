import React, { useEffect, useRef, useState } from "react";
import aiauction from "../assets/projects/aiauction.png";
import hb_sure from "../assets/projects/hb-sure.png";
import hospital_dashboard from "../assets/projects/hospital_dashboard.png";
import movies_recommender from "../assets/projects/movies-recommender.png";
import iptracker from "../assets/projects/iptracker.png";
import coding_conf from "../assets/projects/coding_conf.png";
import aipoweredmovierec from "../assets/New Imported Images/moviesImage.png";
import contentGenerator from "../assets/New Imported Images/content-generator-image.png";
import aipoweredForm from "../assets/New Imported Images/form-generator-image.png";
import flyingGame from "../assets/New Imported Images/parrot game.jpg";
import contently from "../assets/New Imported Images/work-4.jpg";
import chess from "../assets/New Imported Images/chess2.png";
import { Link } from "lucide-react";
import { gsap } from "gsap";
import { LucideArrowRightCircle } from "lucide-react";

const Projects = () => {
  const ref = useRef();

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        gsap.to("._project_", { y: 0, duration: 3, opacity: 1, stagger: 0.1 });
      }
    });
  };

  const options = { threshold: 0.1 };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "AI Powered Content And Image Generator",
      image: contentGenerator,
      // function: "AI-powered real estate auction analysis",
      description:
        "a web application that utilizes advanced AI algorithms to generate high-quality content and images based on user input.",
      link: "https://gohighlevel-app-kjbeiifg48.streamlit.app/",
    },
    {
      title: "AI Powered Form",
      image: aipoweredForm,
      // function: "E-commerce platform for natural health and beauty products",
      description:
        "a web application that utilizes advanced AI algorithms to generate high-quality content and images based on user input.",
      link: "https://moxie-app-tbcwjstpxa.streamlit.app/",
    },
    {
      title: "AI Powered Movie Recommender",
      image: aipoweredmovierec,
      // function: "Dashboard for managing hospital resources",
      description:
        "A web application that helps users find movies they will enjoy by recommending films based on personalized preferences using intelligent filtering.",
      link: "https://abdulquddusmuhammad.github.io/movies_recommender/",
    },
    {
      title: "Flying Game",
      image: flyingGame,
      // function: "Movie discovery and recommendation platform",
      description:
        "an exciting and whimsical game that will take you on a thrilling adventure through the skies!",
      link: "https://mrwholesome01.github.io/Muhammads-parrot-game/",
    },
    {
      title: "My Personal blogging Website",
      image: contently,
      // function: "Real-time IP geolocation and network lookup",
      description:
        "Engaging tech articles, product reviews, coding insights, and trend updates for tech enthusiasts of all levels.",
      link: "https://abduldattijo.contently.com/?public_only=true",
    },
    {
      title: "Chess App",
      image: chess,
      // function: "Interactive ticket creation for a developer conference",
      description:
        "a captivating and interactive web application designed to bring the classic game of chess to life in the digital realm!",
      link: "https://mrwholesome01.github.io/Muhammads-Chess-game/",
    },
  ];

  const [seeMore, setSeeMore] = useState(2);

  useEffect(() => {
    gsap.to("._project_", { y: 0, duration: 3, opacity: 1, stagger: 0.1 });
  }, [seeMore]);

  return (
    <div
      ref={ref}
      id="Projects"
      className="_projects_ px-[10vw] mt-[10vw] my-[10vh]"
    >
      <h1 className="text-[5vw] font-semibold mb-3.5">My Projects</h1>
      <div className="projects grid lg:grid-cols-3 grid-cols-1 gap-12">
        {projects
          .filter((_, index) =>
            window.innerWidth < 1024 ? index < seeMore : true,
          )
          .map((project, index) => (
            <div
              className={`_project_ opacity-0 translate-y-[200px] lg:h-[70vh] h-[40vh] mt-8 overflow-hidden group rounded-2xl outline-1 outline-[#ff004f] `}
              key={index}
            >
              <div className="relative h-1/2">
                <img
                  src={project.image}
                  className="h-full object-cover w-full"
                  alt={project.title}
                />
                <div className="duration-500 absolute bottom-2 right-2 rounded-full lg:bg-transparent bg-[#ff004f] group-hover:bg-[#ff004f] w-fit h-fit p-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link
                      className="lg:text-[#ff004f] text-white font-extrabold group-hover:text-white"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    ></Link>
                  </a>
                </div>
              </div>
              <div className="text-description px-4 h-1/2 flex flex-col mt-4">
                <h2 className="text-[#ff004f] lg:text-[1vw] text-[4.5vw]">
                  {project.title}
                </h2>
                {/* <p>{project.function}</p> */}
                <p className="lg:text-[1.1vw] text-[3.5vw]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div
        className="flex lg:hidden items-center justify-center mt-8"
        onClick={() => {
          if (seeMore === 2) {
            setSeeMore(projects.length);
          } else {
            setSeeMore(2);
          }
        }}
      >
        <LucideArrowRightCircle size={35} className="text-red-600 " />
        <span className="mx-8">See {seeMore !== 2 ? "Less" : "More"}</span>
      </div>
    </div>
  );
};

export default Projects;

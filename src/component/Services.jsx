import React, { useEffect, useRef, useState } from "react";
import frontEnd from "../assets/images/aiEngineer.png";
import reactApp from "../assets/images/reactjs.jpg";
import apiIntegration from "../assets/images/API Integration & Automation.jpg";
import aiWeb from "../assets/images/AI-Powered Web Solutions.jpg";
import websiteRedesign from "../assets/images/Website Redesign & Performance Optimization.jpg";
import customDashboard from "../assets/images/dashboard.jpg";
import eCommerce from "../assets/images/ecommerce.jpg";
import { gsap } from "gsap";
import { LucideArrowRightCircle } from "lucide-react";
// import backendSupport from "../assets/images/backend-support.jpg";

const Services = () => {
  const ref = useRef();

  const [seeMore, setSeeMore] = useState(2);

  const animate = () => {
    gsap.to(".boxAnimations", {
      x: 0,
      duration: 1,
      opacity: 1,
      stagger: 0.5,
      ease: "sine.out",
    });
  };

  useEffect(() => {
    animate();
  }, [seeMore]);

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate();
      }
      return () => observer.disconnect();
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: "0.1",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);

    if (ref.current) observer.observe(ref.current);
  }, []);

  const myService = [
    {
      image: frontEnd,
      serviceName: "AI Engineer",
      description:
        "I am a professional AI Engineer that designs, develops, and deploys AI solutions to solve real-world problems. I specialize in machine learning, deep learning, and natural language processing.",
    },
    {
      image: reactApp,
      serviceName: "Web Development",
      description:
        "As a highly skilled web developer, I possess a wide range of technical expertise and a deep understanding of the intricacies of web development. Here are some of the key skills I bring to the table",
    },
    {
      image: apiIntegration,
      serviceName: "API Integration & Automation",
      description:
        "Integration of REST APIs and third-party services to extend website functionality. I build automated flows, fetch and display data, and create dynamic application features powered by reliable backend logic.",
    },

    {
      image: websiteRedesign,
      serviceName: "Website Redesign & Performance Optimization",
      description:
        "Modernization of outdated websites, UI/UX improvements, faster loading times, SEO-friendly structure, and fine-tuned front-end performance for improved user engagement.",
    },
    {
      image: customDashboard,
      serviceName: "Custom Dashboard & Data Visualization",
      description:
        "Creation of interactive dashboards, admin panels, and analytics pages using React chart libraries, and API-driven datasets. Perfect for businesses needing real-time insights.",
    },
    // { serviceName: "Backend Support (Beginner-Level)", description: "Assistance with basic backend tasks such as designing database schemas, writing SQL queries, connecting applications to backend services, and handling simple server-side logic." },
  ];

  return (
    <div
      ref={ref}
      id="Service"
      className="observee px-[10vw] mt-[15vh] my-[10vh]"
    >
      <h1 className="text-6xl font-bold text-center my-[5vh]">My Services</h1>
      <div className="services grid lg:grid-cols-3 grid-cols-1 gap-[2.5vw]">
        {myService
          .filter((_, index) => {
            if (window.innerWidth < 1024) {
              return index < seeMore;
            }
            return true;
          })
          .map((service, index) => (
            <div
              className={`boxAnimations bg-[#262626] rounded-2xl overflow-hidden flex flex-col justify-between translate-x-[-200px] opacity-0 lg:h-[40vh] h-[35vh] lg:mt-0 mt-6`}
              key={index}
            >
              <div className="h-[50%]">
                <img
                  className="h-full w-full object-cover"
                  src={service.image}
                  alt=""
                />
              </div>
              <div className="p-3 h-[50%]">
                <h3 className="lg:text-[1vw] text-[4vw] text-red-500">
                  {service.serviceName}
                </h3>
                <p className="lg:text-[0.9vw] text-[3vw]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        <div
          className="flex lg:hidden items-center justify-center mt-4"
          onClick={() => {
            if (seeMore === 2) {
              setSeeMore(myService.length);
            } else {
              setSeeMore(2);
            }
          }}
        >
          <LucideArrowRightCircle size={35} className="text-red-600 " />
          <span className="mx-8">See {seeMore !== 2 ? "Less" : "More"}</span>
        </div>
      </div>
    </div>
  );
};

export default Services;

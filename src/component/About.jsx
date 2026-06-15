import React, { useEffect, useRef } from "react";
import userImage from "../assets//images/aisha2.jpeg";
import { gsap } from "gsap";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

const About = () => {
  const ref = useRef();

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // alert("Visible");
        gsap.to(".leftside", { opacity: 1, x: 0, duration: 1 });
        gsap.to(".rightside", { opacity: 1, x: 0, duration: 1, delay: 0.5 });
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.3,
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: <Twitter size={32} />,
      url: "",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={32} />,
      url: "",
    },
    {
      name: "GitHub",
      icon: <Github size={32} />,
      url: "",
    },
    {
      name: "Facebook",
      icon: <Facebook size={32} />,
      url: "",
    },
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      url: "",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      id="About"
      className="observee _about_ grid lg:grid-cols-[35fr_65fr] lg:grid-cols-1 px-[10vw] gap-12 mt-[10vw]"
    >
      <div className="leftsideCont lg:block hidden">
        <img
          src={userImage}
          className="leftside rounded-[1rem] translate-x-[-400px] opacity-0 rounded-[8rem]"
          alt=""
        />
      </div>
      <div className="rightside flex flex-col justify-center translate-x-[400px] opacity-0">
        <h1 className="lg:text-6xl text-[8vw] font-semibold mb-3.5">
          About Aisha
        </h1>
        <p className="lg:text-[1.3vw] text-[3vw]">
          Aisha Abdullahi is a multi-talented professional in the field of web
          development, technical content writing, and entrepreneurship. With a
          passion for creating innovative digital solutions, Aisha has
          established himself as a skilled web developer, proficient in various
          programming languages and frameworks.
        </p>
        <div className="icons flex mt-9">
          {socialLinks.map((link, index) => (
            <a
              href={link.url}
              title={link.name}
              key={index}
              className="text-4xl mr-4 hover:scale-110 transition-transform bg-[#ff004f] p-2.5 rounded-full text-white flex items-center justify-center"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useRef } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { gsap } from "gsap";
import myCV from "../assets/projects/senior_ai_cv (2).pdf";

const Footer = () => {
  const ref = useRef();

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // alert("entered");
        gsap.to(".getInTouch", { x: 0, duration: 1 });
        gsap.to(".followMe", { x: 0, duration: 1 });
      }
    });
  };

  const options = { threshold: 0.1 };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionCallback, options);
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  });

  const icons = () => {
    if (window.innerWidth < 1024) {
      return [
        {
          name: "Twitter",
          icon: <Twitter size={10} />,
          url: "",
        },
        {
          name: "LinkedIn",
          icon: <Linkedin size={10} />,
          url: "",
        },
        {
          name: "GitHub",
          icon: <Github size={10} />,
          url: "",
        },
        {
          name: "Facebook",
          icon: <Facebook size={10} />,
          url: "",
        },
        {
          name: "Instagram",
          icon: <Instagram size={10} />,
          url: "",
        },
      ];
    } else {
      return [
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
    }
  };

  const socialLinks = icons();

  return (
    <div ref={ref} id="Contact" className="footer px-[10vw] mt-[10vh] ">
      <h1 className="lg:text-4xl text-[5vw] font-bold mb-12">My Contacts</h1>
      <div className="contacts grid lg:grid-cols-2 grid-cols-1 gap-12 pb-8 border-b border-gray-600">
        <div className="getInTouch translate-x-[-300px]">
          {" "}
          <h2 className="lg:text-4xl text-[4vw] font-bold mb-4">
            Get in Touch
          </h2>
          <p className="mb-2 lg:text-[1.4vw] text-[2vw]">
            Email:{" "}
            <a href="mailto:abduldattijo1@gmail.com" className="text-[#ff004f]">
              abduldattijo1@gmail.com
            </a>
          </p>
          <p className="mb-2 lg:text-[1.4vw] text-[2vw]">
            Phone: +234 902 462 4997
          </p>
          <p className="mb-2 lg:text-[1.4vw] text-[2vw]">
            LinkedIn:{" "}
            <a href="" className="text-[#ff004f]">
              Muhammad@linked
            </a>
          </p>
        </div>
        <div className="social-media">
          <h2 className="followMe lg:text-4xl text-[4vw] font-bold mb-4 translate-x-[300px]">
            Follow Me
          </h2>
          <div className="icons flex mt-9">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                title={link.name}
                key={index}
                className="lg:text-4xl text-[2vw] mr-4 hover:scale-110 transition-transform bg-[#ff004f] p-2.5 rounded-full text-white flex items-center justify-center"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <a
          href={myCV}
          download={"Muhammad Abdullahi CV"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff004f] rounded-[2rem] md:w-[40%] md:h-[10vh] h-[5vh] flex items-center justify-center text-white font-bold md:text-[1.5vw] text-[3vw] hover:bg-[#ff004f] transition-colors duration-300 mt-8"
        >
          Download CV
        </a>
      </div>
      <div className="w-full h-[10vh] flex justify-center items-center border-t border-gray-600">
        <p className="text-gray-500">© 2024 Muhammad. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

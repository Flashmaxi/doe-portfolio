"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>NextJS</li>
        <li>MongoDB</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Sarajevo, Political sciences <br></br> Peace and conflict resolution studies</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ITAcademy software development</li>
        <li>Academind Javascript course</li>
        <li>Academind React course</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-40" id="about">
      <div className="md:grid lg:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/aboutimg.png" width={500} height={500} alt="web development image" className="md:mx-auto lg:mx-0"/>
        <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, NextJS, MongoDB, TailwindCSS, Wordpress,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am excited to work with others to create amazing applications.
            I need to mention that I enjoy helping small businesses in Serbia and I am always open for 
            pro bono projects that can help people.
          </p>
          <div className="flex flex-row justify-start mt-8 text-[14px] md:text-[16px]">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-[14px] md:text-[16px] px-[16px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
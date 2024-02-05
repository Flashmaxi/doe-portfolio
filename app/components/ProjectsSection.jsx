"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Thunder's website",
    description: "At the moment this is the landing page for legendary recruiter in BTC space, Thunder. This will be home for her precious resources that will help people find a job in this space",
    image: "/images/projects/thunder-website.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Flashmaxi/thunder",
    previewUrl: "https://www.thunder.wtf/",
  },
  {
    id: 2,
    title: "Doggie.sk",
    description: "Project for all inclusive dog services, created a custom theme with Wordpress, bootstrap 5, JQuery for a client.",
    image: "/images/projects/doggie.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://doggie.sk",
  },
  {
    id: 3,
    title: "Bezagenta",
    description: "Created for custom wordpress theme with Wordpress, Bootstrap 5, JQuery for a client in Slovakia.",
    image: "/images/projects/bezagenta.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://bezagenta.online/",
  },
  {
    id: 4,
    title: "BTI",
    description: "Project created for a construction company in Slovakia. Created custom theme with Wordpress, Bootstrap 5, JQuery/Owl-carousel. Project is not yet live.",
    image: "/images/projects/bti.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 5,
    title: "DRXRacing",
    description: "Project created for a client in Slovakia.",
    image: "/images/projects/drx.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://drxracing.eu/",
  },
  {
    id: 6,
    title: "Respect-direct",
    description: "Project created for an insurance company in Slovakia, custom theme is created with Wordpress, Bootstrap 5, Jquery, Owl-carousel. Calculation is completed in Angular.",
    image: "/images/projects/respect.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://respect-direct.sk/",
  },
  {
    id: 7,
    title: "Kupisa.rs",
    description: "Created frontend for this website along with some other themes and functionalities for this platform.",
    image: "/images/projects/kupisa.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://kupisa.rs/",
  },
  {
    id: 8,
    title: "Tomin",
    description: "Project for a small business owner in Loznica, Serbia. He wanted to display his services online so I created a simple website using HTML and TailwindCSS.",
    image: "/images/projects/Tomin.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://autocentartomin.com/",
  },
  {
    id: 9,
    title: "DR Vlado",
    description: "Website for a small vet office in Loznica, Serbia. Client needed to show his online presence before other veterinarians start it in this small city. Website is created with Wordpress.",
    image: "/images/projects/drvlado.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://drvlado.com/",
  },
  {
    id: 10,
    title: "Zelena sapa",
    description: "Small dog grooming business in Serbia. Website is created with ReactJS and Tailwindcss",
    image: "/images/projects/sapa.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://zelenasapa.com/",
  },
  {
    id: 11,
    title: "Digitalo website",
    description: "This is the website of my local web development agency here in Serbia.",
    image: "/images/projects/digitalo-web.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://digitalo.me/",
  },
  {
    id: 12,
    title: "BizniLo website",
    description: "Project that I created as a business registry for Loznica. Goal of this project is to allow people to find what they looking for much easier. Because business owners in Loznica barely have any digital presence.",
    image: "/images/projects/biznislo.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://biznislo.com/",
  },
  {
    id: 13,
    title: "Digital art marketplace",
    description: "Practice project to get to know myself with React Native. I don't have a live project preview for it at this moment.",
    image: "/images/projects/art-marketplace.png",
    tag: ["All", "Mobile"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 14,
    title: "Practice project 1",
    description: "Recreation of custom design in ReactJS and CSS. No demo preview for this project I didn't decide to host it anywhere.",
    image: "/images/projects/practice1.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 15,
    title: "Practice project 2",
    description: "Recreation of WP Restaurant Theme in ReactJS and CSS. No demo preview for this project I didn't decide to host it anywhere.",
    image: "/images/projects/practice2.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 16,
    title: "Plant nursery Radumilo",
    description: "Project for a small business in Serbia. Website for this baby nursery was created in HTML and CSS. Also added 2 different themes to it Dark/light",
    image: "/images/projects/radumilo.png",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://rasadnikradumilo.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pb-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import SectionHead from "./SectionHead";
import { github } from "../assets";
const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
            // className="w-full green-pink-gradient p-1 rounded-2xl shadow-card"
        >
            <Tilt
                options={{ max: 30, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="black-gradient rounded-full w-10 h-10 absolute top-4 right-4 cursor-pointer grid place-items-center">
                        <img src={github} alt="github" />
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-xl">
                        {project.name}
                    </h3>
                    <p className="mt-2 text-secondary">{project.description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span className={`${tag.color}`}>#{tag.name}</span>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};
const Works = () => {
    return (
        <>
            <SectionHead title="Projects." subTitle="My work" />
            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-4 text-secondary text-lg max-w-3xl leading-[30px]"
                >
                    Follwing projects showcases my skills and knowledge in web
                    development. I have used various technologies to build these
                    projects.
                </motion.p>
            </div>
            <div className="mt-20 flex flex-wrap gap-5">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.name}
                        index={index}
                        project={project}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "works");

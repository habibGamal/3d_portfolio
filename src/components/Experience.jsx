import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn } from "../utils/motion";
import SectionHead from "./SectionHead";
import useMediaQuery from "../hooks/useMediaQuery";
const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
            }}
            date={experience.date}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div className="grid place-items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[90%] h-[90%] object-contain"
                    />
                </div>
            }
        >
            <motion.div variants={fadeIn("up")} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div>
                    <h3 className="text-white text-xl font-bold">{experience.title}</h3>
                    <p className="text-secondary text-lg font-semibold">{experience.company_name}</p>
                </div>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                        <li className="text-white-100 pl-1 tracking-wider">{point}</li>
                    ))}
                </ul>
            </motion.div>
        </VerticalTimelineElement>
    );
};
const Experience = () => {
    const smallDevice = useMediaQuery("(max-width: 768px)");

    return (
        <>
            <SectionHead title="Work Experience." subTitle="What I have done so far" />
            <div className="mt-20 flex flex-col">
                <VerticalTimeline animate={!smallDevice}>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");

import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import SectionHead from "./SectionHead";
const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="xs:w-[250px] w-full"
        >
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-1 rounded-2xl shadow-card"
            >
                <div className="bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    <img
                        src={icon}
                        alt={title}
                        className="w-16 h-16 object-contain"
                    />
                    <h3 className="text-white text-xl font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};
const About = () => {
    return (
        <>
            <SectionHead title="Overview." subTitle="Introduction" />
            <motion.p
                className="mt-4 text-secondary text-lg max-w-3xl leading-[30px]"
                variants={fadeIn("", "", 0.1, 1)}
            >
                I am a full stack web developer with a passion for creating
                beautiful and functional websites. I have a strong background in
                web development and I am always looking for new opportunities to
                learn and grow.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");

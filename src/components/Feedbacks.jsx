import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import SectionHead from "./SectionHead";

const FeedbackCard = ({ testimonial, index }) => {
    return (
        <motion.div
            variants={fadeIn("", "spring", index * 0.5, 0.75)}
            className="bg-black-200 rounded-3xl w-full xs:w-[320px] p-10"
        >
            <span className="text-white font-black text-5xl">"</span>
            <div className="mt-1">
                <p className="text-white tracking-wider text-lg">{testimonial.testimonial}</p>
                <div className="mt-7 flex justify-between items-center gap-1">
                    <div className="flex-1 flex flex-col">
                        <p className="font-medium">
                            <span className="blue-text-gradient">@</span> {testimonial.name}
                        </p>
                        <p className="mt-1 text-secondary text-xs">
                            {testimonial.designation} of {testimonial.company}
                        </p>
                    </div>
                    <img src={testimonial.image} alt="feedback" className="w-10 h-10 rounded-full object-cover" />
                </div>
            </div>
        </motion.div>
    );
};

const Feedbacks = () => {
    return (
        <div className="mt-12 bg-black-100 rounded-xl">
            <div
                className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
            >
                <SectionHead title="Testimonials" subTitle="what others say" />
            </div>
            <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
                {testimonials.map((testimonial, index) => (
                    <FeedbackCard
                        key={index}
                        index={index}
                        testimonial={testimonial}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "feedbacks");

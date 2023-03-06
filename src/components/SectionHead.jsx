import React from "react";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

export default function SectionHead({ title, subTitle }) {
    return (
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>{subTitle}</p>
            <h2 className={`${styles.sectionHeadText}`}>{title}</h2>
        </motion.div>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
    return (
        <section className="relative w-full h-screen">
            <div
                className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-indigoo" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-indigoo">Habib</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop 3D visuals, user{" "}
                        <br className="sm:block hidden" /> interfaces , web and
                        mobile applications.
                    </p>
                </div>
            </div>
            <ComputersCanvas />
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
              <a href="#about" className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-4 h-4 rounded-full bg-secondary"
                />
              </a>
            </div>
        </section>
    );
};

export default Hero;

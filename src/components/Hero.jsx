import React, { useEffect } from "react";
import { MotionValue, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { fadeIn, slideIn } from "../utils/motion";
const code = `const project = 'idea';

const developer = execute(project);

if(developer === 'Habib') console.log("Together, we can bring your vision to life!");

else console.log("Don't let your vision be compromised. Choose the right developer!");

console.log("What are you waiting for?");
`;
const Hero = () => {
    const { scrollYProgress } = useScroll();
    const scaleEffect = useTransform(scrollYProgress, [0, 0.06, 0.12], [0.6, 1, 1]);
    const s = useSpring(scaleEffect,{stiffness: 100});
    // const motionEffect = useTransform(scrollYProgress, [0, 0.05, 0.1], [0, -100, 0]);

    return (
        <section className="w-full">
            <div className={`${styles.paddingX} pt-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 mb-16`}>
                <motion.div
                    variants={fadeIn("up", "spring", 0.1, 0.75)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col justify-center items-center mt-5"
                >
                    <div className="w-5 h-5 rounded-full bg-indigoo" />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </motion.div>
                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-indigoo">Habib</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I develop user interfaces ,
                        <br className="sm:block hidden" /> web , mobile and desktop applications.
                    </p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center mb-8">
                <a
                    href="#about"
                    className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
                >
                    <motion.div
                        animate={{ y: [0, 24, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-4 h-4 rounded-full bg-secondary"
                    />
                </a>
            </div>
            <motion.div
                style={{ scale: s }}
                className="bg-black max-w-[90%]  md:max-w-7xl text-lg sm:text-2xl rounded-xl mx-auto overflow-hidden"
            >
                <div className="bg-gray-800 w-full h-2 p-4 flex flex-row-reverse gap-4">
                    <div className="rounded-full h-2 w-2 bg-red-500"></div>
                    <div className="rounded-full h-2 w-2 bg-yellow-500"></div>
                    <div className="rounded-full h-2 w-2 bg-green-500"></div>
                </div>
                <SyntaxHighlighter
                    customStyle={{ height: "100%", padding: "2rem" }}
                    wrapLongLines
                    language="javascript"
                    style={atomOneDark}
                >
                    {code}
                </SyntaxHighlighter>
                <div className="bg-indigoo w-full h-1" />
            </motion.div>
            {/* <ComputersCanvas /> */}
        </section>
    );
};

export default Hero;

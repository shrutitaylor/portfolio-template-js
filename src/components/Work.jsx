
import React, { useRef } from "react";
import TiltedCard from "./TitledCard";
import moodify from "/img1_.png";
import soil from "/img2_.png";
import artportfolio from "/img3_.png";
import headphones from "/img5_.png";

import {
    AnimatePresence,
    motion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";

const projects = [
    {
      id: 1,
      imageSrc: moodify,
      altText: "Moodify * 2025",
      captionText: "Moodify",
      desc: "Moodify is a web application that allows users to search for songs based on their mood.",
      circle: "MOODIFY*MOODIFY*MOODIFY*",
    },
    {
      id: 2,
      imageSrc: soil,
      altText: "Soil Grocery * 2024",
      captionText: "Soil",
      desc: "A platform for shopping fresh organic fruits, veggies and dairy from farmers.",
      circle: "SOIL*SOIL*SOIL*",
    },
    {
      id: 3,
      imageSrc: artportfolio,
      altText: "Art Portfolio * 2023",
      captionText: "Art Portfolio",
      desc: "A portfolio website for showcasing artwork, SKILLS and creative projects.",
      circle: "ART*ART*ART*",
    },
    {
      id: 4,
      imageSrc: headphones,
      altText: "Headphones * 2025",
      captionText: "Headphones",
      desc: "A 3D product showcase for headphones with interactive features. Showcasing GSAP AND THREE.JS SKILLS",
      circle: "HEADPHONES*HEADPHONES*HEADPHONES*",
    },
  ]



// TiltedCard with Parallax
export default function Work() {
    

    return (
        <section className="min-h-screen flex flex-col justify-center items-center " >
           { projects.map((project, index) => (
            <AnimatePresence>
            <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{
                 duration: 0.4,
                 scale: {  visualDuration: 0.4, bounce: 0.5 },
                 ease: ["easeIn", "easeOut"] 
             }}
             
             className="h-[70vh]"
             key={index} >
                <TiltedCard
                    imageSrc={project.imageSrc}
                    altText={project.altText}
                    captionText={project.captionText}
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="500px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    circle={project.circle}
                    desc={project.desc}
                    overlayContent={
                        <p className="text-white text-center text-xl font-bold">
                            {project.captionText}
                        </p>
                    }
                />
            </motion.div>
            </AnimatePresence>
      ))}
        </section>
    );
}


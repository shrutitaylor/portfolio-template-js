import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import StarWarDesign from "../model/starWar";
import './util';
import Work from "./Work";
import ScrollFloat from "../blocks/TextAnimations/ScrollFloat/ScrollFloat";
import ScrollVelocity from "./scrollVelocity";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const mainRef = useRef(null);
    const sceneRef = useRef(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animation for the 3D scene
        gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: (self) => {
                    setProgress(self.progress);
                },
            },
        })
        .to(sceneRef.current, {
            x: '-30vw',
            y: '110vh',
            ease: "linear"
        });
    }, []);

    return (
        <>
            <div className="min-h-screen w-full mt-14 overflow-hidden">
            
                <main ref={mainRef} className="overflow-hidden text-black">
                    {/* Section 1 */}
                    <section className="relative flex flex-col grid h-[100vh]">
                        <div className="absolute top-10 w-[100vw]">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="w-full font-aoMono justify-between flex-col p-10 h-[400px] mb-5 bg-grey rounded-lg">
                                    <p>WELCOME TO MY PORTFOLIO</p>
                                    <p className="mt-[250px] text-5xl p-4 bg-white  w-44">うちは</p>
                                </div>
                                <div className="text-right text-grey font-aoMono p-10">
                                    JANE DOE <br /> based in melbourne
                                </div>
                            </div>
                            <div className="grid grid-cols-1 text-grey m-5 w-full">
                                <h4 className="text-xl md:text-4xl font-aoMono font-bold">INDEPENDENT FRONTEND</h4>
                                <h1 className="text-4xl md:text-8xl md:pl-10 font-pressStart">
                                    web developer
                                </h1>
                            </div>
                        </div>

                        {/* Canvas (independent of fade effects) */}
                        <div ref={sceneRef} className="z-50 h-[110vh] w-[100vw]">
                            <Canvas>
                                <StarWarDesign progress={progress} />
                            </Canvas>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section id="about" className="relative text-right flex items-center w-screen justify-start h-[100vh]">
                        {/* Developer Text (behind the canvas) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 w-screen">
                        <div className="hidden md:block text-center border-0 outline-text font-pressStart text-5xl z-10">
                        
                           <p>developer</p> developer<br />
                            developer<br />
                            developer<br />
                            developer<br />
                            developer<br />
                            developer<br />
                            developer<br />
                            developer<br />
                            
                        </div>

                        

                        {/* Other Content */}
                        <div className="text-right text-grey font-aoMono p-10">
                                   <h1 className="font-pressStart text-7xl">ABOUT ME</h1>
                                   <p className="font-aoMono text-xl">
                                   I blend art and code to create meaningful digital experiences. Whether it’s designing user-friendly interfaces, building seamless web applications or adding a dash of creativity to every project, I believe in making ideas come alive.  </p>
                                   <p className="font-aoMono text-xl mt-5">
                                   So whether you need someone to code a digital masterpiece or paint a literal one, I’m your person! Let’s create something amazing together.
                                   </p>
                        </div>
                        </div>
                    </section>
                </main>

                {/* Carousel Section */}
                <div id="work" className="flex p-10 flex-col justify-center items-center w-screen">
                <ScrollVelocity texts={[ 'Projects']}  className="custom-scroll-text font-pressStart text-grey mb-44" />
                    <Work />
                    {/* <Carousel />
                     */}
                      {/* <Canvas orthographic camera={{ zoom: 80 }} gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]}>
                            <color attach="background" args={['#f0f0f0']} />
                            <ScrollControls damping={6} pages={5}>
                            <Items />
                            <Scroll html style={{ width: '100%' }}>
                                <h1 style={{ position: 'absolute', top: `100vh`, right: '20vw', fontSize: '25em', transform: `translate3d(0,-100%,0)` }}>all</h1>
                                <h1 style={{ position: 'absolute', top: '180vh', left: '10vw' }}>hail</h1>
                                <h1 style={{ position: 'absolute', top: '260vh', right: '10vw' }}>thee,</h1>
                                <h1 style={{ position: 'absolute', top: '350vh', left: '10vw' }}>thoth</h1>
                                <h1 style={{ position: 'absolute', top: '450vh', right: '10vw' }}>
                                her
                                <br />
                                mes.
                                </h1>
                            </Scroll>
                            </ScrollControls>
                        </Canvas> */}
                        
                </div>

                {/* Carousel Section */}
                {/* <div className="relative min-h-screen flex justify-center p-10 w-screen">
                    <Work />
                </div> */}
                <ScrollVelocity texts={[ 'Lets Connect']}  className="custom-scroll-text font-pressStart text-grey " />
                <div id="contact"  className="flex justify-center mt-5"><Button/></div>
            </div>
        </>
    );
}
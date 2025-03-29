"use client";
import Hero from "@/components/Hero";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import('@/components/Grid'), { ssr: false });
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false });
const Approach = dynamic(() => import('@/components/Approach'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });


export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth the movement using useSpring
  const smoothX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  

  return (
    <>
      <motion.div
        className="fixed z-[1]  w-96 h-96 md:w-[20rem] md:h-[20rem] bg-[#0e1a5aa0]  opacity-1 rounded-full blur-3xl"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%", // Center the circle
          translateY: "-50%", // Center the circle
        }}
      ></motion.div>
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 w-full">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center ">
        <Hero />
        <Grid />
        <RecentProjects />
        <Approach />
        <Footer />
      </div>
    </main>
        </>
  );
}

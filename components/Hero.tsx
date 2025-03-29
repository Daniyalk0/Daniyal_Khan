"use client";

import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "motion/react";
import { Button } from "./ui/Moving-border";
import { Cover } from "./ui/Cover";
import { cn } from "@/utils/cn";
// import { perspective } from "./header/Nav/anim";

const Hero = () => {
  const perspective = {
    initial: {
      opacity: 0,
      rotateX: 90,
      translateY: 80,
      translateX: -20,
    },
    enter: (i?: number) => ({
      opacity: 1,
      rotateX: 0,
      translateY: 0,
      translateX: 0,
      transition: {
        duration: 1,
        delay: i !== undefined ? 0.4 + i * 0.4 : 0, // If i exists, stagger; else, use 0.4s
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.35 },
      },
    }),
    exit: {
      opacity: 0,
      transition: { duration: 1, type: "linear", ease: [0.76, 0, 0.24, 1] },
    },
  };

  const text = ["Frontend Developer", ["React", "&", "NextJS"], "Enthusiast"];

  return (
    <div className="pb-12 pt-24  md:pt-32 overflow-hidden relative z-[50]  w-screen md:min-h-screen">
      <div>
        <Spotlight
          className="md:h-[90vh] h-[20rem] w-[40rem] md:w-[50vw] md:top-10  md:left-[90%] left-[70%] top-5"
          fill="white"
        />
        <Spotlight
          className="md:left-80 md:top-28 top-36 md:h-[80rem] md:w-[80rem] h-[80rem] w-[30rem]"
          fill="purple"
        />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white md:dark:bg-grid-white/[0.04] bg-grid-black-100/[0.2] dark:bg-grid-white/[0.01] 
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center w-full relative my-0 md:mb-6 md:mt-0 z-[1000] ">
        <div className="w-full  md:max-w-2xl lg:max-w-[80vw] flex flex-col items-center justify-center ">
          <div
            className={cn(
              "[perspective:30px] [perspective-origin:bottom]",
              "md:[perspective:20px] "
            )}
          >
            <motion.div
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
              className={cn(
                "border-b-[1px] border-[#2638ff] relative flex items-center justify-center font-blade-singer-cond tracking-wider text-xl md:text-3xl w-full",
                "w-fit mb-2 lg:mb-12 "
              )}
            >
              <motion.h1
                style={{
                  background:
                    "linear-gradient(120deg, rgba(0,146,255,1) 25%, rgba(0,10,194,1) 69%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                hi, im daniyal
              </motion.h1>

              {/* Wrapper for the dot */}
              <div className="relative ml-2 flex items-center mb-1">
                <motion.span className="flex size-[10px] md:size-[16px]">
                  {/* Pulsing Effect */}
                  <span
                    className="absolute inset-0 animate-ping rounded-full bg-[#26fffb] opacity-75"
                    style={{}}
                  ></span>

                  {/* Main Dot with Border */}
                  <span className="relative size-[10px] md:size-[16px] rounded-full bg-[#2638ff] "></span>
                </motion.span>
              </div>
            </motion.div>
          </div>

          <div className="w-full flex items-center justify-center flex-col">
            <motion.div className="flex items-center justify-center flex-col gap-3 mt-4  md:mt-0">
              {text.map((t, i) => {
                return (
                  <div
                    key={i}
                    className={cn(
                      "w-fit mb-2 [perspective:80px] [perspective-origin:bottom]",
                      "md:[perspective:40px] leading-tight"
                    )}
                  >
                    <motion.h1
                      custom={i}
                      variants={perspective}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                      className="w-fit text-[45px] md:text-5xl lg:text-7xl text-center z-20 py-0 font-blade-singer-bold "
                      style={{
                        background:
                          "linear-gradient(120deg, rgba(0,146,255,1) 25%, rgba(0,10,194,1) 69%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {i === 1 ? (
                        <div className="flex items-center justify-center flex-col md:flex-row md:gap-2 leading-snug">
                          <Cover>{t[0]}</Cover>
                          {t[1]} <Cover>{t[2]}</Cover>
                        </div>
                      ) : (
                        t
                      )}
                    </motion.h1>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="overflow-hidden w-full flex items-center justify-center mt-[3rem] md:mt-12">
            <motion.a
              href="#projects"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 300,
                ease: "easeOut",
                delay: 2.2,
              }}
            >
              <Button
                containerClassName="flex items-center  justify-center h-12  rounded-md "
                borderRadius="0"
                className=""
                borderColor="#2679ff"
              >
                <div className="flex w-full items-center justify-center gap-2 font-blade-singer-cond tracking-widest text-[#2679ff]">
                  <p>See My Work</p>
                  <FaLocationArrow />
                </div>
              </Button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

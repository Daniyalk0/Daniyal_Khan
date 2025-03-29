"use client";

import { useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
// import Lottie from "react-lottie";

// import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradientBg";
// import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
// import MagicButton from "../MagicButton";
import { cn } from "@/utils/cn";
import MagicButton from "./MagicButton";
import Lottie from "react-lottie";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { techIcons } from "@/data";
import { HoverBorderGradient } from "./hover-border-gradient";
import { BackgroundLines } from "./background-lines";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
  spareImgClass,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  spareImgClass?: string;
}) => {
  const techStack = [
    "ReactJS",
    "NextJS",
    "Typescript",
    "Javascript",
    "Html",
    "CSS",
    "TailwindCSS",
    "Git",
    "Github",
    "Sanity.io",
    "Appwrite",
    "OAuth",
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "getdaniyalkhan@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Tracks vertical scroll range
  });
  const rawY1 = useTransform(scrollYProgress, [0, 1], ["20%", `-150%`]);
  const rawY2 = useTransform(scrollYProgress, [0, 1], ["-150%", `20%`]);

  // Moves slides up infinitely
  const y = useSpring(rawY1, { damping: 40, stiffness: 60 });
  const y2 = useSpring(rawY2, { damping: 40, stiffness: 60 });
  const firstHalf = techIcons.slice(0, 6);
  const secondHalf = techIcons.slice(6, 12);

  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 80, damping: 15 }} // Spring effect
    viewport={{ once: true }}
      ref={containerRef}
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} w-full h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
            // fill
            width={200}
            height={200}
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }  ${id === 1 && '-top-24 -left-3 lg:-left-0 lg:top-0'}`}
        >
          {spareImg && (
            <Image
  
              src={spareImg}
              alt={spareImg}
                width={220}
                height={220}
              className={cn(spareImgClass, "object-cover object-center w-full h-full")}
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
            id === 1 && ""
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className={`ont-sans font-extralight  md:text-xs lg:text-base text-sm text-[#696973] z-10 tracking-wider font-blade-singer-cond w-[80%] md:w-[50%] text-[0.8rem]`}>
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={` text-lg lg:text-2xl max-w-96 font-bold z-10 font-blade-singer-cond tracking-wider`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {/* {id === 2 && <GridGlobe />} */}

          {/* Tech stack list div */}
          {/* {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )} */}
          {id === 1 && (
            // <BackgroundLines>

            <div className="relative w-full md:left-20 lg:left-10  rotate-[15deg]">
              {/* First 6 items (left side) */}
              <motion.div
              
                style={{ y }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.7 }}
                className="flex flex-col absolute top-1/2 left-[55%] lg:left-[50%] gap-5 -translate-y-1/2 "
              >
                {firstHalf.map((tech, i) => (
                  <HoverBorderGradient
                    key={i}
                    containerClassName=""
                    as="button"
                    className="!bg-transparent  dark:text-white !dark:bg-transparent "
                    >
                    <img
                
                      src={tech.src}
                      alt={`Icon ${tech.key}`}
                      className="aspect-square object-contain md:p-1"
                      style={{ aspectRatio: 1 / 1 }}
                    />
                  </HoverBorderGradient>
                ))}
              </motion.div>

              {/* Second 6 items (right side) */}
              <motion.div
                style={{ y:y2 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.7 }}
                className="flex flex-col absolute top-1/2 left-[70%] gap-5 -translate-y-1/2 "
              >
                {secondHalf.map((tech, i) => (
                  <HoverBorderGradient
                    key={i + 6}
                    containerClassName=""
                    as="button"
                    className="!bg-transparent dark:text-white flex items-center dark:bg-[#110f56]"
                  >
                    <img
          
                      src={tech.src}
                      alt={`Icon ${tech.key}`}
                      className="aspect-square object-contain md:p-1"
                      style={{ aspectRatio: 1 / 1 }}
                      />
                  </HoverBorderGradient>
                ))}
              </motion.div>
            </div>
                      // </BackgroundLines>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

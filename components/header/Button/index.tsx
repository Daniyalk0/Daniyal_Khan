"use client";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { useState } from "react";

export default function Button({
  isActive,
  toggleMenu,
  className,
}: {
  isActive: boolean;
  toggleMenu: () => void;
  className: string;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={` w-[100px] h-[40px] cursor-pointer overflow-hidden  top-0 right-2  `}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className={'relative w-full h-full'}
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className={`w-full h-full text-black-100 `}
          //   style={{ transform: hovered ? "rotateX(90deg)" : "none" }}
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText label="Menu" hovered={hovered} isActive={isActive} />
        </div>
        <div
          className={`w-full h-full text-black-100 bg-zinc-900 `}
          //
          onClick={() => {
            toggleMenu();
          }}
        >
          <PerspectiveText
            label="Close"
            hovered={hovered}
            isActive={isActive}
          />
        </div>
      </motion.div>
    </div>
  );
}

function PerspectiveText({
  label,
  hovered,
  isActive,
}: {
  label: string;
  hovered: boolean;
  isActive: boolean;
}) {
  return (
    <div 
    
      className={` flex flex-col items-center justify-center h-full w-full  font-blade-singer-cond tracking-wider `}
      style={{
        transform: hovered ? "rotateX(90deg)" : "none",
        transformStyle: "preserve-3d",
        transition: "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      <p
        className={`${hovered ? "opacity-0 -translate-y-full" : ""} ${
          isActive ? "text-[#46a7f6]" : ""
        } m-0 pointer-events-none`}
        style={{ transition: "all 0.75s cubic-bezier(0.76, 0, 0.24, 1)" }}
      >
        {label}
      </p>
      <p
        className={`${
          hovered ? "opacity-100" : "opacity-0"
        } m-0 pointer-events-none absolute  ${
          isActive ? "text-[#46a7f6]" : ""
        }`}
        style={{
          transition: "all 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
          transformOrigin: "bottom center",
          transform: "rotateX(-90deg) translateY(9px)",
        }}
      >
        {label}
      </p>
    </div>
  );
}

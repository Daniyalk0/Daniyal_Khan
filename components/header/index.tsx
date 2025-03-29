"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: "70vw",
    height: "70vh",
  });
  // const [rightValue, setRightValue] = useState(null);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setDimensions({ width: "64vw", height: "70vh" }); // Mobile screens
      } else if (window.innerWidth < 1024) {
        setDimensions({ width: "60vw", height: "80vh" }); // Tablet screens
      } else {
        setDimensions({ width: "40vw", height: "85vh" }); // Desktop screens
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const menu = {
    open: {
      width: dimensions.width,
      height: dimensions.height,
      top: "-5px",
      right: "-5px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "100px",
      height: "40px",
      // top: "16px",
      // right: '',
      transition: {
        duration: 0.75,
        delay: 0.35,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const navbarRef = useRef(null);

  // Function to close the navbar when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div
      className={`fixed z-[2000] right-0 top-0 py-4 px-6 lg:px-10  w-full  flex items-center justify-end  `}
    >
      <motion.div
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
        <motion.div
          ref={navbarRef}
          className={`w-[40vw]  h-[70vh]  absolute overflow-hidden `}
          style={{
            background:
              "linear-gradient(90deg, rgba(86,183,255,1) 32%, rgba(0,49,168,1) 82%)",
          }}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav setIsActive={setIsActive}/>}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
            console.log("okayy");
          }}
        />
      </motion.div>
    </div>
  );
}

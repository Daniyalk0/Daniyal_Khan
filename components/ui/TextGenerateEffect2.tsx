"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect2 = ({
  words,
  className,
  filter = true,
  duration = 0.4,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
              // change here if idx is greater than 3, change the text color to #CBACF9
              className={`${(idx === 2 || idx === 4) ? "text-purple underline bg-red-500 p-2 rounded-xl" : "dark:text-white text-black"} opacity-0`}

            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {/* mt-4 to my-4 */}
      <div className="my-4">
        {/* remove  text-2xl from the original */}
        <div className=" dark:text-white text-black leading-snug tracking-wider  font-blade-singer-italic">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
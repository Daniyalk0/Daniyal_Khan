"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Approach = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.8 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 ,  transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 15,
    },
  }
  };
  return (
    <section className="w-full py-5  mt-24 md:mt-0 md:pb-0 md:pt-20 relative md:min-h-screen   z-[500]" id="approach">
       <h1 className="heading font-blade-singer-cond flex items-center justify-center flex-wrap tracking-wider !text-3xl md:!text-5xl">
             My{" "}
             <span className="relative inline-block overflow-hidden py-2 px-2 md:px-4 mx-2">
               {/* Background Animation */}
               <motion.span
  style={{
    background:
      "linear-gradient(90deg, rgba(0,146,255,1) 11%, rgba(0,18,62,1) 65%)",
  }}
  className="absolute left-0 rounded-xl top-0 h-full w-full z-0"
  initial={{ width: 0 }}
  whileInView={{ width: "100%" }}
  viewport={{ once: true, amount: 0.5 }} // Ensures it triggers only once
  transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
/>

     
               {/* Text Above the Background */}
               <span className="relative z-10 text-white">Approach</span>
             </span>
           </h1>
      {/* remove bg-white dark:bg-black */}
      <motion.div 
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  className="my-10 md:my-14 flex flex-col md:flex-row items-center justify-center w-full gap-4"
>
  <motion.div variants={childVariants}>
    <Card
      title="Planning & Strategy"
      icon={<AceternityIcon order="Phase 1" />}
      des="We'll collaborate to map out your website's goals, target audience, 
      and key functionalities. We'll discuss things like site structure, 
      navigation, and content requirements."
    />
  </motion.div>

  <motion.div variants={childVariants}>
    <Card
      title="Development & Progress Update"
      icon={<AceternityIcon order="Phase 2" />}
      des="Once we agree on the plan, I cue my lofi playlist and dive into
      coding. From initial sketches to polished code, I keep you updated
      every step of the way."
    />
  </motion.div>

  <motion.div variants={childVariants}>
    <Card
      title="Development & Launch"
      icon={<AceternityIcon order="Phase 3" />}
      des="This is where the magic happens! Based on the approved design, 
      I'll translate everything into functional code, building your website
      from the ground up."
    />
  </motion.div>
</motion.div>

    </section>
  );
};

export default Approach;

const Card = ({
  title,
  icon,
  children,
  // add this one for the desc
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const [element1, setElement1] = useState({ x: 0, y: 0 });
  const [element2, setElement2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveShadow = () => {
      setElement1({
        x: (Math.random() - 0.5) * 500, // Move within ±100px range
        y: (Math.random() - 0.5) * 500, // Move within ±100px range
      });
    };
  
    const interval = setInterval(moveShadow, 2000); // Move every 2 seconds
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const moveShadow = () => {
      setElement2({
        x: (Math.random() - 0.5) * 500, // Move within ±100px range
        y: (Math.random() - 0.5) * 500, // Move within ±100px range
      });
    };
  
    const interval = setInterval(moveShadow, 2000); // Move every 2 seconds
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // change h-[30rem] to h-[35rem], add rounded-3xl
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  lg:h-[35rem] rounded-3xl  relative overflow-hidden bg-[#00000044] md:h-[25rem]"
    >
      
      {hovered && (
        <>
          <motion.div
            className={`absolute w-64 h-64 md:w-80 md:h-80 ${title === 'Planning & Strategy' ? 'bg-blue-500' : title === 'Development & Progress Update' ? 'bg-pink-600' : 'bg-[#15ffb1]' }  blur-3xl opacity-1`}
            animate={{ x: element1.x, y: element1.y }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
             className={`absolute w-64 h-64 md:w-80 md:h-80 ${title === 'Planning & Strategy' ? 'bg-blue-500' : title === 'Development & Progress Update' ? 'bg-pink-600' : 'bg-[#15ffb1]' }  blur-3xl opacity-1`}
            animate={{ x: -element2.x, y: -element2.y }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          />
        </>
      )}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-5 md:px-10">
        <div
          // add this for making it center
          // absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          // change text-3xl, add text-center
          className="dark:text-white text-center text-2xl md:text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200 font-blade-singer-cond tracking-wider"
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200 font-blade-singer-cond tracking-wide md:tracking-wider"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};
// add order prop for the Phase number change
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-xl p-[1px] font-blade-singer-bold tracking-wider">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-xl bg-slate-950 px-5 py-2 text-[#268fff] backdrop-blur-3xl font-bold text-xl md:text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
    // remove the svg and add the button
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

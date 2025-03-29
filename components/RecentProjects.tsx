"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";
import Link from "next/link";

const RecentProjects = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 1.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };
  return (
    <div className="mt-6 md:py-12 relative z-[50]" id="projects">
      <h1 className="heading font-blade-singer-cond flex items-center justify-center flex-wrap tracking-wider">
        A small selection of{" "}
        <span className="relative inline-block overflow-hidden py-2 px-4 md:mx-2">
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
          <span className="relative z-10 text-white">recent projects</span>
        </span>
      </h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-8 xl:gap-y-12 md:p-2 mt-0 place-items-center  w-full "
      >
        {projects.map((item) => (
          <motion.div
          variants={childVariants}
          className="sm:h-[41rem] h-[30rem] lg:h-[35rem]   flex items-center justify-center sm:w-[570px] w-[80vw] md:h-[32rem] lg:w-[45vw] "
          key={item.id}
          >
            <Link href={item?.link} target="_blank">
            <PinContainer
              title={item?.linkname}
              href={item.link}
              className=""
              containerClassName=""
            >
              <div className="relative  flex items-center justify-center sm:w-[570px] sm:h-[40vh]  w-[18.4rem] overflow-hidden h-[30vh] lg:h-[45vh] md:mb-10 mb-6 lg:w-[42vw] xl:h-[50vh]">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl rounded-xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <div className="absolute w-[14rem] h-[70%] scale-[1.2]   sm:w-[20rem] lg:h-[65%] xl:scale-[1.3]">
                  {" "}
                  {/* Define the size here */}
                  <Image
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 rotate-[5deg]"
                    fill
                  />
                </div>
              </div>
              <div className="flex items-start md:items-center flex-col md:flex-row ">
                <h1 className="font-blade-singer-cond  tracking-widest lg:text-xl md:text-xl text-2xl  text-[#268fff] mr-2">
                  {item.name}
                </h1>
                <h1 className="font-blade-singer-cond tracking-widest lg:text-[1rem] md:text-xl text-lg line-clamp-1 ">
                  {item.title}
                </h1>
              </div>

              <p
                className="tracking-widest font-light text-sm line-clamp-2 font-blade-singer-cond leading-normal md:leading-6"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                    key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image src={icon} alt="icon5" className="p-2" fill />
                    </div>
                  ))}
                </div>

                <a
                  className="flex justify-center items-center"
                  href={item?.link}
                  target="_blank"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple font-blade-singer-cond">
                    Live
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </a>
              </div>
            </PinContainer>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecentProjects;

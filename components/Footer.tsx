"use client";

import { socialMedia } from "@/data";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="w-full pt-0 pb-10  z-[50]   relative flex items-center justify-center flex-col"
      id="contact"
    >
      <img
        src="./Ellipse1.png"
        alt=""
        className="w-[80%] absolute z-[0] left-[0%] md:w-[60%]  lg:w-[40%] brightness-[3] -top-16 "
      />
      <img
        src="./Ellipse1.png"
        alt=""
        className="w-[80%] absolute z-[0] md:w-[60%]  lg:w-[40%]  left-[0%]  brightness-[3] bottom-[0%] lg:top-[20rem]"
      />
      <img
        src="./Ellipse1.png"
        alt=""
        className="w-[80%] absolute z-[0] md:w-[60%]  -right-48  brightness-[3] bottom-[0%] lg:top-[10rem]"
      />

      <h1 className="heading font-blade-singer-cond flex items-center justify-center flex-wrap tracking-wider relative my-12 md:my-14 !text-3xl md:!text-5xl">
        Get in{" "}
        <span className="relative inline-block overflow-hidden py-2 px-2 md:px-4 mx-2">
 
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
          <span className="relative z-10 text-white">touch</span>
        </span>
      </h1>

      <ContactForm />

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative w-full">
      <p className="md:text-sm text-[0.8rem] mb-2 md:mb-0 md:font-normal font-blade-singer-cond tracking-widest">
  Copyright <span className="font-sans">&copy;</span> 2025 Daniyal Khan
</p>


        <div className="flex items-center md:gap-3 gap-4">
          {socialMedia.map((info) => (
            <a
            href={info.href}
            target="_blank"
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

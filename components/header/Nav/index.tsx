import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import { socialMedia } from "@/data";

export default function index({setIsActive}) {
  return (
    <div className={` flex flex-col justify-between h-full  px-5 py-20 md:px-10 lg:px-12 `}>
      <div className={` flex flex-col gap-3 md:gap-6 lg:gap-8`}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={''} style={{perspective:'120px', perspectiveOrigin:'bottom'} }>
              <motion.div

                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
                whileHover={{ x: 20, y: -10 }} // Moves 20px right and 10px up on hover
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a className="text-zinc-900 text-2xl md:text-[2.5rem] lg:text-[3rem] font-blade-singer-cond cursor-pointer" key={href} href={`#${href}`} onClick={() => setIsActive(false)}
 >
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={'flex flex-wrap '}>
  {socialMedia.map((link, i) => {
    const { title, href } = link;
    return (
      <motion.a
        href={href}
        variants={slideIn}
        custom={i}
        initial="initial"
        animate="enter"
        exit="exit"
        key={`f_${i}`}
        className="font-blade-singer-cond tracking-widest text-black-100 mt-3
          w-[50%]"
        whileHover={{
          scale: 1.1, // Slightly enlarge the link
          color: "#47c8ff", // Change text color on hover
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        {title}
      </motion.a>
    );
  })}
</motion.div>

    </div>
  );
}

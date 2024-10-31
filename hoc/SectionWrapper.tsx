import { motion } from "framer-motion";

import { styles } from "@/data/styles";
import { staggerContainer } from "@/lib/motion";
import React from "react";

const StarWrapper =<P extends object> (Component: React.ComponentType<P>, idName: string) =>
  function HOC(props: P) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };

export default StarWrapper;
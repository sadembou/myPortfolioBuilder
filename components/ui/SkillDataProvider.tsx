'use client'
import {motion} from 'framer-motion';
import { useInView} from 'react-intersection-observer';

type props={
    title?:string,
    src:string;
    width:number;
    height:number;
    index:number;
};

const SkillDataProvider = ({title, src, width, height, index} : props) => {
  const {ref, inView} = useInView({
    triggerOnce:true
  })
  const imageVariants = {
    hidden:{
        opacity:0,
    },
    visible:{
        opacity:1,
    }
  }
  const animationDelay = 0.3
    return (
    <motion.div
        title={title ?? ""}
        ref={ref} 
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay:animationDelay*index}}
    >
        <img 
            src={src} 
            alt="skill" 
            width={width} 
            height={height} 
        />
    </motion.div>

  )
}

export default SkillDataProvider
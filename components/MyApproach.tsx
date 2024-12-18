"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import MagicButton from "./ui/button";
import { MdOutlineDesignServices, MdOutlineRocketLaunch } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";

interface approachType {
  title:string,
  description:string,
}

const MyApproach=({data}:{data:any})=> {
  const dataMyApproach = data?.["myApproach"] as Array<approachType>;
  const heading = data?.["heading"] as string;
  const shortHeading = data?.["shortHeading"] as string;
  return (
    <section className="w-full py-20">
        <h1 className="heading">
            {heading} {' '}
            <span className="text-orange-500"> {shortHeading} </span>
        </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card 
            title= {dataMyApproach[0].title} //"Planning & Strategy" 
            icon={
              <AceternityIcon 
                icon={<AiFillSchedule/>} 
                order="Phase 1" 
              />
            }
            description={dataMyApproach[0].description}
            /*"We'll collaborate to map out your website's goals, target audience, 
            and key functionalities. We'll discuss things like site structure, 
            navigation, and content requirements."*/
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
            title= {dataMyApproach[1].title} //"Development & Progress Update" 
            icon={
              <AceternityIcon
                icon={<MdOutlineDesignServices/>} 
                order="Phase 2"
              />
            }
            description={dataMyApproach[1].description}
            /*"Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."*/
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card 
            title= {dataMyApproach[2].title} //"Deployment & Launch" 
            icon={
              <AceternityIcon 
                icon={<MdOutlineRocketLaunch />}
                order="Phase 3"
              />
            }
            description={dataMyApproach[2].description}
            /*"This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."*/
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}
export default MyApproach;

const Card = ({
  title,
  icon,
  description,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  description:string;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className=" lg:h-[35rem] rounded-3xl border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

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

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="text-sm text-center dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{color:"#E4ECFF"}}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({order, icon}:{order:string, icon?:React.ReactNode}) => {
  return (
    <div>
        <MagicButton
            title={order}
            icon={icon || <Icon className="h-6 w-6" />}
            position="right"
        />
    </div>
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

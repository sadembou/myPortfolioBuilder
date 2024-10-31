import MagicButton from "./ui/button"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { MdEmail, MdOutlineWork } from "react-icons/md"

interface heroSectionType{
    title:string,
    description:string,
    profilePhoto:{
        url:string
    }
    contactButton:string,
    myWorkButton:string,
}
const Hero = ({data}:{data:any}) => {
    const contentHero = data["HeroSection"] as heroSectionType;
    const rootUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;

  return (
    <div className="pb-5 pt-36">
        <div>
            <Spotlight className="-top-8 -left-30 md:-left-32 md:-top-20 h-screen" fill="blue"/>
            <Spotlight 
                className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" 
                transform="matrix(-0.822377 1 -0.568943 -1.4590 3400 300.40)"
            />
            <Spotlight 
                className="top-28 left-80 h-[80vh] w-[50vw]" 
                fill="red"
                transform="matrix(-0.822377 0.568943 -0.568943 -0.922377 3980 750.40)"
            />
        </div>
        <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        {Object.entries(contentHero).length && <div className="flex justify-center relative my-20 z-10">
            <div className=" max-sm:absolute max-sm:-top-60 items-center justify-center">
                <img
                    src= {`${rootUrl}/${contentHero.profilePhoto.url}` ?? "prophoto_nbg.png"} //"prophoto_nbg.png"
                    alt="alt"
                    className="w-[1000px] h-[500px] rounded-b-[500px] object-cover object-center"
                />
            </div>
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center max-sm:pt-16">
                {/*<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 z-10">
                    Dynamix Web Magic with Next.js
                </h2>*/}
                <TextGenerateEffect
                    className="text-center text-[40px] md:text-4xl lg:text-5xl"
                    words={`${contentHero["title"] ?? ""}`}
                />
                
                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl z-20">
                    {contentHero["description"] ?? ""}
                </p>
                <div className="flex xl:flex-row flex-col xl:gap-2 gap-1">
                    <a href="#about">
                        <MagicButton
                            title={contentHero["myWorkButton"] ?? ""}
                            icon={<MdOutlineWork />}
                            position="right"
                        />
                    </a>
                    <a href="#contact">
                        <MagicButton
                            title={contentHero["contactButton"] || ""}
                            icon={<MdEmail />}
                            position="right"
                        />
                    </a>
                </div>
            </div>

        </div>}
    </div>
  )
}

export default Hero
  
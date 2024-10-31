'use client'
import { socialMedia } from "@/data"
import Contact from "./Contact"

const Footer = ({data}:{data:any}) => {
    const heading = data?.["heading"] as string;
    const shortHeading = data?.["shortHeading"] as string;
  return (
    <footer id="contact" className="w-full pt-10 pb-10">
         <div className="w-full min-h-96 relative">
            <img src="footer-grid.svg" alt="grid" className="w-full h-full absolute opacity-60"/>
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    {heading} {' '}
                    <span className="text-orange-500"> {shortHeading} </span>
                </h1>
                {/*<p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how I can achieve your goals.</p>
                <a href="mailto:yann@tyril.fo">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>*/}
                <Contact data={data} />
            </div>
            <div className="flex mt-16 lg:justify-between justify-center lg:flex-row flex-col gap-1 items-center">
                <p className="gap-1 md:text-base text-sm md:font-normal font-light">Copyright © 2024 Yann Sadembou</p>
                <div className="flex items-center md:gap-3 gap-6">
                    {socialMedia.map(({id, img, link})=>(
                        <div key={id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                            <a href={link} target="_blank">
                                <img src={img} alt={id.toString()} width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
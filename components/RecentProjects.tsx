import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa"

const RecentProjects = ({data}:{data:any}) => {
    const contentMyProjects = data;
  return (
    <div id="projects" className="pt-20">
        <h1 className="heading">
            {contentMyProjects["heading"] || ""} {' '}
            <span className="text-orange-500"> {contentMyProjects["shortHeading"] || ""} </span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {/*projects.map(({id, title, des, img, iconLists, link})=>(
                <div key={id} className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] sm:w-[570px] flex items-center justify-center w-[80vw]">
                    {<PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                            <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                <img src="bg.png" alt="bg-img"/>
                            </div>
                            <img 
                                src={img} 
                                alt={title} 
                                className="absolute bottom-0 z-10"
                            />
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>
                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>
                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, idx)=>(
                                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" 
                                    style={{transform: `translateX(-${5 * idx * 2}px)`}}>
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple">Live site</p>
                                <FaLocationArrow className=" ms-3" color="#CBACE9"/>
                            </div>
                        </div>
                    </PinContainer>}
                </div>
            ))*/}
            {
                (contentMyProjects["myProjects"] as Array<any>)?.length && (
                    (contentMyProjects["myProjects"] as Array<any>).map((project, index)=>{
                        const media = project["thumbnail"]["url"];
                        const description = project["description"];
                        const techStack = project["techStack"] as Array<{ name:string, Image:{ url:string} }>
                        return (
                        <div key={index}
                            className="lg:min-h-[32.5rem] sm:h-[41rem] h-[32rem] sm:w-[570px] flex items-center justify-center w-[80vw]"
                        >
                            <PinContainer title={project["link"]} href={project["link"]}>
                                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                        <img src="bg.png" alt="bg-img"/>
                                    </div>
                                    <img 
                                        src={media} 
                                        alt={project["title"]} 
                                        className="absolute bottom-0 z-10"
                                    />
                                </div>
                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {project["title"]} 
                                </h1>

                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                    {description}
                                </p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {techStack.map((icon, idx)=>{ 
                                            return(
                                                <div key={icon.name} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-10 h-10 flex justify-center items-center" 
                                                    style={{transform: `translateX(-${5 * idx * 2}px)`}}>
                                                    <img title={icon.name} src={icon.Image.url} alt={icon.name} className="p-2"/>
                                                </div>
                                            )})
                                        }
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">Live site</p>
                                        <FaLocationArrow className=" ms-3" color="#CBACE9"/>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    )})
                )
            }
        </div>
        
    </div>
  )
}

export default RecentProjects

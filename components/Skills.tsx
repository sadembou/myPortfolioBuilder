import React from 'react'
import { Backend_skill, db_stack, Frontend_skill, Full_stack, Other_skill } from '@/data' 
import SkillDataProvider from './ui/SkillDataProvider'
import {rootUrl} from "@/lib/utils";

interface skillType
{
    name: string,
    Image: {
        url: string,
    },
}

const Skills = ({data}:{data:any}) => {
    const frontendSkillData = (data["StackType"] as Array<any>).find((stackType)=>stackType["stackType"]==="frontend_skill")["stackList"] as Array<skillType>;
    const backendSkillData = (data["StackType"] as Array<any>).find((stackType)=>stackType["stackType"]==="backend_skill")["stackList"] as Array<skillType>;
    const fullStackData = (data["StackType"] as Array<any>).find((stackType)=>stackType["stackType"]==="Fullstack_skill")["stackList"] as Array<skillType>;
    const dbStackData = (data["StackType"] as Array<any>).find((stackType)=>stackType["stackType"]==="db_stack")["stackList"] as Array<skillType>;
    const otherSkillData = (data["StackType"] as Array<any>).find((stackType)=>stackType["stackType"]==="other_skill")["stackList"] as Array<skillType>;
    
    //const rootUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
    const defaultSize = data["imgSize"] as number || 65;
    return (
    <section id='skills' className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-8' style={{transform:"scale(0.9)"}}>
        <div className="flex flex-row items-center justify-around flex-wrap gap-5">
            { frontendSkillData?.length === 0 ? Frontend_skill.map(({skill_name, Image, width, height}, index) => (
                <SkillDataProvider
                    key={index}
                    title={skill_name}    
                    src={Image} 
                    width={width} 
                    height={height} 
                    index={index}                
                />
            )):(
                frontendSkillData.map(({name, Image}, index) => (
                    <SkillDataProvider
                        key={index}
                        title={name}
                        src={Image.url}
                        index={index}
                        width={defaultSize}
                        height={defaultSize}
                    />
                ))
            )}
        </div>
        <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
            { backendSkillData?.length === 0 ? Backend_skill.map(({skill_name, Image, width, height}, index) => (
                <SkillDataProvider
                    key={index} 
                    title={skill_name}    
                    src={Image} 
                    width={width} 
                    height={height} 
                    index={index}                
                />
            )):(
                backendSkillData.map(({name, Image}, index) => (
                    <SkillDataProvider
                        key={index}
                        title={name}
                        src={Image.url}
                        index={index}
                        width={defaultSize}
                        height={defaultSize}
                    />
                ))
            )}
        </div>
        <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
            { fullStackData?.length===0 ? Full_stack.map(({skill_name, Image, width, height}, index) => (
                <SkillDataProvider
                    key={index} 
                    title={skill_name}
                    src={Image} 
                    width={width} 
                    height={height} 
                    index={index}                
                />
            )):(
                fullStackData.map(({name, Image}, index) => (
                    <SkillDataProvider
                        key={index}
                        title={name}
                        src={Image.url}
                        index={index}
                        width={defaultSize}
                        height={defaultSize}
                    />
                ))
            )}
        </div>
        <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
            { dbStackData?.length === 0 ? db_stack.map(({skill_name, Image, width, height}, index) => (
                <SkillDataProvider
                    key={index} 
                    title={skill_name}    
                    src={Image} 
                    width={width} 
                    height={height} 
                    index={index}                
                />
            )):(
                dbStackData.map(({name, Image}, index) => (
                    <SkillDataProvider
                        key={index}
                        title={name}
                        src={Image.url}
                        index={index}
                        width={defaultSize}
                        height={defaultSize}
                    />
                ))
            )}
        </div>
        <div className="flex flex-row items-center justify-around flex-wrap mt-4 gap-5">
            { otherSkillData?.length===0 ? Other_skill?.map(({skill_name, Image, width, height}, index) => (
                <SkillDataProvider
                    key={index} 
                    title={skill_name}    
                    src={Image} 
                    width={width} 
                    height={height} 
                    index={index}                
                />
            )):(
                otherSkillData.map(({name, Image}, index) => (
                    <SkillDataProvider
                        key={index}
                        title={name}
                        src={Image.url}
                        index={index}
                        width={defaultSize}
                        height={defaultSize}
                    />
                ))
            )}
        </div>
    </section>
  )
}

export default Skills

import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

interface experienceType{
    title:string,
    desc:string,
    className:string,
    thumbnail:{
        url:string
    }
}

const Experiences = ({data}:{data:any}) => {
    const rootUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
    const dataExperiences = data?.["WorkExperience"] as Array<experienceType>;
    const heading = data?.["heading"] as string;
    const shortHeading = data?.["shortHeading"] as string;
    return (
    <div className="py-20" id="testimonials">
        <h1 className="heading">
           {heading} {' '}
            <span className="text-orange-500"> {shortHeading} </span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
            {dataExperiences?.length===0 ? workExperience.map(({id, title, desc, thumbnail })=>(
                <Button 
                    key={id} 
                    borderRadius='2rem' 
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800' 
                    duration={Math.floor(Math.random() * 9000) + 9000}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img
                            src={thumbnail}
                            alt={thumbnail}
                            className='lg:w-32 md:w-20 w-16'
                        />
                        <div className="lg:ms-5">
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {desc}
                            </p>
                        </div>
                    </div>
                </Button>
            )):(
                dataExperiences?.map(({title, desc, thumbnail}, index)=>(
                    <Button 
                    key={index} 
                    borderRadius='2rem' 
                    className='flex-1 text-white border-neutral-200 dark:border-slate-800' 
                    duration={Math.floor(Math.random() * 9000) + 9000}>
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img
                            src={`${rootUrl}/${thumbnail.url}`}
                            alt="Illustration"
                            className='lg:w-32 md:w-20 w-16'
                        />
                        <div className="lg:ms-5">
                            <h1 className='text-start text-xl md:text-2xl font-bold'>
                                {title}
                            </h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>
                                {desc}
                            </p>
                        </div>
                    </div>
                </Button>
                ))
            )}
        </div>
    </div>
  )
}

export default Experiences
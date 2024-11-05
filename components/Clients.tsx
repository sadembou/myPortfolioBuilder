import { companies, testimonials } from "@/data"
import { InfiniteMovingCards } from "./ui/infinite-moving-card"

interface testimonialType{
    quote:string,
    name:string,
    title:string,
    img:{
        url:string
    }
}
interface companyType{
    name:string,
    img:{
        url:string
    }
}

const Clients = ({data}:{data:any}) => {
    const dataTestimonials = (data?.["testimonials"] as Array<testimonialType>)?.map(({ quote, name, title, img })=>{
        return{
            quote,
            name,
            title,
            img:img.url
        }
    });
    const dataCompanies = data?.["companies"] as Array<companyType>;
    const heading = data?.["heading"] as string;
    const shortHeading = data?.["shortHeading"] as string;
  return (
    <div className="pt-16" id="testimonials">
        <h1 className="heading">
           { heading } {' '}
            <span className="text-orange-500"> {shortHeading} </span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10 pt-4">
            <InfiniteMovingCards
                items={dataTestimonials ?? testimonials}
                direction="right"
                speed="normal"
            />
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 pt-10">
                { dataCompanies?.length === 0 ? companies.map(({id, name, img })=>(
                    <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                        <img
                            title={name}
                            src={img}
                            alt={name}
                            //className="md:w-10 w-5"
                        />
                        {/*<img
                            src={nameImg}
                            alt={name}
                            className="md:w-24 w-20"
                        />*/}
                    </div>
                )):(
                    dataCompanies?.map(({name, img}, index)=>(
                        <div key={index} className="flex md:max-w-60 max-w-32 gap-2">
                            <img
                                title={name}
                                src={img?.url && img.url}
                                alt={name}
                                //className="md:w-10 w-5"
                            />
                        </div>
                    ))
                )}
            </div>
        </div>
    </div>
  )
}

export default Clients

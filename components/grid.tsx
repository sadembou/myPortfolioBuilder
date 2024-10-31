import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

interface gridItemType{
  identifier:number,
  title:string,
  description:string,
  img:{
    url:string
  },
  spareImg:{
    url:string
  },
  className:string,
  imgClassName:string,
  titleClassName:string,
}

const Grid = ({data}:{data:any}) => {
  const dataGridItems = data?.["myKnowHow"] as Array<gridItemType>;
  const rootUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}`;
  return (
    <section id='about'>
        <BentoGrid>
          { dataGridItems?.length === 0 ? gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg})=>(
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          )):(
            dataGridItems.map(({ identifier, title, description, img, spareImg, className ,imgClassName, titleClassName})=>(
              <BentoGridItem
                id={identifier}
                key={identifier}
                title={title}
                description={description}
                className={className}
                img={img?.url && `${rootUrl}${img.url}`}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={ spareImg?.url && `${rootUrl}/${spareImg?.url}`}
              />
            ))
          )}
        </BentoGrid>
    </section>
  )
}

export default Grid
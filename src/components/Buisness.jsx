import React from 'react'
import { features } from '../constants'
import styles,{layout} from '../style'
import Button from './Button'

const FeatureCard=({icon, title, content, index}) => (
  <div className={`flex flex-row rounded-[20px] ${index!=features.length-1? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} className='w-[50%] object-contain h- [50%]'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text=[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text=[16px] leading-[24px] mb-1'> 
        {content}
      </p>
    </div>
  </div>
    
)

const Buisness = () => {
  return (
    <section className={layout.section} id="features">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>YOu'll do Buisness<br className='sm:block hidden'/> We'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nesciunt ratione ducimus quae, explicabo excepturi.
        </p>
        <Button styles="mt-10"/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id}{...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Buisness
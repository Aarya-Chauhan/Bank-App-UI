import React from 'react'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import { feedback  } from '../constants'




const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-1">
        <h1 className={styles.heading2}>What people are <br className='sm:block hidden'/>saying  about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[480px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta atque praesentium quis ipsum aliquam necessitatibus quas doloribus exercitationem ratione ipsa? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, officiis!</p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center feedback-container w-full relative z-1">
        {feedback.map((card)=>(
            <FeedbackCard key={card.id}{...card}/>
        ))}
      </div>

    </section>
  )
}

export default Testimonials
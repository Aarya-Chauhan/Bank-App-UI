import { useState } from 'react'
import {Billing,Buisness,Button,Clients,CTA,Feedback,Footer,GetStarted,Hero,Navbar,Stats,Testimonials,CardDeal} from './components';
import styles from './style'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX}`}> 
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>

      <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>


      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats/>
          <Buisness/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Clients/>
          <CTA/>
          <Footer/>x */}
        </div>
      </div>


      </div>
    </div>
  )
}

export default App

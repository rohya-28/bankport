import React from 'react'
import { card } from '../assets'
import styles, {layout} from '../style'
import Button from './Button'


const cardDeal = () =>
  (
    <section className={`${layout.section}`}>
        <div className={layout.sectionInfo}>
          <h2 className={`${styles.heading2}`}>Finds a better card deal <br className='sm:block hidden' /> in few easy steps</h2>
          <p className={`${styles.paragraph} m-w-[470px] mt-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore magnam et cum perferendis, possimus fugit, natus, aut ex porro nisi eligendi. Animi nobis nisi eum perspiciatis quia voluptas similique at!</p>
           <Button styles='mt-10 rounded-[10px]' / >
        </div>

        <div className={layout.sectionImg}>
          <img src={card} alt="card" className='w-[100%] h-[100%]' />
        </div>
    </section>
  )


export default cardDeal
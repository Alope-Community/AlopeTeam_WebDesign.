import React from 'react'
import ArtType from './type';

export default function HomeTypeSection() {
  return (
    <section className="flex justify-between">
        <div>
            <img className='h-[500px]' src="https://www.foodandwine.com/thmb/jJupeS5vHMkh9TBsJkwdaG1uPY8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Tamarind-Chicken-FT-RECIPE0522-80072d93f7bc4bc7abf1dcf5b5317b0c.jpg" alt="" />
        </div>
        <ArtType />
    </section>
  )
}

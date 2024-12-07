import React from 'react'
import statue from './assets/statue.png';

const Statue = () => {
  return (
     <section className='flex justify-center mt-40'>
      <div>
        <img src={statue} alt="" className='h-96' />
      </div>
     </section>
  )
}

export default Statue

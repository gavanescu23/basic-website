import React from 'react'
import Audi from '../assets/AUDIRS3.png'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className='w-[500px] mx-auto my-4' src={Audi} alt="/" />
        <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold p-1">HIGHS</p>
            <h1 className='font-bold p-1'>Powerhouse turbo five-cylinder, gut-stirring engine note, equally adept on both road and track.</h1>
            <p className="text-[#00df9a] font-bold p-1">LOWS</p>
            <h1 className='font-bold p-1'>Slow to auto-downshift into corners, options can boost price to M3 territory, recalcitrant drift mode.</h1>
            <p className="text-[#00df9a] font-bold p-1">VERDICT</p>
            <h1 className='font-bold p-1'>The RS3 offers the styling and luxury of its less-muscular A3 siblings, enough refinement to be a daily ride, and the beefy performance chops to beat down race tracks.</h1>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3">Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics

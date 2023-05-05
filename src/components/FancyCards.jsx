import React from 'react'
import RS from '../assets/RS31.png'
import S from '../assets/S31.png'
import A from '../assets/A31.png'

const FancyCards = () => {
  return (
    <div className='text-black w-full py-[10rem] px-4 bg-white'>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={RS} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Audi RS3</h2>
            <p className='text-center text-4xl font-bold'>$61,995</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2.5L Engine</p>
                <p className='py-2 border-b mx-8'>401 HP</p>
                <p className='py-2 border-b mx-8'>369 NM torque</p>
            </div>
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Buy this variant</button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={S} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Audi S3</h2>
            <p className='text-center text-4xl font-bold'>$50,595</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2.0L Engine</p>
                <p className='py-2 border-b mx-8'>306 HP</p>
                <p className='py-2 border-b mx-8'>295 NM torque</p>
            </div>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Buy this variant</button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={A} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Audi A3</h2>
            <p className='text-center text-4xl font-bold'>$39,895</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>2.0L Engine</p>
                <p className='py-2 border-b mx-8'>201 HP</p>
                <p className='py-2 border-b mx-8'>221 NM torque</p>
            </div>
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Buy this variant</button>
        </div>
      </div>
    </div>
  )
}

export default FancyCards

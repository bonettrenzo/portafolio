import React from 'react'
import PortfolioList from './PortfolioList'

const CardsProject = () => {
  return (
    <>
        {
        PortfolioList.map((item) => (
            <div key={item.id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={item.src} alt={item.alt} className='rounded-md duration-200 hover:scale-105' />
            <div className='flex items-center justify-center'>
              <a href={item.demo} target='_blank'  rel='norreferrer deferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold cursor-pointer'>DEMO</a>
              <a href={item.code} target='_blank' rel='norreferrer deferrer' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:font-bold cursor-pointer'>CODE</a>
            </div>
          </div>
        ))
    }
    </>
  )
}

export default CardsProject
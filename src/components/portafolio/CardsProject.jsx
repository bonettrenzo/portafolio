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
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>DEMO</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>CODE</button>
            </div>
          </div>
        ))
    }
    </>
  )
}

export default CardsProject
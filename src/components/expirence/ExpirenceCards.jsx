import React from 'react'
import technologys from './technologys'
const ExpirenceCards = () => {
  return (
    <>
        {
            technologys.map(function (item){
                return(
                    <div key={item.id} className={item.style + " "+'shadow-md hover:scale-105 hover:font-bold duration-500 py-2 rounded-lg '}>
                    <img src={item.img} alt={item.alt} className='w-20 mx-auto' />
                    <p>{item.title}</p>
                </div>
                )
    
            })
        }
    </>
  )
}

export default ExpirenceCards
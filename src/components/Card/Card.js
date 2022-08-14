import React from 'react'

export default function Card({card}) {
console.log(card);
  return (
    <div className='basis-1/3 mt-10	'>
      <div  >
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={card.url} alt="Cat"/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">{card.id}</div>
          </div>
        </div>
      </div>   
    </div>
  )
}

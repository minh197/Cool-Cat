import React from 'react'

export default function Pagination({pageNumber, setNumber}) {
  return (
    <div className='flex content-around justify-around lg:justify-around my-4'>
        <div className ="flex items-center space-x-1 justify-around justify-around ">
        <div className ="flex items-center px-4 py-2 font-serif  bg-purple-400 rounded-md" onClick={() => setNumber(pageNumber-1)}>
            Previous
        </div>
        <div  className="px-4 py-2 font-serif   bg-purple-400 rounded-md hover:bg-blue-400 hover:text-white" >
            {pageNumber}
        </div>
        <div className="px-4 py-2 font-serif  bg-purple-400 rounded-md hover:bg-blue-400 hover:text-white" onClick={() => setNumber(pageNumber+1)}>
        {pageNumber + 1}
        </div>
        <div className="px-4 py-2 text-gray-70 font-serif   bg-purple-400 rounded-md hover:bg-blue-400 hover:text-white" onClick={() => setNumber(pageNumber+2)}>
            {pageNumber + 2}
        </div>
        <div className="px-4 py-2 font-serif  bg-purple-400 rounded-md hover:bg-blue-400 hover:text-white" >...</div>
        <div   className="px-4 py-2 font-serif   bg-purple-400 rounded-lg hover:bg-blue-400 hover:text-white" onClick={() => setNumber(pageNumber+1)}>
            Next
        </div>
    </div>
    </div>
  )
}

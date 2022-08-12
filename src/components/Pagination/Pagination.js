import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination(pageNumber) {
  return (
    <div className ="flex items-center space-x-1">
    <Link to='/viewcats'className ="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
        Previous
    </Link>

    <Link to='/viewcats'  className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
        1
    </Link>
    <Link to='/viewcats' className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
        2
    </Link>
    <Link to='/viewcats' className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
        3
    </Link>
    <Link to='/viewcats'  className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
        Next
    </Link>
</div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';
import LandingPic from '../images/landingpic.jpeg';

export default function Home() {
  return (
    <section className="h-screen flex items-stretch justify-between grow">
        <div className='flex self-center '>
            <div className='cat-image grow flex flex-col items-stretch mt-[32rem]'>
            <img className='grow max-h-96 min-w-[30%] '  src={LandingPic} alt="landingpic"></img>
        </div>
        <div className='flex flex-col items-start m-4 self-start h-screen pt-96'>
            <h1 className='text-7xl font-serif mb-4 mt-0'>Cool Cats</h1>
            <span className='font-serif text-4xl mb-8'>View and create cat memes from our collection of thousands of cat pictures</span>
            <Link to ='/viewcats' className='font-serif bg-purple-400 py-3 px-6 rounded-lg	'>View Cat Pictures</Link>
        </div>
    </div>
    <div className='circle-1 absolute w-60 h-60 rounded-full bg-black top-[24rem] left-[44rem] bg-emerald-200 opacity-40 	'>
      </div>
      <div className='circle-2 absolute w-60 h-60 rounded-full bg-black top-[30rem] left-[53rem] bg-sky-200 opacity-40 	'>
      </div>
    </section>
    
  )
}

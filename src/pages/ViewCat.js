import React, {useEffect, useState} from 'react'
import background2 from '../components/images/background2.png'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination';

const ViewCats = () => {
    const [cards, setCards] = useState([]); 
    const [number, setNumber] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10); 
    
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=20&api_key=${process.env.API_Key}`).then(
            data => data.json()
            .then(data => {
                const cards = data;
                setCards(cards);
            })
            .catch(err => console.log(err)),
        ); 
    }, []); 

    // const lastPost = number * postsPerPage; 
    // const firstPost = lastPost - postsPerPage; 
    // const currentPost = cards.slice(firstPost, lastPost)
    // const pageNumber = [];
    // for(let i =1; i <= Math.ceil(cards.length() / postsPerPage); i++){
    //     pageNumber.push(i); 
    // }

    
    
  return (
    <div>
        <div className="flex flex-col justify-between items-start items-center mt-24 mx-48 mb-40 bg-fuchsia-100">
        <div>
        <h1 className="font-bold font-serif text-4xl ml-24 my-16 sm:ml-40 ">
            Cat Pictures Collection
        </h1>
        <div>
            <img src={background2} alt="Background" className="py-3 px-6"  ></img>
        </div>
        <button className='font-serif bg-purple-400 py-3 px-12 rounded-lg mt-8 mb-8 ml-64 sm:ml-64'>View Now</button>
        </div>
         </div>
         <section>
            <div className='flex flex-wrap'>
                <div className="  max-w-[1400px] mx-auto">
                    <div className="basis-1/4 md:basis-1/3">
                    {cards.map((cardObject, index) =>
                    <Card card={cardObject}/>
                    )}
                </div>        
            </div>
            </div>
        </section>
        <section>
            {/* <Pagination pageNumber={pageNumber}/> */}
        </section>
    </div>
  )
}
export default ViewCats;

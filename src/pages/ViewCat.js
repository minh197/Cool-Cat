import React, {useEffect, useState} from 'react'
import background2 from '../components/images/background2.png'
import Card from '../components/Card/Card'
import Pagination from '../components/Pagination/Pagination';

const ViewCats = () => {
    const [cards, setCards] = useState([]); 
    const [number, setNumber] = useState(1);
    
    
    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=100&page=${number}&api_key=${process.env.API_Key}`).then(
            data => data.json()
            .then(data => {
                const cards = data;
                setCards(cards);
            })
            .catch(err => console.log(err)),
        ); 
    }, [number]); 
    const changeNumber = (pageNumber) => {
        setNumber(pageNumber);
    }
  return (
    <div>
        <div className="flex flex-col justify-between items-start items-center mt-24 mx-48 mb-40 bg-fuchsia-100">
        <div>
        <h1 className="font-bold font-serif text-4xl text-center my-16">
            Cat Pictures Collection
        </h1>
        <div>
            <img src={background2} alt="Background" className="py-3 px-6"  ></img>
        </div>
        <button className='font-serif bg-purple-400 py-3 px-12 rounded-lg mt-8 mb-8 ml:64 lg:ml-64'>View Now</button>
        </div>
         </div>
         <section className='bg-fuchsia-100'>
            <div className='flex flex-wrap'>
                <div className="  max-w-[1400px] mx-auto">
                    <div className=" grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 grid mb-8 ">
                    {cards.map((cardObject, index) =>
                    <Card card={cardObject}/>
                    )}
                </div>        
            </div>
            </div>
        </section>
        <section>
            <Pagination pageNumber={number} setNumber={changeNumber} />
        </section>
    </div>
  )
}
export default ViewCats;

import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import  Albumitem  from  './Albumitem' 
import { songsData } from '../assets/assets';
import SongItem from './SongItem';
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className="my-4 font-bold text-2xl">
        <h1 className='my-5 font-blod text-2xl'>Featured Charts</h1>
        <div className="flex overflow-auto "> {albumsData.map((item,index) => (
          <Albumitem 
            key={index} // Using a unique identifier if available
            name={item.name} 
            desc={item.desc} 
            id={item.id} 
            image={item.image} 
          />
        ))}
        </div>
        <h1 className='my-5 font-blod text-2xl'>Today's biggest Hits</h1>
        <div className="flex overflow-auto "> {songsData.map((item,index)=>(<SongItem  key={index} // Using a unique identifier if available
            name={item.name} 
            desc={item.desc} 
            id={item.id} 
            image={item.image} />))

        }
          
        </div>
      
       
      </div>
    </>
  );
};

export default DisplayHome;

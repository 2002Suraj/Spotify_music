import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {

  return (
    <div onClick={()=>playWithID} className='min-w-[180px] px-3 rounded cursor-pointer hover:bg-[#fffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name }</p>
        <p className='text-slate-200 text-sm'></p>
      
    </div>
  )
}

export default SongItem

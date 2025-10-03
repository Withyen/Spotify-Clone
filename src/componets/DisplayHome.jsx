import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Albumitem from './Albumitem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='my-5 font-bold text-2xl'>
        {albumsData.map((item,index) => (<Albumitem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id}/>))}
      </div>
    </>
  )
}

export default DisplayHome

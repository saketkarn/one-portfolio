import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {

    const [nav, setNav] = useState(false)

    const links=[
        {id:1,
        link:'Home'},
        {id:2,
        link:'About'},
        {id:3,
        link:'Portfolio'},
        {id:4,
        link:'Experience'},
        {id:5,
        link:'Contact'},
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 text-white bg-black fixed px-4'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Saket</h1>
      </div>
      <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>{link}</li>
        ))}
      </ul>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500'>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>
      <ul className='flex flex-col justify-center'>
      
      </ul>
    </div>
  )
}

export default NavBar

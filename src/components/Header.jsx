import React, { useContext } from 'react'
import Toggler from './Toggler';


const Header = () => {
  return (
    <div className='border shadow-xl py-4 w-full fixed -top-1  bg-white dark_header light_header '>
      <header className='text-center relative flex items-center justify-around '>
        <h1 className='text-3xl font-bold uppercase  '>Blogs</h1>
        <Toggler/>
      </header>
    </div>
  )
}

export default Header
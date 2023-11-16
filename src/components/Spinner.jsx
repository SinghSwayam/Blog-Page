import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='flex flex-col gap-4  h-screen justify-center items-center'>
        <p className=' text-5xl blog_tags font-bold text-[#40fffc]'>Loading</p>
        <br/>
        <br/>
        <span class="loader"></span>
    </div>
  )
}

export default Spinner
import React, { useContext } from 'react'
import {AppContext} from '../context/AppContext'
import Spinner from './Spinner'

const Blogs = () => {

  const {posts,loading}= useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[670px] mt-14 mb-14 py-10 flex flex-col gap-y-7 dark_Blogs '>
    {
      loading ? (<Spinner/>) :
      (
        posts.length === 0 ?
        (<div>
          <p>No Posts Found</p>
        </div>):
        (posts.map((post) =>(
        <div className=' ' key={post.id}>
            <p className='font-bold text-lg'>{post.title}</p>
            <p className='text-sm '>By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span></p>
            <p className='text-sm'>Posted on <span>{post.date}</span></p>
            <p className='text-md mt-4 blog_content'>{post.content}</p>
            <div className='mt-2 flex gap-x-3  ' >
                {post.tags.map((tag,index) => {
                    return <span className=' font-semibold underline text-xs blog_tags' key={index}>{`#${tag}`}</span>
                })}
            </div>
        </div>
        )))
      )
    }
    </div>
  )
}

export default Blogs
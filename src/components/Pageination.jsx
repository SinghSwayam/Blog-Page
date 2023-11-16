import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pageination = () => {

  const {page , handlePageChange , totalPages} = useContext(AppContext);

  return (
    <div className='w-full fixed -bottom-1 bg-white py-2 border-2 rounded-lg light_Pageination'>
      <div className='flex flex-row justify-around items-center'>
        <div className='flex gap-x-2'>
        { page > 1 &&
          (<button className='rounded-md Pageination_btn  px-4 py-2 border-[#4e4e4e]  border-2' onClick={() => handlePageChange(page-1)}>
              Previous
          </button>)
        }
        { page < totalPages &&
          (<button className='rounded-md Pageination_btn px-4 py-2 border-[#4e4e4e]  border-2'  onClick={() => handlePageChange(page+1)}>
              Next
          </button>)
        }
        </div>

        <p className=' font-semibold'>
          Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pageination
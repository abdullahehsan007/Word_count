import React from 'react'

function header() {
     return (
          <div className='flex border-l-8 border-blue-950 bg-slate-100 p-2 rounded-b-3xl space-x-4 items-center '>
               <div className='text-3xl'>
                    <span className='bg-blue-950 rounded-md text-white px-1 sm:px-3'>W</span>
                    <span className='bg-blue-800 rounded-md text-white px-1 sm:px-3'>O</span>
                    <span className='bg-blue-400 rounded-md text-white px-1 sm:px-3'>R</span>
                    <span className='bg-blue-200 rounded-md text-white px-1 sm:px-3'>D</span>
               </div>
               <div className='flex flex-col'>
                    <h1 className='text-2xl text-blue-950 font-bold sm:text-3xl'>Counter</h1>
                    <p className='text-blue-400 font-semibold'>Every Word Counts</p>
               </div>
          </div>
     )
}

export default header

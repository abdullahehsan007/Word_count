import React from 'react'

function Counter() {
     return (
          <div className='flex flex-col items-center justify-center'>
               <textarea id="textInput" rows={4} cols={30} className='border-x-8 border-y-2 border-blue-950 bg-slate-100 rounded-3xl text-3xl text-blue-500 font-semibold flex text-center outline-none mt-12 pt-24 placeholder-slate-300 placeholder:font-medium' placeholder='Enter Your Text Here'></textarea>
               <div className='flex flex-col text-center text-2xl text-blue-950 font-bold space-y-3 mt-5'>
                    <div className='flex space-x-7'>
                         <p>WORDS : <span id='wordCount' className='text-blue-500'>0</span></p>
                         <p>CHARACTERS : <span id='charCount' className='text-blue-500'>0</span></p>
                    </div>
                    <div className='flex space-x-7'>
                         <p>VOWELS : <span id='vowelCount' className='text-blue-500'>0</span></p>
                         <p>PUNCTUATION : <span id='vowelCount' className='text-blue-500'>0</span></p>
                    </div>
                    <p>SENTENCES: <span id='vowelCount' className='text-blue-500'>0</span></p>
               </div>
          </div>

     )
}

export default Counter

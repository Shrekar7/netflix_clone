 import React from 'react'
import SavedShows from '../components/SavedShows'
 
 const Accounts = () => {
   return (
    <>
    <div className='w-full text-white'>
    <img className=' w-full h-[400] object-cover' src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
    <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-4xl md:text-sxl font-bold'>My Shows</h1>
    </div>
    </div>
    <SavedShows />
 
  </>
   )
 }
 
 export default Accounts
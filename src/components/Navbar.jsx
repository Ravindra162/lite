import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className="navbar h-[8%] w-screen">
      <div className="flex justify-between items-center h-full w-full">
        <div className="text-white text-2xl ml-5">Logo</div>
        <div className="flex justify-between items-center w-1/3 mx-20 gap-10">
          <div className="text-white text-lg hover:bg-white rounded-md px-3 py-1 cursor-pointer transition duration-350 ease-out hover:ease-in hover:text-black">Home</div>
          <div className="text-white text-lg hover:bg-white rounded-md px-3 py-1 cursor-pointer transition duration-350 ease-out hover:ease-in hover:text-black">About</div>
          <div className="text-white text-lg hover:bg-white rounded-md px-3 py-1 cursor-pointer transition duration-350 ease-out hover:ease-in hover:text-black">Services</div>
          <div className="text-white text-lg hover:bg-white rounded-md px-3 py-1 cursor-pointer transition duration-350 ease-out hover:ease-in hover:text-black">Contact</div>
        </div>
      </div>
   </div>
   <div className='h-[0.2px] w-full bg-white'></div>
   </> 
  )
}

export default Navbar

import React from 'react'

const Navbar = () => {
  return (
    <nav className='text-white mb-10'>
      <div className='flex px-7 py-3 justify-between'>
        <h1 className='text-3xl'>Wallet</h1>
        <div className='hidden sm:flex gap-4'>
          <button className='text-xl'>Sign Up</button>
          <button className='text-black bg-[#BFAFF2] py-3 px-10 rounded-2xl'>Log in</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 

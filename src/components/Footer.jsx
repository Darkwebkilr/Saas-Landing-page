import React from 'react'
import Button from "./Button.jsx"

const Footer = () => {
  const handleClick = () => {
    alert('Bu buton hiçbir işe yaramıyor!');
  };
  return (
    <div>
      <div className='border border-gray-700 mx-12'></div>
      <div className='text-white mt-20 px-12 flex lg:flex-row flex-col items-center justify-between'>
        <div className='mb-10 lg:mb-0'>
          <h1 className='mb-10 text-xl'>Wallet</h1>
          <div className='flex lg:flex-row flex-col items-center gap-4 text-lg'>
            <a className='hover:text-gray-900' href='/'>© Wallet 2022</a>
            <a className='hover:text-gray-900' href='/'>Privacy Policy</a>
            <a className='hover:text-gray-900' href='/'>Cookies Policy</a>
            <a className='hover:text-gray-900' href='/'>Terms of use</a>
          </div>
        </div>
        <div>
          <p className='text-xl mb-10'>Updates right to your inbox</p>
          <div className='flex mb-4 xl:flex-row flex-col items-center gap-4'>
            <input
              className='bg-[#333333] rounded-2xl p-2 caret-white px-9 focus:outline-none text-left'
              placeholder='Email address'
            />
            <Button onClick={handleClick}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer

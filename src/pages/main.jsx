import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
const main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='mx-24 flex flex-col md:flex-row justify-between'>
        <div>
          <h1 className='text-6xl text-white'>SaaS Landing  Page Template</h1>
          <p className='mt-10 text-xl text-gray-600'>This is a template Figma file, turned into code using Anima.Learn more at AnimaApp.com</p>
          <button className='bg-yellow-300 px-8 py-2 rounded-2xl mt-20'>Get started</button>
        </div>
        <div><img className='w-fit md:w-auto' src={"./Image.png"} alt='Upward Trend Chart' /> </div>
      </div>
      <div className='border border-gray-700 mt-12'></div>
      <div className='flex items-center justify-center my-10'> <img className='md:max-w-[600px] lg:max-w-[900px] xl:max-w-[1000px]' src={"./logos.png"} alt='logo' /></div>
      <div className='border border-gray-700 mb-24'></div>
      <div><img src="./Image (1).png" alt='graph' /></div>
      <div className='mt-40 items-center px-[10%] gap-8 grid place-items-center mb-52 lg:grid-cols-3 lg:grid-rows-0'>
        <div className='flex flex-col items-center max-w-[300px]'>
          <img src={"./icons/1.png"} alt='card' />
          <h1 className='mt-7 text-white text-2xl'>Customizable Card</h1>
          <p className='mt-3 text-lg text-gray-600'>Custom your own card for your exact incomes and expenses needs.</p>
        </div>
        <div className='flex flex-col items-center max-w-[300px]'>
          <img src={"./icons/2.png"} alt='card' />
          <h1 className='mt-7 text-white text-2xl'>No Payment Fee</h1>
          <p className='mt-3 text-lg text-gray-600'>Transfer your payment all over the world with no payment fee.</p>
        </div>
        <div className='flex flex-col items-center max-w-[300px]'>
          <img src={"./icons/3.png"} alt='card' />
          <h1 className='mt-7 text-white text-2xl'>All İn One Place</h1>
          <p className='mt-3 text-lg text-gray-600'>The right place to keep your credit and debit cards, boarding passes & more.  </p>
        </div>
      </div>

      <div className="flex items-center justify-center ">
        <div className="flex flex-col bg-[#BFAFF2] min-h-[500px] px-5 md:px-28 rounded-2xl max-w-[70%] items-center justify-center p-4">
          <p className="text-black text-2xl font-bold text-center">
            “Wallet is a great product! All of my most important information is there - credit cards, transit cards, boarding passes, tickets, and more. And I don't need to worry because it's all in one place! thanks!”
          </p>
          <div className="mt-20 max-w-[50px] md:max-w-[800px] flex items-center self-start">
            <img src="./icons/User Feedback Image.png" alt="user" />
            <div className='ml-5 flex flex-col items-center'>
              <h1 className='text-black text-2xl'>Johnny Owens</h1>
              <div className='flex gap-1'>
                <img src='./icons/Star.png' alt='star' />
                <img src='./icons/Star.png' alt='star' />
                <img src='./icons/Star.png' alt='star' />
                <img src='./icons/Star.png' alt='star' />
                <img src='./icons/Star.png' alt='star' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mb-5 lg:flex-row items-center flex-col mt-40 mx-24 justify-between'>
        <div className='flex  flex-col items-center justify-center'>
          <h1 className='text-5xl text-white'>Questions?</h1>
          <h1 className='mt-5 text-5xl text-white'>Let's Talk</h1>
          <p className=' mt-5 text-2xl text-gray-600'>Contact us through our 24/7 live chat.We’re always happy to help!</p>
          <div className='mt-12 mb-10'><Button>Get Started</Button></div>
        </div>
        <img className='w-screen lg:max-w-[900px]' src='./icons/gif.png' alt='gif' />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default main


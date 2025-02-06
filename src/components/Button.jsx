import React from 'react'

const Button = ({ children, onClick }) => {
  return (
    <button className='bg-[#BFAFF2] py-3 px-10 rounded-2xl text-black' onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;

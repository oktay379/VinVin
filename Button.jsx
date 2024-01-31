import React from 'react'

// Product.jsx dosyam da Button component olarak kullandim

const Button = ({onClick, btnText}) => {
  return (
    <button className='w-full bg-indigo-600 items-center justify-center h-10 text-white flex mt-4 rounded-md' 
    onClick={onClick}>{btnText}</button>
  )
}

export default Button
import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { searchDataFunc, sortingDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';

// header icerisinde react-icon tiklanildigin da redux'ım bana card yapisini acacaktir 
// dispatch ile modalSlice icerisinde tanimladigim reducer function(modalFunc) react-icon aktardim

const Header = () => {
  
  const dispatch = useDispatch();

  return (
  <div className='flex items-center justify-between bg-indigo-600 text-white px-4 py-3'>
      <div className='text-3xl'><strong>VinVin</strong>.com </div>
      <div className='flex items-center gap-5'>
      
        <input onChange={e => dispatch(searchDataFunc(e.target.value))}
          className='text-black h-8 rounded-lg px-4' type="text" placeholder='Arama Yapiniz:' 
          name="" id="" 
        />

        <div onClick={() => dispatch(modalFunc())} className='bg-indigo-800 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer'>
          <IoIosAddCircle size={25}/>
        </div>
      </div>
    </div>

  )
}

export default Header
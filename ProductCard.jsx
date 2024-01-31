import React from 'react'
import { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi"; // icon-lib
import { useDispatch } from 'react-redux';
import { deleteDataFunc } from '../redux/dataSlice';

// Olusturulan ürün burada siralanmakta


const ProductCard = ({dt}) => {

  const [openEdit, setOpenEdit] = useState(false) // guncelleme ve silme islemleri 
  // icon onClick ile OpenEdit acilacaktir

  // silme ve guncelleme islemleri icin redux yapildi dispatch ile alindi.
  const dispatch = useDispatch();

  return (
    <div className='w-[200px] h-[200px] relative m-2 rounded-md mx-5 my-3'>
      <img src={dt?.url} className='w-full h-full rounded-md'/>
      <div className='absolute left-0 bottom-0 bg-indigo-600 text-white w-full px-2'>
         <div className='text-lg font-semibold'>{dt?.name}</div>
         <div>{dt?.price}</div>
      </div>
      <div onClick={() => setOpenEdit(!openEdit)} className='absolute top-0 right-2 cursor-pointer'>
        <HiDotsHorizontal color='white' size={24} />
      </div>
      {
        openEdit && (
          <div className='bg-black border border-white text-white absolute top-7 right-1 rounded-md text-sm p-2'>
            <div onClick={() => dispatch(deleteDataFunc(dt?.id))} className='cursor-pointer p-1'>Sil</div>
          </div>
        )
      }
    </div>
  )
}

export default ProductCard
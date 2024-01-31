import React from 'react'
import { IoCloseSharp } from "react-icons/io5"; 
import { useDispatch } from 'react-redux';
import { modalFunc } from '../redux/modalSlice';

// Bu dosya urun ekleme butonuna tiklanildiginda karsima cikan pencereyi gostermekte.
// ModalFunc ile pencereyi kapatıp acma islemini yapiyorum.
// content props ile input button gibi degerlerim burada siralaniyor

const Modal = ({title, content, btnText, btnFunc}) => {

  const dispatch = useDispatch();

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 w-full h-screen flex items-center justify-center'>
        <div className='w-1/3 bg-white shadow-lg rounded-md p-4'>
          <div className='border-b py-3 flex items-center justify-between'>
              <div className='text-2xl'>{title}</div>
              <IoCloseSharp onClick={() => dispatch(modalFunc())} size={27} />
          </div>

          {content}

        </div>
    </div>
  )
}

export default Modal
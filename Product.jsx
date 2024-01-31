import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import ProductCard from '../components/ProductCard'
import Input from '../components/Input';
import Button from '../components/Button';
import { createDataFunc } from '../redux/dataSlice';
import { modalFunc } from '../redux/modalSlice';

const Product = () => {

  // modal store.js'den geliyor, (state => state.modal) modalSlice.js dosymda initalState icerisinden geliyor
  const {modal} = useSelector(state => state.modal)

  const {data, keyword} = useSelector(state => state.data)
  //console.log(data) data icerisindeki oluşturma sonrasi gormus oldum //amac map ile sayfamda siralamak

  const dispatch = useDispatch()
           
  const [productInfo, setProductInfo] = useState({name:"", price:"", url:""})  
  const onChangeFunc = (e, type) => {
    if(type == "url"){
      setProductInfo(prev => ({...prev, [e.target.name]: URL.createObjectURL(e.target.files[0])}))
    }
    else {
      setProductInfo(prev => ({...prev, [e.target.name]: e.target.value}))
    }  
  }

  const buttonFunc = () => {
    dispatch(createDataFunc({...productInfo, id: data.length + 1}))       // data fonksiyonuma redux'a state bilgileri gonderilmis oldu
    dispatch(modalFunc())                       // ekleme sonrasi card yapisi kapanacak onClick button aktarildi cunku
  }

  const contentModal = (
    <>  
      <Input type={"text"} placeholder={"Ad - Soyad"} name={"name"} id={"id"} onChange={e => onChangeFunc(e, "name")}/>
      <Input type={"text"} placeholder={"Plaka"} name={"price"} id={"price"} onChange={e => onChangeFunc(e, "price")}/>
      <Input type={"file"} placeholder={"Arac Fotograf"} name={"url"} id={"url"} onChange={e => onChangeFunc(e, "url")}/>
      <Button onClick={buttonFunc} btnText={"Plaka Ekle"}/>
    </>
  )

  const filteredItems = data.filter(dt => dt.name.toLowerCase().includes(keyword));

  // ProductCard icerisine key ve dt degerlerim props olarak gonderildi.
  // map ile card'lar siralandi flex items-cente ile x ekseni yatay siralandi wrap ile tasmasi onlenmis oldu
  return (
    <div>
      <div className='flex items-center flex-wrap'>
        {
          filteredItems?.map((dt, i) => (
            <ProductCard key={i} dt={dt}/>
          ))
        }
      </div>
        {/* modal true donerse, Modal.jsx dosyasi calisacaktir and operatoru ile saglamis oldum */}
        {/* title, btnText, btnFunc gibi degerleri disaridan alir aktarir. */}
        {modal && <Modal content={contentModal} title={"Urun olustur"}/>}
    </div>
  )
}

export default Product
// Card yapisi acilip kapanmasi icin true/false donecek kisim
import { createSlice } from '@reduxjs/toolkit'

/*
 reducers ile yapilacak islemler tanimlandi,
 modalFunc icerisindeki state, initialState icerisindeki degerlerden birini cekmeye yarıyor
 burada state.modal diyerek modal:false degerini aldım fonksiyon calistiginda bunu true degerine 
 dondurecektir.

*/

const initialState = {
    modal: false
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalFunc: (state) => {
        state.modal = !state.modal 
    },
  }
})

// olusturdugum reducer bilgilerini { } icerisine yazarım ve export ederim 
export const { modalFunc } = modalSlice.actions
// genel yapi export edildi
export default modalSlice.reducer
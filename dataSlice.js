// Product.jsx dosyamda girilen input degerlerin data redux aktarilan kisim 
// bu datalar sonrasinda map ile sayfamada gosteriliyor
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: [],
    keyword: ""
}

// state.data = [...state.data, action.payload]
// data state al, daha onceki datalar ile birlikte action gerceklestir.
// sorting islemi header kisminda onChange ile kullanildi
// deleteDataFunc filter ile aynı olanlar silinsin farklı olanlar kalsin denildi.

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    createDataFunc: (state, action) => {
      state.data = [...state.data, action.payload]
    },
    deleteDataFunc: (state, action) => {
      state.data = [...state.data.filter(dt => dt.id != action.payload)]  
    },
    sortingDataFunc: (state, action) => {
      state.data = [...state.data.sort((a,b) => action.payload == "asc" ? a.price - b.price : 
      action.payload == "desc" ? b.price - a.price : null)]
    },
    searchDataFunc: (state, action) => {
      state.keyword = action.payload 
    }
  }
})

// Action creators are generated for each case reducer function
export const { createDataFunc, deleteDataFunc, sortingDataFunc, searchDataFunc } = dataSlice.actions

export default dataSlice.reducer
import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from '../../api/data.api';

const product = getAllProducts()
const productModified = []

product.map((x) => {
  productModified.push({...x, cant:0})
})

const initialState = productModified

export const counterSlice = createSlice({
  name: 'counter',
  initialState, 
  reducers: {
      setEspecificValue: (state, action) => {
        const { id, number } = action.payload
        const objProduct = state.find( product => product.id === id) 
        if(objProduct && objProduct.cant > 0 || (objProduct.cant === 0 && number !== -1)){
          if(objProduct.stock !== objProduct.cant || (objProduct.stock === objProduct.cant && number === -1)){
            objProduct.cant = objProduct.cant + number
          }
        }
      }  
    }
  })

export const { setEspecificValue } = counterSlice.actions;

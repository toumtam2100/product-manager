import { createSlice } from "@reduxjs/toolkit";
import { productList } from "./Data";


const productSlice = createSlice({
    name: "products",
    initialState: productList,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        updateProduct: (state, action) => {
            const {id, name, price} = action.payload;
            const uu = state.find(product => product.id == id);
            if (uu) {
                uu.name = name;
                uu.price = price;
            }
        },
        deleteProduct: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(product => product.id == id);
            if(uu) {
                return state.filter(f => f.id !== id);
            }
        }
    }
})
export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  wishlist: []
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleWishlistState: (state, action) => {
      const product = action.payload;
      const exists = state.wishlist.find((item) => item.id === product.id);

      if(exists){
        state.wishlist = state.wishlist.filter((item) => item.id !== product.id)
        state.counter = state.counter - 1
      }else{
        state.wishlist.push(product)
        state.counter = state.counter + 1
      }
    },
  },
});

export const { toggleWishlistState } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
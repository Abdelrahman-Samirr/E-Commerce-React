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
      const productId = action.payload;
      const exists = state.wishlist.includes(productId);

      if(exists){
        state.wishlist = state.wishlist.filter((id) => id !== productId)
        state.counter = state.counter - 1
      }else{
        state.wishlist.push(productId)
        state.counter = state.counter + 1
      }
    },
  },
});

export const { toggleWishlistState } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
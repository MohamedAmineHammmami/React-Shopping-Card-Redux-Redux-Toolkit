import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  error: null,
  isLoading: false,
  favorite: [],
  message: null,
  total: 0,
};

export const getAllProducts = createAsyncThunk(
  "products/getAll",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await axios.get("https://fakestoreapi.com/products");

      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      let favItem = action.payload;

      if (state.favorite.some((el) => el.id === favItem.id)) {
        state.message = "Item is already exist.!";
        return;
      } else {
        state.favorite.push(favItem);
        state.total = [...state.favorite].reduce(
          (acc, el) => acc + el.price,
          0
        );
        state.message = null;
      }
    },
    removeFromFavorite: (state, action) => {
      state.favorite = [...state.favorite].filter(
        (el) => el.id !== action.payload
      );
      state.total = [...state.favorite].reduce((acc, el) => acc + el.price, 0);
    },
    clearMsg: (state) => {
      state.message = null;
    },
    increaseQuantity: (state, action) => {
      console.log("price", typeof action.payload.price);
      console.log("total", typeof state.total);
      state.total += action.payload.price;
    },
    decreaseQuantity: (state, action) => {
      if (action.payload.access) {
        state.total -= action.payload.price;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
        state.error = null;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const {
  addToFavorite,
  clearMsg,
  removeFromFavorite,
  increaseQuantity,
  decreaseQuantity,
} = productSlice.actions;

export default productSlice.reducer;

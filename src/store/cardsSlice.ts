import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInterface } from "../intarfases/apiInterface";

interface InitialValue {
  cards: apiInterface;
  cardsLoading: boolean;
}

export const url = "https://api.rosggram.ru";

const initialValue: InitialValue = {
  cards: { message: [] },
  cardsLoading: false,
};
export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState: initialValue,
  reducers: {
    setCards: (state, action: PayloadAction<apiInterface>) => {
      state.cards = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getCards.fulfilled, (state, payload) => {
      (state.cards = payload.payload), (state.cardsLoading = false);
    }),
      builder.addCase(getCards.pending, (state) => {
        state.cardsLoading = true;
      }),
      builder.addCase(getCards.rejected, (state) => {
        state.cardsLoading = false;
      });
  },
});
export const { setCards } = cardsSlice.actions;

export const getCards = createAsyncThunk(
  "Cards",
  async (complexity: number) => {
    try {
      const response = await fetch(url + `/get-cards/${complexity}`);
      const data = response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }
);

import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiInterface } from "../intarfases/apiInterface";

interface InitialValue{
  cards: apiInterface,
  cardsLoading: boolean
}

const initialValue: InitialValue = {cards: [],cardsLoading: false};
export const cardsSlice = createSlice({
  
  name: "cardsSlice",
  initialState: initialValue,
  reducers: {
    setCards: (
        state,
        action: PayloadAction<apiInterface>
      ) => {
        state.cards = action.payload;
      },
   
  },
  extraReducers(builder) {
    builder.addCase(getCards.fulfilled, (state, payload) => {
        state.cards = payload.payload,
        state.cardsLoading = false
      }),
      builder.addCase(getCards.pending, (state) => {
        state.cardsLoading = true
      }),
      builder.addCase(getCards.rejected, (state) => {
        state.cardsLoading = false
      })
  },
})
export const {setCards} = cardsSlice.actions

export const getCards = createAsyncThunk('Cards', async (_:undefined) => {
    try {
        const response = await fetch('https://api.rosggram.ru/get-cards/1')
        const data = response.json()
        return data
    }
    catch(e){
        console.log(e)
    }
})

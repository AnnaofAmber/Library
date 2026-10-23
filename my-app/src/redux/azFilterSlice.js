import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  all:'all'
};

const azFilterSlice = createSlice({
  name: 'aZ',
  initialState: initialState.all, 
  reducers: {
    azFilter(state, action) {
        return (state = action.payload);
    },
  },
  
});

export const { azFilter } = azFilterSlice.actions;
export const azFilterReducer = azFilterSlice.reducer;

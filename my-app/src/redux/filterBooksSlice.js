import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
};

const filterBooksSlice = createSlice({
  name: 'name',
  initialState: initialState.name, 
  reducers: {
    filterBooks(state, action) {
      
      return (state = action.payload);
    },
  },
  
});

export const { filterBooks } = filterBooksSlice.actions;
export const filterReducer = filterBooksSlice.reducer;

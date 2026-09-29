import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRead:'read',
  notRead:'not',
  all:'all'
};

const readFilterBookSlice = createSlice({
  name: 'isRead',
  initialState: initialState.all, 
  reducers: {
    readFilter(state, action) {
        return (state = action.payload);
    },
  },
  
});

export const { readFilter } = readFilterBookSlice.actions;
export const readFilterReducer = readFilterBookSlice.reducer;

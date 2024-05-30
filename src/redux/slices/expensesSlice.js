import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";


const INITAIL_DATA = [
  {
    id: uuidv4(),
    item: "의료비",
    price: 25000,
    detail: "귀막힘",
    date: "2024-05-24",
  },
  {
    id: uuidv4(),
    item: "식비",
    price: 20000,
    detail: "족발",
    date: "2024-05-20",
  },
  {
    id: uuidv4(),
    item: "식비",
    price: 35000,
    detail: "술값",
    date: "2024-05-04",
  },
  {
    id: uuidv4(),
    item: "미용",
    price: 55000,
    detail: "파마",
    date: "2024-03-24",
  },
];

const expensesSlice = createSlice({
  name: "list",
  initialState: INITAIL_DATA,
  reducers: {
    addList: (state, action) => {
      state.push(action.payload);
    },
    editList: (state, action) => {
      const { id, date, item, price, detail } = action.payload;
      const existingList = state.find((list) => list.id === id);
      if (existingList) {
        existingList.date = date;
        existingList.item = item;
        existingList.price = price;
        existingList.detail = detail;
      }
    },
    deleteList: (state, action) => {
      const { id } = action.payload;
      return state.filter((list) => list.id !== id);
    },
  },
});

export const { addList, editList, deleteList } = expensesSlice.actions;
export default expensesSlice.reducer;

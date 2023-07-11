import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// // addToDo()
// // return: {type: "ADD", payload: undefined}
// const addToDo = createAction("ADD");

// // deleteToDo()
// // return: {type: "DELETE", payload: undefined}
// const deleteToDo = createAction("DELETE");

// // React Toolkit에서는 state를 조작해도 문제 없다.
// // state를 조작하는 경우 return문이 없어도 된다. - immer 라이브러리에 의해
// // 새로운 state를 반환하는 경우 return문이 필요하다.
// const reducer = createReducer([], {
//   // 기존 state를 조작하므로 return문 제거
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   // 새로운 state를 반환하므로 return문 존재
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;

// //const CartContext = React.createContext({})

import { configureStore, createSlice } from '@reduxjs/toolkit';

// // import { useReducer } from 'react';

// // const App = () => {
// //   const [count, countDispatch] = useReducer((state, action) => {
// //     // if (action.type === 'ADD') {
// //     //   return state + 1;
// //     // }
// //     // return state;
// //     switch (action.type) {
// //       case 'ADD':
// //         return state + 1;
// //       case 'SUB':
// //         return state - 1;
// //       default:
// //         return state;
// //     }
// //   }, 1);

// //   const addHandler = () => {
// //     //setCount((prev) => prev + 1);
// //     countDispatch({ type: 'ADD' });
// //   };
// // };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'ADD':
//       //return state + 1;
//       return { ...state,count: state.count + 1 };
//     case 'SUB':
//       return state - 1;
//     case 'ADD_N':
//       return state + action.payload;
//     default:
//       state;
//   }
// }
// //通常初始值是一个对象，存各种状态
// const store = Redux.createStore(reducer, { count: 1 });

// store.subscribe = () => {
//   //countSpan.innerText = store.getState();
//   countSpan.innerText = store.getState().count;

// };

// subBtn.addEventListener('click', () => {
//   store.dispatch({ type: 'ADD' });
// });

// addFiveBtn.addEventListener('click', () => {
//   store.dispatch({ type: 'ADD_N', payload: 5 });
// });

// //RTK

const studentSlice = createSlice({
  name: 'stu',
  initialState: {
    name: 'sunwukong',
    age: 18,
    gender: 'male',
    address: 'huaguoshan',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = 28;
    },
  },
});

export const { setName, setAge } = studentSlice.actions;

const store = configureStore({
  reducer: { student: studentSlice.reducer },
});

export default store;

// Context.js
// import React, { useReducer } from 'react'

// let reducer = (state, action) => {
//     switch(action.type){
//         case "TOGGLE_EDIT":
//       return {...state, isEdit: !state.isEdit };

//       default:
//       return;
//     }
// }

// const initialState = { isEdit: false };
// const Context = React.createContext(initialState);


// function Provider(props) {
//     const [state, dispatch] = useReducer(reducer, initialState);
//  return (
//     <Context.Provider value={{ state, dispatch }}>
//       {props.children}
//     </Context.Provider>
//   );
// }
// export { Context, Provider };
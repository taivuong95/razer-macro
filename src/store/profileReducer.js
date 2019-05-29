
const actionInitialState= {
  isEdit:false,
  isRename:false,
  isDelete:false,
}

export default  (state = actionInitialState, action) => {
    switch(action.type){
        case "TOGGLE_EDIT":
      return {...state, isEdit: !state.isEdit };

      default:
      return state;
    }
}

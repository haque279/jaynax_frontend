const othersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_SUBTOTAL':
      return { subtotal: action.payload };
    case 'SUB_TO_SUBTOTAL':
      return { subtotal: action.payload };
    case 'REMOVE_SUBTOTAL':
      return { subtotal: action.payload };
    default:
      return state;
  }
};

export default othersReducer;

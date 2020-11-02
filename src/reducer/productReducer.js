const productReducer = (state, action) => {
  switch (action.type) {
    case "ALL_PRODUCT" :
      return [...action.payload]
    case 'ADD_PRODUCT':
      return [...state];
    default:
      return state;
  }
};

export default productReducer;

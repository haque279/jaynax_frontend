const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        {
          title: action.payload.title,
          price: action.payload.price,
          size: action.payload.size,
          color: action.payload.color,
          quantity: action.payload.quantity,
        },
        ...state,
      ];
    case 'INCREMENT':
      return [...action.payload];
    case 'DECREMENT':
      return [...action.payload];
    case 'PLACE_ORDER':
      return action.payload;
    default:
      return state;
  }
};

export default cartReducer;

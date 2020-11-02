import productReducer from './productReducer';

const promoCodeReducer = (state, action) => {
  switch (action.type) {
    case 'ALL_PROMO_CODE':
      return [...action.payload];
    case 'ADD_PROMO_CODE':
      return [
        {
          promoCode: action.payload.promoCode,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          discountRate: action.payload.discountRate,
          useTime: action.payload.useTime,
          status: action.payload.status,
        },
        ...state,
      ];
    case 'REMOVE_PROMO_CODE':
      return [ action.payload.edited , ...action.payload.other];
    default:
      return state;
  }
};

export default productReducer;

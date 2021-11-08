import { types } from '../actionMethodes/types';
let initialState = {
  items: [],
  totalCost: 0,
};
export const wishlist = (state = initialState, action) => {
    if(action.type==types.addtowishlist)
  {
     const { discountPer, price, id } = action.payload;
   
    state.items.push({
      ...action.payload,
      quantity: 1,
    });
    if (discountPer > 0) {
      state.totalCost += price
        ? price * (1 - (discountPer ? discountPer / 100 : 0))
        : 0;
    } else {
      state.totalCost += price;
    }
    return {...state};

  }
  if (action.type ==  types.removeFromwishlist) {
     const { discountPer, price, id } = action.payload;
    
    state.items=state.items.filter((x) => x.id != id);
     if (discountPer > 0) {
      state.totalCost -= price
        ? price * (1 - (discountPer ? discountPer / 100 : 0))
        : 0;
    } else {
      state.totalCost -= price;
    }
    return {...state};
  }

  // if (action.type === types.reduceQuantity) {
  //   const { discountPer, price, id } = action.payload;
  //   if (state.items.find((x) => x.id == id)) {
  //     if (x.quantity > 0) {
  //       x.quantity -= 1;
  //       if (discountPer > 0) {
  //         state.totalCost -= price
  //           ? price * (1 - (discountPer ? discountPer / 100 : 0))
  //           : 0;
  //       } else {
  //         state.totalCost -= price;
  //       }
  //     } else {
  //       state.items.filter((x) => x.id != id);
  //       if (discountPer > 0) {
  //         state.totalCost -= price
  //           ? price * (1 - (discountPer ? discountPer / 100 : 0))
  //           : 0;
  //       } else {
  //         state.totalCost -= price;
  //       }
  //     }
  //   }
  // }

   return state;
  
};
 
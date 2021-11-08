import { types } from '../actionMethodes/types';
let initialState = {
  items: [],
  totalCost: 0,
  coupon:null
};
export const cart = (state = initialState, action) => {
    if(action.type==types.addtoCart)
  {
     const { discountPer, price, id } = action.payload;
    if( state.items.find(x=>x.id==id)==undefined)
    {
       state.items.push({
        ...action.payload,
        quantity: action.payload.quantity?action.payload.quantity:1,
      });
      const qmultiply=action.payload.quantity?action.payload.quantity:1;
      if (discountPer > 0) {
        state.totalCost += price
          ? (price * (1 - (discountPer ? discountPer / 100 : 0))*qmultiply)
          : 0;
      } else {
         state.totalCost += price;
      }
      return {...state};

    }
    else
    {
 
      let itemFound= state.items.find(x=>x.id==id);
    if(itemFound)
    {
      itemFound.quantity+=1;
    }
    if (discountPer > 0) {
      state.totalCost += price
        ? price * (1 - (discountPer ? discountPer / 100 : 0))
        : 0;
    } else {
      state.totalCost += price;
    }
    const newState={
      
      ...state,
      items:state.items,
    }
    return {...newState};
    }
   

  }
  if (action.type ==  types.removeFromCart) {
    const { discountPer, price, id } = action.payload;
    const itemFound= state.items.find(x=>x.id==id);
    const quantity=itemFound.quantity?itemFound.quantity:1;
    
     state.items=state.items.filter((x) => x.id != id);
     
     if (discountPer > 0) {
      state.totalCost -= price
        ? ((price * (1 - (discountPer ? discountPer / 100 : 0)))*quantity)
        : 0;
    } else {
      state.totalCost -= price*quantity;
    }
    return {...state};
  }

  if(action.type==types.increaseQuantity)
  {
    
    const { discountPer, price, id } = action.payload;
     let itemFound= state.items.find(x=>x.id==id);
    if(itemFound)
    {
      itemFound.quantity+=1;
    }
    if (discountPer > 0) {
      state.totalCost += price
        ? price * (1 - (discountPer ? discountPer / 100 : 0))
        : 0;
    } else {
      state.totalCost += price;
    }
    const newState={
      
      ...state,
      items:state.items,
    }
    return {...newState};
  }
  if(action.type==types.reduceQuantity)
  {
    
    const { discountPer, price, id } = action.payload;
     let itemFound= state.items.find(x=>x.id==id);
    if(itemFound)
    {
      if(itemFound.quantity>1)
      {
        itemFound.quantity-=1;
      }
      else
      {
        state.items=state.items.filter((x) => x.id != id);
      }
    }
    if (discountPer > 0) {
      state.totalCost -= price
        ? price * (1 - (discountPer ? discountPer / 100 : 0))
        : 0;
    } else {
      state.totalCost -= price;
    }
    const newState={
      
      ...state,
      items:state.items,
    }
    return {...newState};
  }
  if(action.type==types.addCoupon)
  {
     return {...state,coupon:action.payload};
  }
  if(action.type==types.removeCoupon)
  {
    return {...state,coupon:null};
  }
  if(action.type==types.emptyCart)
  {
    return {
      items: [],
      totalCost: 0,
      coupon:null
    }
  }
   return state;
  
};

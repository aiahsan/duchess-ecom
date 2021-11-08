 
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import * as User from './reducer/user';
import {cart} from '../redux/reducer/cart'
import {wishlist} from '../redux/reducer/wishlist'
import { combineReducers } from 'redux';

 
 const rootReducer = combineReducers({
    Tokken: User.tokken,
    User: User.userReducer,
    Cart:cart,
    Wishlist:wishlist
  });

const makeConfiguredStore = (reducer) =>
    createStore(reducer );


const makeStore = () => {

    const isServer = typeof window === 'undefined';

    if (isServer) {
        
        return makeConfiguredStore(rootReducer);

    } else {

        // we need it only on client side
        const {persistStore, persistReducer} = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'duchess',
            whitelist: ['Tokken', 'User','Cart','Wishlist'], // make sure it does not clash with server keys
            storage
        };

        const persistedReducer = persistReducer(persistConfig, rootReducer);
        const store = makeConfiguredStore(persistedReducer);

        store.__persistor = persistStore(store); // Nasty hack

        return store;
    }
};

export const wrapper = createWrapper(makeStore);
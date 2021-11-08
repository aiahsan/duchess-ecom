 import {wrapper} from "../redux/store";
 import React,{useRef} from "react";
 import App from "next/app";
 import {useStore} from 'react-redux'
  import {PersistGate} from 'redux-persist/integration/react';
 
 export default wrapper.withRedux(({Component, pageProps}) => {
     const store = useStore();
     const ref=useRef();
     return (
         <PersistGate ref={ref} persistor={store.__persistor} loading={<div>Loading</div>}>
             <Component {...pageProps} />
         </PersistGate>
     );
 });
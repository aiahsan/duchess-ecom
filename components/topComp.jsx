import React from 'react';
import Loading from './LoadingAnimation';
import { Toast } from 'react-bootstrap';
export default ({ showmessage, setshowmessage, message, showanimation }) => {
  return (
    <>
      {showmessage ? (
        <Toast className='toastBox'>
          <Toast.Header onClick={() => setshowmessage(false)}>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded mr-2'
              alt=''
            />
            <strong className='mr-auto'>DUCHESS</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ) : (
        <></>
      )}
      {showanimation ? <Loading /> : <></>}
    </>
  );
};

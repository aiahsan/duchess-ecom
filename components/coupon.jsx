import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useSelector, useDispatch } from 'react-redux';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  coupon: Yup.string().required('Required'),
  
});

export default ({ setshowmessage, setmessage, setshowanimation ,setcoupon}) => {
  const postData = async (datapost) => {
      setshowanimation(true);
    const { data, status } = await repository.coupon(datapost).then((x) => x);
    if (status == 200) {
      setmessage(data.message);
      setshowmessage(true);
      setshowanimation(false);
      setcoupon(data.data)
    } else {
      setmessage(
        data && data.message ? data.message : 'Opps something went wrong'
      );
      setshowmessage(true);
      setshowanimation(false);
    }
  };

  return (
    <>
      {' '}
      <Formik
        initialValues={{
          
          coupon: '',
           
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await postData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          // cstErrors = errors;

          return (
            <>
              <div className='search-barr w-100 mt-3'>
                          <input
                             className='py-2 pl-3'
                           {...getFieldProps('coupon')}
                            placeholder='Enter Promo Code'
                            className='py-2 pl-3'
                          />
                          <button type="button" onClick={()=>{
                            handleSubmit()
                          }} className='site-btn px-3 py-2'>Apply</button>
                        </div>
             
                  {touched.coupon && errors.coupon && (
                    <div className='erorr'>{errors.coupon}</div>
                  )}
              </>
          );
        }}
      </Formik>
    </>
  );
};

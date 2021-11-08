import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  
});

export default ({ setshowmessage, setmessage, setshowanimation }) => {
  const postData = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository.email(datapost).then((x) => x);
    if (status == 200) {
      setmessage(data.message);
      setshowmessage(true);
      setshowanimation(false);
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
          
          email: '',
           
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await postData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          // cstErrors = errors;

          return (
            <Form>
                <div className='search-barr mt-3'>
                    <input
                      type='email'
                      placeholder='Email Address'
                      className='py-2 pl-3'
                      {...getFieldProps('email')}
                    />
                  
                    <button type="submit" className='site-btn px-3 py-2'>Subscribe</button>
                  </div>
                  {touched.email && errors.email && (
                    <div className='erorr'>{errors.email}</div>
                  )}
              </Form>
          );
        }}
      </Formik>
    </>
  );
};

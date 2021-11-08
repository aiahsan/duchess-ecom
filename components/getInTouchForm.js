import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

export default ({ setshowmessage, setmessage, setshowanimation }) => {
  const postData = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository.contact(datapost).then((x) => x);
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
          firstName: '',
          lastName: '',
          subject: '',
          email: '',
          message: '',
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
              <div className='row'>
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='First Name'
                    className='site-input w-100 px-3 py-sm-3 py-2'
                    {...getFieldProps('firstName')}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className='erorr'>{errors.firstName}</div>
                  )}
                </div>
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='site-input w-100 px-3 py-sm-3 py-2'
                    {...getFieldProps('lastName')}
                  />{' '}
                  {touched.lastName && errors.lastName && (
                    <div className='erorr'>{errors.lastName}</div>
                  )}
                </div>
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='Email'
                    className='site-input w-100 px-3 py-sm-3 py-2'
                    {...getFieldProps('email')}
                  />
                  {touched.email && errors.email && (
                    <div className='erorr'>{errors.email}</div>
                  )}
                </div>
                <div className='col-lg-6 mt-4'>
                  <input
                    type='text'
                    placeholder='Subject'
                    className='site-input w-100 px-3 py-sm-3 py-2'
                    {...getFieldProps('subject')}
                  />
                  {touched.subject && errors.subject && (
                    <div className='erorr'>{errors.subject}</div>
                  )}
                </div>
                <div className='col-12 mt-4'>
                  <textarea
                    name
                    id
                    cols={30}
                    rows={7}
                    placeholder='Your message'
                    className='site-input w-100 p-3'
                    defaultValue={''}
                    {...getFieldProps('message')}
                  />
                  {touched.message && errors.message && (
                    <div className='erorr'>{errors.message}</div>
                  )}
                </div>
                <div className='col-12 mt-4 text-center'>
                  <button
                    className='site-btn mb-2 text-capitalize px-5 py-2'
                    type='submit'
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

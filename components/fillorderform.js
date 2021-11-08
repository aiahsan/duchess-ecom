import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
  appartment: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
});

export default ({ setshowmessage, setmessage, setshowanimation }) => {
  // const postData = async (datapost) => {
  //   setshowanimation(true);
  //   const { data, status } = await repository.contact(datapost).then((x) => x);
  //   if (status == 200) {
  //     setmessage(data.message);
  //     setshowmessage(true);
  //     setshowanimation(false);
  //   } else {
  //     setmessage(
  //       data && data.message ? data.message : 'Opps something went wrong'
  //     );
  //     setshowmessage(true);
  //     setshowanimation(false);
  //   }
  // };
  return (
    <>
      {' '}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          companyName: '',
          country: '',
          street: '',
          city:'',
          appartment: '',
          passcode: '',
          phone: '',
          email: '',
          instructions: '',
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
          // await postData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          // cstErrors = errors;

          return (
            <Form>
                    <div className="row">
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        First Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='John'
                        className='login-input w-100 py-2'
                     {...getFieldProps('firstName')}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className='erorr'>{errors.firstName}</div>
                  )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Last Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Doe'
                        className='login-input w-100 py-2'
                        {...getFieldProps('lastName')}
                        />
                        {touched.lastName && errors.lastName && (
                          <div className='erorr'>{errors.lastName}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Company Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='John'
                        className='login-input w-100 py-2'
                        {...getFieldProps('companyName')}
                        />
                        {touched.companyName && errors.companyName && (
                          <div className='erorr'>{errors.companyName}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Country Region <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='United Kingdom'
                        className='login-input w-100 py-2'
                        {...getFieldProps('country')}
                        />
                        {touched.country && errors.country && (
                          <div className='erorr'>{errors.country}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Street Address <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='House Nmber & Street Number'
                        className='login-input w-100 py-2'
                        {...getFieldProps('street')}
                        />
                        {touched.street && errors.street && (
                          <div className='erorr'>{errors.street}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Apartment Info <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Apartment/Suit/Unit'
                        className='login-input w-100 py-2'
                        {...getFieldProps('street')}
                        />
                        {touched.appartment && errors.appartment && (
                          <div className='erorr'>{errors.appartment}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Town/City <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'     
                        placeholder='Manchester'
                        className='login-input w-100 py-2'
                        {...getFieldProps('city')}
                        />
                        {touched.city && errors.city && (
                          <div className='erorr'>{errors.city}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Passcode <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='number'
                        placeholder={123}
                        className='login-input w-100 py-2'
                        {...getFieldProps('passcode')}
                        />
                        {touched.passcode && errors.passcode && (
                          <div className='erorr'>{errors.passcode}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Phone <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='number'
                        placeholder={123456789}
                        className='login-input w-100 py-2'
                        {...getFieldProps('phone')}
                        />
                        {touched.phone && errors.phone && (
                          <div className='erorr'>{errors.phone}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Email Address <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='johndoe@gmail.com'
                        className='login-input w-100 py-2'
                        {...getFieldProps('email')}
                        />
                        {touched.email && errors.email && (
                          <div className='erorr'>{errors.email}</div>
                        )}
                    </div>
                    <div className='col-12 mt-4'>
                      <h6 className='semi-bold'>Additional Notes</h6>
                    </div>
                    <div className='col-12 mt-4'>
                      <label htmlFor className='medium'>
                        Order Notes
                      </label>
                      <input
                        type='text'
                        placeholder='e.g Special Notes for delivery'
                        className='login-input w-100 py-2'
                        {...getFieldProps('instructions')}
                        />
                        {touched.instructions && errors.instructions && (
                          <div className='erorr'>{errors.instructions}</div>
                        )}
                    </div>
                    </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

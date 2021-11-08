import React from 'react';
import Head from '../components/Head';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useDispatch } from 'react-redux';
import { Login, saveToken } from '../redux/actionMethodes/User/index';

import TopComp from '../components/topComp';
const DisplayingErrorMessagesSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  email: Yup.string().required('Required').email(),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),

  password_confirmation: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
export default () => {
  const [showpassword, setshowpassword] = React.useState(false);
  const [showpassword1, setshowpassword1] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const dispatch = useDispatch();
  const postData = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository.register(datapost).then((x) => x);
    console.log(data, status);
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
    <div>
      <TopComp
        showmessage={showmessage}
        setshowmessage={setshowmessage}
        message={message}
        showanimation={showanimation}
      />
      <Head title='Shop Hair' />

      <div className='wrapper'>
        <section className='login px-3 px-lg-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 order-lg-1 order-2 login-left-1 px-0'>
                <Formik
                  initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
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
                        <div className='p-xl-5 p-4'>
                          <h3 className='golden-text mistral'>
                            Hello Pretty Ladies
                          </h3>
                          <h4 className='text-uppercase'>
                            <span className='bold'>Become a</span> DUCHESS
                          </h4>
                          <p className='p-lg'>
                            Enter the details below &amp; Register Yourself
                          </p>
                          <div className='row'>
                            <div className='col-lg-6 mt-xl-3 mt-lg-2 mt-0'>
                              <input
                                type='text'
                                placeholder='Username'
                                className='login-input mt-4 w-100 py-2'
                                {...getFieldProps('username')}
                              />
                              {touched.username && errors.username && (
                                <div className='erorr'>{errors.username}</div>
                              )}
                            </div>
                            <div className='col-lg-6 mt-xl-3 mt-lg-2 mt-0'>
                              <input
                                type='email'
                                placeholder='Email'
                                className='login-input mt-4 w-100 py-2'
                                {...getFieldProps('email')}
                              />
                              {touched.email && errors.email && (
                                <div className='erorr'>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className='position-relative mt-xl-4 mt-3'>
                            <input
                              type={showpassword == true ? 'text' : 'password'}
                              placeholder='Password'
                              className='login-input w-100 py-2'
                              {...getFieldProps('password')}
                            />
                            <button
                              type='button'
                              onClick={() => setshowpassword(!showpassword)}
                              className='transparent-btn right-icon'
                            >
                              <i className='fas fa-eye-slash' />
                            </button>
                          </div>
                          {touched.password && errors.password && (
                            <div className='erorr'>{errors.password}</div>
                          )}

                          <div className='position-relative mt-xl-4 mt-3'>
                            <input
                              type='password'
                              type={showpassword1 == true ? 'text' : 'password'}
                              placeholder='Confirm Password'
                              className='login-input w-100 py-2'
                              {...getFieldProps('password_confirmation')}
                            />

                            <button
                              type='button'
                              onClick={() => setshowpassword1(!showpassword1)}
                              className='transparent-btn right-icon'
                            >
                              <i className='fas fa-eye-slash' />
                            </button>
                          </div>
                          {touched.password_confirmation &&
                            errors.password_confirmation && (
                              <div className='erorr'>
                                {errors.password_confirmation}
                              </div>
                            )}

                          <p className='mt-4 mb-0 d-flex align-items-center'>
                            <input type='checkbox' id='c1' name='cb' />
                            <label htmlFor='c1' className='d-grey-text' />
                            <label htmlFor className='ml-2'>
                              I accept your{' '}
                              <a href='#_' className='pink-text'>
                                {' '}
                                terms &amp; conditions
                              </a>
                            </label>
                          </p>
                          <div className='row mt-lg-4 mt-3'>
                            <div className='col-lg-6 mx-auto'>
                              <button
                                type={'submit'}
                                className='site-btn text-capitalize medium w-100 py-2 px-5'
                              >
                                Sign Up
                              </button>
                            </div>
                          </div>
                          <div className='text-center mt-3'>
                            <p className='mt-xl-5 mt-3 medium'>
                              Already have an account?{' '}
                              <a href='login' className='pink-text semi-bold'>
                                {' '}
                                LOGIN
                              </a>
                            </p>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
              <div className='col-lg-6 order-lg-2 order-1 login-right-1 px-0'>
                <img
                  src='images/login-right.png'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='overlay' />
    </div>
  );
};

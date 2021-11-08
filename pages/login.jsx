import React from 'react';
import Head from '../components/Head';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { repository } from '../utiles/repository';
import { useDispatch, useSelector } from 'react-redux';
import { Login, saveToken } from '../redux/actionMethodes/User/index';
import {wrapper } from '../redux/store';
import Cookies from 'cookies'
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'

import TopComp from '../components/topComp';
import jwt_decode from 'jwt-decode';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  password: Yup.string()
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
});
export default () => {
          const [showpassword, setshowpassword] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const dispatch = useDispatch();
  const Tokken=useSelector(x=>x.Tokken);
  const router = useRouter()

  const postData = async (datapost) => {
     setshowanimation(true);
    const { data, status } = await repository.login(datapost).then((x) => x);
    if (status == 200) {
      setmessage(data.message);
      setshowmessage(true);
      setshowanimation(false);
      dispatch(saveToken(data.data.token));
      dispatch(Login(jwt_decode(data.data.token)));
      cookieCutter.set('token', jwt_decode(data.data.token))
       router.replace('profile')
    } else {
      setmessage(
        data && data.message ? data.message : 'Opps something went wrong'
      );
      setshowmessage(true);
      setshowanimation(false);
    }
  };
  React.useEffect(()=>{
     if (Tokken&&Tokken!=null) {

       

    }
  },[])
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
              <div className='col-lg-6 login-left px-0'>
                <img
                  src='images/login-left.png'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
              <div className='col-lg-6 login-right px-0'>
                <Formik
                  initialValues={{
                    email: '',
                    password: '',
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
                          <h3 className='golden-text mistral'>Hi Beauties</h3>
                          <h4 className='text-uppercase'>
                            <span className='bold'>WELCOME TO</span> DUCHESS
                          </h4>
                          <p className='p-lg'>Enter your login details below</p>
                          <input
                            type='email'
                            placeholder='Email'
                            className='login-input mt-4 w-100 py-2'
                            {...getFieldProps('email')}
                          />
                          {touched.email && errors.email && (
                            <div className='erorr'>{errors.email}</div>
                          )}
                          <div className='position-relative mt-xl-5 mt-3'>
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
                          <p className='mt-4 mb-0'>
                            <input type='checkbox' id='c1' name='cb' />
                            <label htmlFor='c1' className='d-grey-text'>
                              Remember Me
                            </label>
                          </p>
                          <div className='row mt-lg-4 mt-3'>
                            <div className='col-lg-6 mx-auto'>
                              <button
                                type={'submit'}
                                className='site-btn text-capitalize medium w-100 py-2 px-5'
                              >
                                Login
                              </button>
                            </div>
                          </div>
                          <div className='text-center mt-3'>
                            <a
                              href='forget-password'
                              className='medium black-text'
                            >
                              Lost your password?
                            </a>
                            <p className='mt-xl-5 mt-3 medium'>
                              Don't have an account?{' '}
                              <a href='sign-up' className='pink-text semi-bold'>
                                {' '}
                                SIGN UP
                              </a>
                            </p>
                          </div>
                        </div>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='overlay' />
    </div>
  );
};
function parseCookies(req){
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
export const getServerSideProps = wrapper.getServerSideProps(store => ({req, res, ...etc}) => {
  const cookies = new Cookies(req, res)

  const Tokken= cookies.get('token')

    console.log(Tokken);
     if (Tokken&&Tokken!=null) {
      return {
        redirect: {
          destination: '/profile',
          permanent: false,
        },
      };
    }
    // return { props: {} };
}
)





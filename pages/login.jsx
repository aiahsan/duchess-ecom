import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

export default () => {
  const [showDropdown, setshowDropdown] = React.useState(false);
  return (
    <div>
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
                  />
                  <div className='position-relative mt-xl-5 mt-3'>
                    <input
                      type='password'
                      placeholder='Password'
                      className='login-input w-100 py-2'
                    />
                    <button className='transparent-btn right-icon'>
                      <i className='fas fa-eye-slash' />
                    </button>
                  </div>
                  <p className='mt-4 mb-0'>
                    <input type='checkbox' id='c1' name='cb' />
                    <label htmlFor='c1' className='d-grey-text'>
                      Remember Me
                    </label>
                  </p>
                  <div className='row mt-lg-4 mt-3'>
                    <div className='col-lg-6 mx-auto'>
                      <button className='site-btn text-capitalize medium w-100 py-2 px-5'>
                        Login
                      </button>
                    </div>
                  </div>
                  <div className='text-center mt-3'>
                    <a href='forget-password' className='medium black-text'>
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
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='overlay' />
    </div>
  );
};

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
              <div className='col-lg-6 order-lg-1 order-2 login-left-1 px-0'>
                <div className='p-xl-5 p-4'>
                  <h3 className='golden-text mistral'>Hello Pretty Ladies</h3>
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
                      />
                    </div>
                    <div className='col-lg-6 mt-xl-3 mt-lg-2 mt-0'>
                      <input
                        type='email'
                        placeholder='Email'
                        className='login-input mt-4 w-100 py-2'
                      />
                    </div>
                  </div>
                  <div className='position-relative mt-xl-4 mt-3'>
                    <input
                      type='password'
                      placeholder='Password'
                      className='login-input w-100 py-2'
                    />
                    <button className='transparent-btn right-icon'>
                      <i className='fas fa-eye-slash' />
                    </button>
                  </div>
                  <div className='position-relative mt-xl-4 mt-3'>
                    <input
                      type='password'
                      placeholder='Confirm Password'
                      className='login-input w-100 py-2'
                    />
                    <button className='transparent-btn right-icon'>
                      <i className='fas fa-eye-slash' />
                    </button>
                  </div>
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
                      <button className='site-btn text-capitalize medium w-100 py-2 px-5'>
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

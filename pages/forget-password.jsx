import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

export default () => {
  return (
    <div>
      <Head title='Shop Hair' />

      <div className='wrapper'>
        <section className='forget-password px-3 px-lg-0'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='forget-card'>
                  <img
                    src='images/hair.png'
                    alt=''
                    className='img-fluid forget-card-img w-100'
                  />
                  <div className='py-lg-5 p-4 text-center'>
                    <h3 className='golden-text mt-0 mistral'>Hi Duchess</h3>
                    <h4>
                      <span className='bold'>LOST </span> YOUR PASSWORD?
                    </h4>
                    <p className='p-lg'>
                      No worries. W are here to help you. Enter your email
                      address below &amp; <br /> we'll send you a password
                      recovery link.
                    </p>
                    <div className='row'>
                      <div className='col-lg-6 mx-auto'>
                        <input
                          type='email'
                          className='login-input w-100 py-2'
                          placeholder='Email'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-xl-3 col-lg-4 mx-auto mt-lg-5 mt-3'>
                        <button className='px-5 py-2 site-btn w-100 medium text-capitalize'>
                          Send
                        </button>
                      </div>
                    </div>
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

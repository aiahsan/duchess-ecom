import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

export default () => {
  return (
    <div>
      <Head title='Shop Hair' />

      <div className='wrapper'>
        <Navbar />
        <div>
          {/* banner starts here */}
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 px-0'>
                <img src='images/faq.png' alt='' className='img-fluid w-100' />
              </div>
            </div>
          </div>
          {/* banner ends here */}
          {/* hair-collection ends here */}
          <section className='contact-us py-4 pb-lg-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3'>
                  <ul className='side-links'>
                    <li>
                      <a href='profile'>My Profile</a>
                    </li>
                    <li>
                      <a href='orders'>Orders</a>
                    </li>
                    <li className='active'>
                      <a href='change-password'>Change Password</a>
                    </li>
                    <li>
                      <a href='login'>Log Out</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-9'>
                  <div className='d-sm-flex align-items-center justify-content-between'>
                    <h5 className='bold mt-0'>Change Password</h5>
                    <button className='site-btn px-4 py-2 mt-3 mt-sm-0 medium text-capitalize'>
                      Update Password
                    </button>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Old Password <span className='pink-text'>*</span>
                      </label>
                      <div className='position-relative'>
                        <input
                          type='password'
                          defaultValue='johndoe'
                          className='login-input w-100 py-2'
                        />
                        <button className='transparent-btn right-icon'>
                          <i className='fas fa-eye-slash' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        New Password <span className='pink-text'>*</span>
                      </label>
                      <div className='position-relative'>
                        <input
                          type='password'
                          defaultValue='johndoe'
                          className='login-input w-100 py-2'
                        />
                        <button className='transparent-btn right-icon'>
                          <i className='fas fa-eye-slash' />
                        </button>
                      </div>
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Confirm Password <span className='pink-text'>*</span>
                      </label>
                      <div className='position-relative'>
                        <input
                          type='password'
                          defaultValue='johndoe'
                          className='login-input w-100 py-2'
                        />
                        <button className='transparent-btn right-icon'>
                          <i className='fas fa-eye-slash' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
        </div>
      </div>
      <div className='overlay' />
    </div>
  );
};

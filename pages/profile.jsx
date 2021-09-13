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
                    <li className='active'>
                      <a href='profile'>My Profile</a>
                    </li>
                    <li>
                      <a href='orders'>Orders</a>
                    </li>
                    <li>
                      <a href='change-password'>Change Password</a>
                    </li>
                    <li>
                      <a href='login'>Log Out</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-9'>
                  <div className='d-sm-flex align-items-center justify-content-between'>
                    <h5 className='bold mt-0'>Profile Information</h5>
                    <button className='site-btn px-4 py-2 mt-3 mt-sm-0 medium text-capitalize'>
                      Edit Profile
                    </button>
                  </div>
                  <div className='row'>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        First Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='John'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Last Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='Doe'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Company Name
                      </label>
                      <input
                        type='text'
                        defaultValue='John Builders'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Country/Region <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='United Kingdom (UK)'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Street Address <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='House Nmber & Street Number'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Apartment Info <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='Apartment/Suit/Unit'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Town/City <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='Manchester'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Passcode <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue={123}
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Phone <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue={123456789}
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Email Address <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='johndoe@gmail.com'
                        className='login-input w-100 py-2'
                      />
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

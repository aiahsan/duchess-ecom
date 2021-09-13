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
                <img
                  src='images/checkout-banner.png'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
            </div>
          </div>
          {/* banner ends here */}
          {/* hair-collection ends here */}
          <section className='contact-us py-lg-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center mt-4'>
                  <h3 className='bold mb-0'>Checkout</h3>
                  <p className='p-lg'>You are just few steps away!</p>
                </div>
                <div className='col-lg-7'>
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
                        Company Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        defaultValue='John'
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Country/Region <span className='pink-text'>*</span>
                      </label>
                      <select name id className='login-input py-2 w-100'>
                        <option value>United Kingdom (UK)</option>
                      </select>
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
                        type='number'
                        defaultValue={123}
                        className='login-input w-100 py-2'
                      />
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Phone <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='number'
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
                      />
                    </div>
                  </div>
                </div>
                <div className='col-lg-5'>
                  <div className='side-links'>
                    <p className='p-sm'>
                      Returning customer?{' '}
                      <a href='login.php' className='pink-text semi-bold'>
                        Click here to login
                      </a>
                    </p>
                    <div className='search-barr w-100 mt-3'>
                      <input
                        type='text'
                        placeholder='Enter Promo Code'
                        className='py-2 pl-3'
                      />
                      <button className='site-btn px-3 py-2'>Apply</button>
                    </div>
                    <div className='d-flex mt-4 align-items-center justify-content-between'>
                      <p>Shipping Fee</p>
                      <p>$10.00</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='semi-bold'>Product</p>
                      <p className='semi-bold'>Sub Total</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='mb-2'>Product Name x1</p>
                      <p className='mb-2'>$30.00</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='mb-0'>Product Name x2</p>
                      <p className='mb-0'>$60.00</p>
                    </div>
                    <hr className='grey-line' />
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='semi-bold'>Total</p>
                      <p className='semi-bold'>$100.00</p>
                    </div>
                    <p className='p-sm mb-2'>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                    <button
                      onClick={() => (location.href = 'order-placed')}
                      className='w-100 mt-3 py-2 site-btn'
                    >
                      Place Order
                    </button>
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

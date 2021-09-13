import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

export default () => {
  return (
    <div>
      <Head title='Shop Hair' />

      <div className='wrapper'>
        <Navbar />
        {/* hair-collection ends here */}
        <section className='contact-us text-center py-lg-5 py-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-6 col-lg-8 mx-auto'>
                <img
                  src='images/order-placed.png'
                  alt=''
                  className='img-fluid'
                />
                <h3 className='mt-4 bold'>Order Placed Successfully</h3>
                <p className='mt-2 p-lg grey-text'>Order Number: ABC12345</p>
                <p className='mt-4 p-lg grey-text'>
                  Thank you for your order. Your order will be delivered to you
                  within 7 days. An order confirmation email has been sent to
                  your email address.
                </p>
                <a
                  href='#_'
                  className='d-inline-block semi-bold mt-4 pink-text medium'
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* hair-collection ends here */}
      </div>
      <div className='overlay' />
    </div>
  );
};

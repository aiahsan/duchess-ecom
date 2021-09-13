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
                  src='images/contact.png'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
            </div>
          </div>
          {/* banner ends here */}
          {/* hair-collection ends here */}
          <section className='contact-us py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-6'>
                  <h3>
                    <span className='bold'>Contact Our</span> Help Center
                  </h3>
                  <p className='grey-text mb-1'>
                    Our customer support team would love to resolve your
                    queries.
                  </p>
                  <form action='#_'>
                    <div className='row'>
                      <div className='col-lg-6 mt-4'>
                        <input
                          type='text'
                          placeholder='First Name'
                          className='site-input w-100 px-3 py-sm-3 py-2'
                        />
                      </div>
                      <div className='col-lg-6 mt-4'>
                        <input
                          type='text'
                          placeholder='Last Name'
                          className='site-input w-100 px-3 py-sm-3 py-2'
                        />
                      </div>
                      <div className='col-lg-6 mt-4'>
                        <input
                          type='text'
                          placeholder='Email'
                          className='site-input w-100 px-3 py-sm-3 py-2'
                        />
                      </div>
                      <div className='col-lg-6 mt-4'>
                        <input
                          type='text'
                          placeholder='Subject'
                          className='site-input w-100 px-3 py-sm-3 py-2'
                        />
                      </div>
                      <div className='col-12 mt-4'>
                        <textarea
                          name
                          id
                          cols={30}
                          rows={7}
                          placeholder='Your message'
                          className='site-input w-100 p-3'
                          defaultValue={''}
                        />
                      </div>
                      <div className='col-12 mt-4'>
                        <button
                          className='site-btn mb-2 text-capitalize px-5 py-2'
                          type='submit'
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className='col-lg-6 my-lg-auto mt-3 mt-lg-0'>
                  <div style={{ width: '100%' }}>
                    <iframe
                      width='100%'
                      height={400}
                      frameBorder={0}
                      scrolling='no'
                      marginHeight={0}
                      marginWidth={0}
                      src='https://maps.google.com/maps?width=100%25&height=600&hl=en&q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed'
                    />
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

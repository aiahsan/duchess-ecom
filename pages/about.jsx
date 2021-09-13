import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
                  src='images/about-banner.png'
                  alt=''
                  className='img-fluid w-100'
                />
              </div>
            </div>
          </div>
          {/* banner ends here */}
          <section className='real-transformation py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3 className='mb-0'>
                      <span className='bold'>Duchess</span> Real Transformation
                    </h3>
                    <p className='grey-text'>Before &amp; After</p>
                  </div>
                </div>
                <div className='col-12 mt-lg-5 mt-3'>
                  <div className='blue-bg py-lg-5 mt-lg-5 mt-0 p-3'>
                    <div className='row'>
                      <div className='col-lg-7 order-lg-1 order-2'>
                        <p className='p-lg grey-text mb-0'>
                          Get longer, thicker hair without the wait. Duchess
                          Hair extensions will transform your hair in just
                          minutes. Have fun playing with length, volume, or
                          color, and get your dream hair now!
                        </p>
                      </div>
                      <div className='col-lg-5 order-lg-2 order-1'>
                        <img
                          src='images/transformation.png'
                          alt=''
                          className='img-fluid transformation-img'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='real-transformation pb-md-5 pb-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3 className='mb-0'>
                      <span className='bold'>Pia Wearing</span> Hair Extension
                    </h3>
                    <p className='grey-text'>See the Transformation</p>
                    <img
                      src='images/video.png'
                      alt=''
                      className='img-fluid mt-3'
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className='real-transformation pb-md-5 pb-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3 className='mb-0'>
                      <span className='bold'>Tag Us For The</span> Chance To Be
                      Featured
                    </h3>
                    <p className='grey-text'>Our Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='customers py-md-5 py-4'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <OwlCarousel
                      className='collection-carousel owl-theme'
                      loop={true}
                      margin={20}
                      dots={false}
                      nav={true}
                      navText={[
                        "<img src='images/arrow-left.png'>",
                        "<img src='images/arrow-right.png'>",
                      ]}
                      responsive={{
                        0: {
                          items: 2,
                        },
                        600: {
                          items: 2,
                        },
                        1000: {
                          items: 4,
                        },
                      }}
                    >
                      <div className='item'>
                        <img
                          src='images/customer-1.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-2.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-3.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-4.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-1.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-2.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-3.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                      <div className='item'>
                        <img
                          src='images/customer-4.png'
                          alt=''
                          className='img-fluid'
                        />
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          <section className='get-in-touch pt-5 pb-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h3>
                    <span className='bold'>Get in touch</span> with Duchess
                  </h3>
                  <p className='grey-text'>
                    We love to hear from you. Feel free to contact us.
                  </p>
                </div>
              </div>
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
                  <div className='col-12 mt-4 text-center'>
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
          </section>
          {/* hair-collection ends here */}
        </div>
      </div>
      <div className='overlay' />
    </div>
  );
};

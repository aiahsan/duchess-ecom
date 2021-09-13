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
                  src='images/blog-banner.png'
                  alt=''
                  className='img-fluid w-100 blog-banner'
                />
                <div className='banner-content text-center'>
                  <h5>
                    <span className='bold'>Subscribe</span> our Newsletter
                  </h5>
                  <div className='search-barr mt-3'>
                    <input
                      type='email'
                      placeholder='Email Address'
                      className='py-2 pl-3'
                    />
                    <button className='site-btn px-3 py-2'>Subscribe</button>
                  </div>
                </div>
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
                      <span className='bold'>Duchess</span> Featured Blog
                    </h3>
                    <p className='grey-text'>Interesting Articles to Read</p>
                  </div>
                  <div
                    className='position-relative'
                    onClick={() => (location.href = 'blogs-details')}
                  >
                    <img
                      src='images/featured-blog.png'
                      alt=''
                      className='img-fluid mt-4 featured-blog'
                    />
                    <div className='featured-card'>
                      <p className='mb-1 p-lg'>March 5, 2021.</p>
                      <h6>DIY Sea Salt Texturizing Hair Spray</h6>
                      <p className='mb-1 p-lg'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting standard dummy text ever since the 1500s.{' '}
                        <a href='#_'> Read More</a>
                      </p>
                      <p className='mb-1 p-lg'>
                        Posted by abir . HAIR CARE &amp; ADVICE
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='col-lg-4 col-md-6 mt-3'
                  onClick={() => (location.href = 'blogs-details')}
                >
                  <img
                    src='images/featured-blog-1.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='featured-blog-card mx-2 p-3'>
                    <p className='mb-1 medium pink-text'>March 5, 2021.</p>
                    <p className='mb-1 bold'>
                      Top 10 Hat Hairstyles You Need to Try
                    </p>
                    <p className='mb-1 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
                  </div>
                </div>
                <div
                  className='col-lg-4 col-md-6 mt-3'
                  onClick={() => (location.href = 'blogs-details')}
                >
                  <img
                    src='images/featured-blog-2.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='featured-blog-card mx-2 p-3'>
                    <p className='mb-1 medium pink-text'>March 6, 2021.</p>
                    <p className='mb-1 bold'>How to get a Natural Hair Look</p>
                    <p className='mb-1 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
                  </div>
                </div>
                <div
                  className='col-lg-4 col-md-6 mt-3'
                  onClick={() => (location.href = 'blogs-details')}
                >
                  <img
                    src='images/featured-blog-3.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='featured-blog-card mx-2 p-3'>
                    <p className='mb-1 medium pink-text'>March 7, 2021.</p>
                    <p className='mb-1 bold'>Six Medium Length Hairstyles</p>
                    <p className='mb-1 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
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
                      <span className='bold'>The Luxy</span> Hair Blog
                    </h3>
                    <p className='grey-text'>
                      All you need to know about hair!
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 px-lg-0 mt-3'>
                  <img
                    src='images/luxy-blog-1.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                </div>
                <div className='col-lg-6 px-lg-0 featured-blog-card mt-lg-3 mt-0'>
                  <div
                    className='mx-2 p-3'
                    onClick={() => (location.href = 'blogs-details')}
                  >
                    <p className='mb-1 medium mt-3 pink-text'>March 5, 2021.</p>
                    <p className='mb-1 mt-3 bold'>
                      Aloe vera: why you should try hair masking with this
                      wonder plant
                    </p>
                    <p className='mb-1 mt-3'>
                      Often described as a ‘wonder plant’, aloe vera is the
                      perfect house plant to grow in your kitchen or corner of
                      your garden.{' '}
                      <a href='#_' className='pink-text'>
                        {' '}
                        Read More
                      </a>
                    </p>
                    <p className='mb-1 mt-3 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
                  </div>
                </div>
                <div className='col-lg-6 px-lg-0 mt-3 mt-lg-4'>
                  <img
                    src='images/luxy-blog-2.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                </div>
                <div className='col-lg-6 px-lg-0 featured-blog-card mt-lg-4 mt-0'>
                  <div
                    className='mx-2 p-3'
                    onClick={() => (location.href = 'blogs-details')}
                  >
                    <p className='mb-1 medium mt-3 pink-text'>March 5, 2021.</p>
                    <p className='mb-1 mt-3 bold'>
                      How Often Should I Wash My Hair?
                    </p>
                    <p className='mb-1 mt-3'>
                      Finding the perfect hair-wash schedule is often impossible
                      for us girls. Wash your hair too much, and it will become
                      dry and brittle. Don’t wash it enough, and it will become
                      oily and lifeless.{' '}
                      <a href='#_' className='pink-text'>
                        {' '}
                        Read More
                      </a>
                    </p>
                    <p className='mb-1 mt-3 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
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

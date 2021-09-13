import React from 'react';
import Head from '../../components/Head';

export default () => {
  return (
    <div>
      <Head title='Shop Hair' />

      <div className='wrapper'>
        <div className='share-nav py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <img src='/images/logo.png' alt='' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
        {/* hair-collection ends here */}
        <section className='contact-us text-center py-lg-5 py-4'>
          <div className='container py-lg-5'>
            <div className='row'>
              <div className='col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto'>
                <h3 className='bold'>Share Your Photo</h3>
                <img
                  src='/images/post-photo.png'
                  alt=''
                  className='img-fluid mt-4'
                />
                <textarea
                  name
                  id
                  rows={4}
                  placeholder='Short Description'
                  className='mt-4 site-input shadow-input p-3 w-100'
                  defaultValue={''}
                />
                <input
                  type='text'
                  placeholder='Name'
                  className='mt-3 site-input shadow-input px-3 py-2 w-100'
                />
                <p className='mt-4 text-left mb-0'>
                  <input type='checkbox' id='c1' name='cb' />
                  <label htmlFor='c1'>
                    {' '}
                    I agree to the{' '}
                    <a href='#_' className='pink-text medium'>
                      {' '}
                      terms &amp; Conditions
                    </a>
                  </label>
                </p>
                <button className='site-btn py-2 mt-3 medium text-capitalize w-100'>
                  Post
                </button>
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

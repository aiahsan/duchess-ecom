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
            <div className='row pb-xl-5'>
              <div className='col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto'>
                <h3 className='bold'>Share Your Photo</h3>
                <label
                  htmlFor='upload-photo'
                  className='site-btn w-100 medium text-capitalize mt-4 py-2'
                >
                  Upload Your Photo
                </label>
                <div className='d-none'>
                  <input type='file' name id='upload-photo' />
                </div>
                <button
                  className='site-btn py-2 mt-3 medium text-capitalize w-100'
                  disabled
                >
                  Take Photo
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

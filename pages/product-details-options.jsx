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
        <section className='contact-us py-lg-5 py-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h5 className='bold'>Hair Extensions</h5>
              </div>
              <div className='col-lg-6 mt-3'>
                <img
                  src='images/product-bg.png'
                  alt=''
                  className='img-fluid w-100'
                />
                <div className='row mt-3'>
                  <div className='col-4'>
                    <img
                      src='images/product-sm.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                  <div className='col-4'>
                    <img
                      src='images/product-sm.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                  <div className='col-4'>
                    <img
                      src='images/product-sm.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mt-3 my-lg-auto'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a href='#' className='grey-text'>
                        Home
                      </a>
                    </li>
                    <li className='breadcrumb-item'>
                      <a href='#' className='grey-text'>
                        Accessories
                      </a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Fancy Hair Pins Bundle
                    </li>
                  </ol>
                </nav>
                <h5 className='bold'>Fancy Hair Pins Bundle</h5>
                <h6 className='bold'>
                  <del>£18.00</del> <span className='golden-text'>$15.00</span>
                </h6>
                <p className='grey-text mt-4 mb-2'>Categories: Accessories</p>
                <p className='grey-text mb-2'>Fabric: Poly Satin</p>
                <p className='grey-text mb-2'>Delivery Time: 1 Week</p>
                <p className='grey-text'>Care: Handwash</p>
                <div className='d-flex mt-4 align-items-center'>
                  <p className='medium mb-0 mr-3'>Quantity:</p>
                  <div className='plus-minus-div mb-0'>
                    <div
                      className='value-button'
                      id='decrease'
                      onclick='decreaseValue()'
                      value='Decrease Value'
                    >
                      <i className='fa fa-minus' aria-hidden='true' />
                    </div>
                    <input type='number' id='number' defaultValue={0} />
                    <div
                      className='value-button value-button-2'
                      id='increase'
                      onclick='increaseValue()'
                      value='Increase Value'
                    >
                      <i className='fa fa-plus' aria-hidden='true' />
                    </div>
                  </div>
                </div>
                <div className='d-flex mt-4 align-items-center'>
                  <p className='medium mb-0 mt-3 mr-3'>Color:</p>
                  <div className='d-flex align-items-center'>
                    <label className='radio-container'>
                      <input
                        type='radio'
                        defaultChecked='checked'
                        name='radio'
                      />
                      <span className='radio-checkmark' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark black-color' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark cyan-color' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark green-color' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark pur-color' />
                    </label>
                  </div>
                </div>
                <button className='site-btn w-100 py-2 medium text-capitalize mt-xl-5 mt-4'>
                  Add to Cart
                </button>
                <button
                  className='site-btn w-100 py-2 medium text-capitalize mt-3'
                  disabled
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
            <div className='row mt-md-5 pb-lg-5 mt-4'>
              <div className='col-12'>
                <h5 className='bold'>Hair Straightener &amp; Curler</h5>
              </div>
              <div className='col-lg-6 mt-3'>
                <img
                  src='images/product-bg.png'
                  alt=''
                  className='img-fluid w-100'
                />
                <div className='row mt-3'>
                  <div className='col-4'>
                    <img
                      src='images/product-sm.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                  <div className='col-4'>
                    <img
                      src='images/product-sm.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                  <div className='col-4'>
                    <img
                      src='images/product-sm.png'
                      alt=''
                      className='img-fluid w-100'
                    />
                  </div>
                </div>
              </div>
              <div className='col-lg-6 mt-3 my-lg-auto'>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a href='#' className='grey-text'>
                        Home
                      </a>
                    </li>
                    <li className='breadcrumb-item'>
                      <a href='#' className='grey-text'>
                        Accessories
                      </a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      Fancy Hair Pins Bundle
                    </li>
                  </ol>
                </nav>
                <h5 className='bold'>Fancy Hair Pins Bundle</h5>
                <h6 className='bold'>
                  <del>£18.00</del> <span className='golden-text'>$15.00</span>
                </h6>
                <p className='grey-text mt-4 mb-2'>Categories: Accessories</p>
                <p className='grey-text mb-2'>Fabric: Poly Satin</p>
                <p className='grey-text mb-2'>Delivery Time: 1 Week</p>
                <p className='grey-text'>Care: Handwash</p>
                <div className='d-flex mt-4 align-items-center'>
                  <p className='medium mb-0 mr-3'>Quantity:</p>
                  <div className='plus-minus-div mb-0'>
                    <div
                      className='value-button'
                      id='decrease'
                      onclick='decreaseValue()'
                      value='Decrease Value'
                    >
                      <i className='fa fa-minus' aria-hidden='true' />
                    </div>
                    <input type='number' id='number' defaultValue={0} />
                    <div
                      className='value-button value-button-2'
                      id='increase'
                      onclick='increaseValue()'
                      value='Increase Value'
                    >
                      <i className='fa fa-plus' aria-hidden='true' />
                    </div>
                  </div>
                </div>
                <div className='d-flex mt-4 align-items-center'>
                  <p className='medium mb-0 mt-3 mr-3'>Color:</p>
                  <div className='d-flex align-items-center'>
                    <label className='radio-container'>
                      <input
                        type='radio'
                        defaultChecked='checked'
                        name='radio'
                      />
                      <span className='radio-checkmark' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark black-color' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark cyan-color' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark green-color' />
                    </label>
                    <label className='radio-container'>
                      <input type='radio' name='radio' />
                      <span className='radio-checkmark pur-color' />
                    </label>
                  </div>
                </div>
                <button className='site-btn w-100 py-2 medium text-capitalize mt-xl-5 mt-4'>
                  Add to Cart
                </button>
                <button
                  className='site-btn w-100 py-2 medium text-capitalize mt-3'
                  disabled
                >
                  Add to Wishlist
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

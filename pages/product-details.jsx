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
              <div className='col-12 mt-lg-5 mt-4'>
                <div className='row'>
                  <div className='col-xl-7 col-lg-8 col-12'>
                    <ul
                      className='nav product-tabs nav-tabs'
                      id='myTab'
                      role='tablist'
                    >
                      <li className='nav-item' role='presentation'>
                        <a
                          className='nav-link active'
                          id='home-tab'
                          data-toggle='tab'
                          href='#home'
                          role='tab'
                          aria-controls='home'
                          aria-selected='true'
                        >
                          Description
                        </a>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <a
                          className='nav-link'
                          id='profile-tab'
                          data-toggle='tab'
                          href='#profile'
                          role='tab'
                          aria-controls='profile'
                          aria-selected='false'
                        >
                          Delivery &amp; Shipping
                        </a>
                      </li>
                      <li className='nav-item' role='presentation'>
                        <a
                          className='nav-link'
                          id='contact-tab'
                          data-toggle='tab'
                          href='#contact'
                          role='tab'
                          aria-controls='contact'
                          aria-selected='false'
                        >
                          Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='tab-content' id='myTabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='home'
                    role='tabpanel'
                    aria-labelledby='home-tab'
                  >
                    <p className='my-2'>
                      This is a 100% Human Hair Extension clips. Silicon has
                      been bonded used to attach the hair giving the chance for
                      each weft to sustain more grams of hair than the usual
                      hair clips in the past so Seamless , light weight,
                      enabling the client to have very undetectable natural
                      results when wearing this type of Hair Extensions.
                    </p>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='profile'
                    role='tabpanel'
                    aria-labelledby='profile-tab'
                  >
                    <p className='my-2'>
                      This is a 100% Human Hair Extension clips. Silicon has
                      been bonded used to attach the hair giving the chance for
                      each weft to sustain more grams of hair than the usual
                      hair clips in the past so Seamless , light weight,
                      enabling the client to have very undetectable natural
                      results when wearing this type of Hair Extensions.
                    </p>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='contact'
                    role='tabpanel'
                    aria-labelledby='contact-tab'
                  >
                    <p className='my-2'>
                      This is a 100% Human Hair Extension clips. Silicon has
                      been bonded used to attach the hair giving the chance for
                      each weft to sustain more grams of hair than the usual
                      hair clips in the past so Seamless , light weight,
                      enabling the client to have very undetectable natural
                      results when wearing this type of Hair Extensions.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-12 mt-4'>
                <h5 className='bold'>You May Like</h5>
              </div>
              <div className='col-lg-3 col-sm-6 mt-3'>
                <div className='product-card'>
                  <img
                    src='images/hair-1.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='product-btns'>
                    <button className='product-btn'>
                      <svg
                        id='noun_cart_927424'
                        xmlns='http://www.w3.org/2000/svg'
                        width='26.067'
                        height='23.179'
                        viewBox='0 0 26.067 23.179'
                      >
                        <g
                          id='Group_4'
                          data-name='Group 4'
                          transform='translate(0 0)'
                        >
                          <path
                            id='Path_3'
                            data-name='Path 3'
                            d='M5.885,962.362a.869.869,0,0,0,0,1.739H8.656l2.988,14.1c.118.531.466.972.905.969H27.036a.869.869,0,1,0,0-1.738H13.255l-.371-1.739H28.195a.9.9,0,0,0,.842-.679l2.028-8.692a.909.909,0,0,0-.842-1.059H10.684l-.471-2.209a.9.9,0,0,0-.851-.688ZM11.046,967H29.128l-1.621,6.954H12.522Zm4.4,12.748a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,15.446,979.746Zm8.692,0a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,24.139,979.746Zm-8.692,1.738a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,15.446,981.485Zm8.692,0a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,24.139,981.485Z'
                            transform='translate(-5.016 -962.362)'
                            fill='#fff'
                          />
                        </g>
                      </svg>
                    </button>
                    <button className='product-btn light-btn'>
                      <i className='far fa-heart' />
                    </button>
                  </div>
                  <div className='text-center pb-2'>
                    <p className='p-lg mt-3 mb-1'>Product Name</p>
                    <p className='p-lg golden-text semi-bold'>£23.00</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6 mt-3'>
                <div className='product-card'>
                  <img
                    src='images/hair-2.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='product-btns'>
                    <button className='product-btn'>
                      <svg
                        id='noun_cart_927424'
                        xmlns='http://www.w3.org/2000/svg'
                        width='26.067'
                        height='23.179'
                        viewBox='0 0 26.067 23.179'
                      >
                        <g
                          id='Group_4'
                          data-name='Group 4'
                          transform='translate(0 0)'
                        >
                          <path
                            id='Path_3'
                            data-name='Path 3'
                            d='M5.885,962.362a.869.869,0,0,0,0,1.739H8.656l2.988,14.1c.118.531.466.972.905.969H27.036a.869.869,0,1,0,0-1.738H13.255l-.371-1.739H28.195a.9.9,0,0,0,.842-.679l2.028-8.692a.909.909,0,0,0-.842-1.059H10.684l-.471-2.209a.9.9,0,0,0-.851-.688ZM11.046,967H29.128l-1.621,6.954H12.522Zm4.4,12.748a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,15.446,979.746Zm8.692,0a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,24.139,979.746Zm-8.692,1.738a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,15.446,981.485Zm8.692,0a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,24.139,981.485Z'
                            transform='translate(-5.016 -962.362)'
                            fill='#fff'
                          />
                        </g>
                      </svg>
                    </button>
                    <button className='product-btn light-btn'>
                      <i className='far fa-heart' />
                    </button>
                  </div>
                  <div className='text-center pb-2'>
                    <p className='p-lg mt-3 mb-1'>Product Name</p>
                    <p className='p-lg golden-text semi-bold'>£23.00</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6 mt-3'>
                <div className='product-card'>
                  <img
                    src='images/hair-3.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='product-btns'>
                    <button className='product-btn'>
                      <svg
                        id='noun_cart_927424'
                        xmlns='http://www.w3.org/2000/svg'
                        width='26.067'
                        height='23.179'
                        viewBox='0 0 26.067 23.179'
                      >
                        <g
                          id='Group_4'
                          data-name='Group 4'
                          transform='translate(0 0)'
                        >
                          <path
                            id='Path_3'
                            data-name='Path 3'
                            d='M5.885,962.362a.869.869,0,0,0,0,1.739H8.656l2.988,14.1c.118.531.466.972.905.969H27.036a.869.869,0,1,0,0-1.738H13.255l-.371-1.739H28.195a.9.9,0,0,0,.842-.679l2.028-8.692a.909.909,0,0,0-.842-1.059H10.684l-.471-2.209a.9.9,0,0,0-.851-.688ZM11.046,967H29.128l-1.621,6.954H12.522Zm4.4,12.748a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,15.446,979.746Zm8.692,0a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,24.139,979.746Zm-8.692,1.738a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,15.446,981.485Zm8.692,0a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,24.139,981.485Z'
                            transform='translate(-5.016 -962.362)'
                            fill='#fff'
                          />
                        </g>
                      </svg>
                    </button>
                    <button className='product-btn light-btn'>
                      <i className='far fa-heart' />
                    </button>
                  </div>
                  <div className='text-center pb-2'>
                    <p className='p-lg mt-3 mb-1'>Product Name</p>
                    <p className='p-lg golden-text semi-bold'>£23.00</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-sm-6 mt-3'>
                <div className='product-card'>
                  <img
                    src='images/hair-4.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='product-btns'>
                    <button className='product-btn'>
                      <svg
                        id='noun_cart_927424'
                        xmlns='http://www.w3.org/2000/svg'
                        width='26.067'
                        height='23.179'
                        viewBox='0 0 26.067 23.179'
                      >
                        <g
                          id='Group_4'
                          data-name='Group 4'
                          transform='translate(0 0)'
                        >
                          <path
                            id='Path_3'
                            data-name='Path 3'
                            d='M5.885,962.362a.869.869,0,0,0,0,1.739H8.656l2.988,14.1c.118.531.466.972.905.969H27.036a.869.869,0,1,0,0-1.738H13.255l-.371-1.739H28.195a.9.9,0,0,0,.842-.679l2.028-8.692a.909.909,0,0,0-.842-1.059H10.684l-.471-2.209a.9.9,0,0,0-.851-.688ZM11.046,967H29.128l-1.621,6.954H12.522Zm4.4,12.748a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,15.446,979.746Zm8.692,0a2.9,2.9,0,1,0,2.9,2.9A2.911,2.911,0,0,0,24.139,979.746Zm-8.692,1.738a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,15.446,981.485Zm8.692,0a1.159,1.159,0,1,1-1.159,1.159A1.146,1.146,0,0,1,24.139,981.485Z'
                            transform='translate(-5.016 -962.362)'
                            fill='#fff'
                          />
                        </g>
                      </svg>
                    </button>
                    <button className='product-btn light-btn'>
                      <i className='far fa-heart' />
                    </button>
                  </div>
                  <div className='text-center pb-2'>
                    <p className='p-lg mt-3 mb-1'>Product Name</p>
                    <p className='p-lg golden-text semi-bold'>£23.00</p>
                  </div>
                </div>
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

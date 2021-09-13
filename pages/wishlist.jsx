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
                  src='images/cart-banner.png'
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
                <div className='col-12'>
                  <div className='row'>
                    <div className='col-12 mt-4'>
                      <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='bold mb-0'>Wishlist</h5>
                        <p className='p-lg mb-0'>2 items</p>
                      </div>
                      <hr className='grey-line' />
                    </div>
                    <div className='col-12 mt-3'>
                      <div className='table-responsive px-3'>
                        <table className='table shopping-cart-wrap m-0'>
                          <thead className>
                            <tr>
                              <th className='w-100'>Product Details</th>
                              <th className='pr-5'>Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='media w-230 align-items-center'>
                                  <img
                                    src='images/table-1.png'
                                    alt=''
                                    className='img-fluid'
                                  />
                                  <div className='media-body ml-2'>
                                    <p className='medium mb-0'>Product Name</p>
                                    <p className='mb-0'>Product Code: 12345</p>
                                  </div>
                                </div>
                              </td>
                              <td>$30.00</td>
                              <td>
                                <button className='site-btn px-4 py-2 medium text-capitalize'>
                                  Add to Cart
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className='media w-230 align-items-center'>
                                  <img
                                    src='images/table-2.png'
                                    alt=''
                                    className='img-fluid'
                                  />
                                  <div className='media-body ml-2'>
                                    <p className='medium mb-0'>Product Name</p>
                                    <p className='mb-0'>Product Code: 12345</p>
                                  </div>
                                </div>
                              </td>
                              <td>$30.00</td>
                              <td>
                                <button className='site-btn px-4 py-2 medium text-capitalize'>
                                  Add to Cart
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-12 mt-3'>
                  <a href='#_' className='pink-text medium'>
                    <i className='fas fa-arrow-left mr-2' />
                    Continue Shopping
                  </a>
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
      </div>
      <div className='overlay' />
    </div>
  );
};

import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

export default () => {
  const [showDropdown, setshowDropdown] = React.useState(false);
  return (
    <div>
      <Head title='Shop Hair' />

      <div className='wrapper'>
        <Navbar />

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-12 px-0'>
              <img
                src='images/shop-hair.png'
                alt=''
                className='img-fluid w-100'
              />
            </div>
          </div>
        </div>
        {/* banner ends here */}
        {/* shop-hair-collection ends here */}
        <section className='contact-us py-4 pb-lg-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h3 className='mt-0 mb-0'>
                  <span className='bold'>Shop </span> Hair
                </h3>
                <p className='p-lg mb-1 grey-text'>
                  A wide range of premium quality hair collection
                </p>
              </div>
            </div>
            <div className='row align-items-center mt-4'>
              <div className='col-lg-6 col-12'>
                <div className='d-flex align-items-center'>
                  <div className='dropdown filter-drop d-inline-block'>
                    <button
                      className='btn text-capitalize pr-5 site-btn dropdown-toggle'
                      type='button'
                      onClick={() => setshowDropdown(!showDropdown)}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='15.679'
                        height='15.679'
                        viewBox='0 0 15.679 15.679'
                      >
                        <path
                          id='Icon_awesome-filter'
                          data-name='Icon awesome-filter'
                          d='M14.943,0H.736a.736.736,0,0,0-.52,1.255L5.88,6.919v6.31a.735.735,0,0,0,.313.6l2.45,1.714a.735.735,0,0,0,1.156-.6V6.919l5.664-5.664A.736.736,0,0,0,14.943,0Z'
                          transform='translate(0)'
                          fill='#fff'
                        />
                      </svg>
                      Filter
                    </button>
                    <div
                      className={`dropdown-menu px-3  ${
                        showDropdown == true ? 'show' : ''
                      }`}
                      aria-labelledby='dropdownMenuButton'
                    >
                      <p className='p-lg bold'>Category</p>
                      <p className='mb-2'>
                        <input type='checkbox' id='c4' name='cb' />
                        <label htmlFor='c4' className='d-grey-text'>
                          <span className='ml-2'> All</span>
                        </label>
                      </p>
                      <p className='mb-2'>
                        <input type='checkbox' id='c5' name='cb' />
                        <label htmlFor='c5' className='d-grey-text'>
                          <span className='ml-2'> Pony Tails</span>
                        </label>
                      </p>
                      <p className='mb-2'>
                        <input type='checkbox' id='c6' name='cb' />
                        <label htmlFor='c6' className='d-grey-text'>
                          <span className='ml-2'> Lacy Wigs</span>
                        </label>
                      </p>
                      <p>
                        <input type='checkbox' id='c7' name='cb' />
                        <label htmlFor='c7' className='d-grey-text'>
                          <span className='ml-2'> Hair Extensions</span>
                        </label>
                      </p>
                      <p className='p-lg bold'>Type</p>
                      <p className='mb-2'>
                        <input type='checkbox' id='c2' name='cb' />
                        <label htmlFor='c2' className='d-grey-text'>
                          <span className='ml-2'> New Arrival</span>
                        </label>
                      </p>
                      <p>
                        <input type='checkbox' id='c3' name='cb' />
                        <label htmlFor='c3' className='d-grey-text'>
                          <span className='ml-2'> On Sale</span>
                        </label>
                      </p>
                      <p className='p-lg bold'>Filter by Price</p>
                      <input type='range' name id className='w-100' />
                      <button className='mt-4 px-5 py-2 site-btn grey-btn'>
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className='search-bar'>
                    <input type='text' className='py-2 pl-4 pr-3 w-100' />
                    <button className='transparent-btn'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='15.926'
                        height='15.929'
                        viewBox='0 0 15.926 15.929'
                      >
                        <path
                          id='Icon_awesome-search'
                          data-name='Icon awesome-search'
                          d='M15.709,13.771l-3.1-3.1a.746.746,0,0,0-.529-.218h-.507a6.467,6.467,0,1,0-1.12,1.12v.507a.746.746,0,0,0,.218.529l3.1,3.1a.744.744,0,0,0,1.055,0l.88-.88a.75.75,0,0,0,0-1.058ZM6.47,10.452A3.982,3.982,0,1,1,10.452,6.47,3.98,3.98,0,0,1,6.47,10.452Z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 d-none d-lg-block text-right'>
                <p className='p-lg mb-0'>Showing 12-24 out of 200</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-3 col-sm-6 mt-3'>
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-1.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-2.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-3.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-4.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-5.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-6.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-7.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-8.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-9.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-1.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-2.png'
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
                <div
                  className='product-card'
                  onClick={() => (location.href = 'product-details')}
                >
                  <img
                    src='images/shop-hair-3.png'
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
            <div className='row'>
              <div className='col-12 mt-4'>
                <nav aria-label='Page navigation example'>
                  <ul className='pagination'>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        &lt;
                      </a>
                    </li>
                    <li className='page-item active'>
                      <a className='page-link' href='#'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#'>
                        &gt;
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* shop-hair-collection ends here */}
        {/*?php include('site-footer.php') ?*/}
      </div>
      <div className='overlay' />
    </div>
  );
};

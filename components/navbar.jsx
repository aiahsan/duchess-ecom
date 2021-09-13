import React from 'react';

export default () => {
  return (
    <>
      <div>
        {/* Sidebar  */}
        <nav id='sidebar'>
          <div id='dismiss' className='shadow-sm'>
            <i className='fas fa-times' />
          </div>
          <div className='sidebar-header show'>
            <a href='/'>
              <img src='images/logo.png' alt='' />
            </a>
          </div>
          <hr />
          <ul className='list-unstyled components'>
            <li className='medium '>
              <a className='black-text' href='/'>
                Home
              </a>
            </li>
            <li className='medium '>
              <a href='shop-hair'>Shop Hair</a>
            </li>
            <li className='medium '>
              <a href='hair-accessories'>Accessories</a>
            </li>
            <li className='medium '>
              <a href='hair-tools'>Hair Tools</a>
            </li>
            <li className='medium '>
              <a href='about'>About</a>
            </li>
            <li className='medium '>
              <a href='blogs'>Hair Blog</a>
            </li>
            <li className='medium '>
              <a href='contact-us'>Help</a>
            </li>
            <li className='medium '>
              <a href='faq'>FAQ</a>
            </li>
          </ul>
          <ul className='list-unstyled CTAs'></ul>
        </nav>
        {/* Page Content  */}
        <div id='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 px-0 mx-auto'>
                <nav className='navbar navbar-expand-lg navbar-light'>
                  <a href=''>
                    <img
                      src='images/logo.png'
                      alt=''
                      className='img-fluid logo-img ml-3 ml-sm-0'
                    />
                  </a>
                  <div className='d-flex align-items-center d-lg-none'>
                    <a className='mx-2' href='#_'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='21.717'
                        height='19.311'
                        viewBox='0 0 21.717 19.311'
                      >
                        <g id='noun_cart_927424' transform='translate(0 0)'>
                          <g
                            id='Group_4'
                            data-name='Group 4'
                            transform='translate(0 0)'
                          >
                            <path
                              id='Path_3'
                              data-name='Path 3'
                              d='M5.74,962.362a.724.724,0,0,0,0,1.448H8.048l2.489,11.745c.1.442.388.81.754.807H23.361a.724.724,0,1,0,0-1.448H11.88l-.309-1.448H24.327a.747.747,0,0,0,.7-.566l1.69-7.241a.758.758,0,0,0-.7-.883H9.738l-.392-1.841a.747.747,0,0,0-.709-.573Zm4.3,3.862H25.1l-1.35,5.793H11.269Zm3.666,10.621a2.414,2.414,0,1,0,2.414,2.414A2.425,2.425,0,0,0,13.706,976.845Zm7.241,0a2.414,2.414,0,1,0,2.414,2.414A2.425,2.425,0,0,0,20.947,976.845Zm-7.241,1.448a.966.966,0,1,1-.966.966A.955.955,0,0,1,13.706,978.293Zm7.241,0a.966.966,0,1,1-.966.966A.955.955,0,0,1,20.947,978.293Z'
                              transform='translate(-5.016 -962.362)'
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                    <a className='mx-2' href='#_'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20.432'
                        height='18.012'
                        viewBox='0 0 20.432 18.012'
                      >
                        <path
                          id='Icon_feather-heart'
                          data-name='Icon feather-heart'
                          d='M19.795,5.957a4.981,4.981,0,0,0-7.046,0l-.96.96-.96-.96A4.982,4.982,0,1,0,3.782,13l.96.96,7.046,7.046,7.046-7.046.96-.96a4.981,4.981,0,0,0,0-7.046Z'
                          transform='translate(-1.573 -3.747)'
                          fill='none'
                          stroke='#000'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='1.5'
                        />
                      </svg>
                    </a>
                    <button
                      type='button'
                      id='sidebarCollapse'
                      className='transparent-btn ml-2 d-inline-block d-lg-none mr-3 mr-sm-0'
                    >
                      <i className='fas fa-align-justify' />
                    </button>
                  </div>
                  {/* <button class="btn btn-dark d-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fas fa-align-justify"></i>
                        </button> */}
                  <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'
                  >
                    <ul className='nav align-items-center navbar-nav ml-auto'>
                      <li className='medium mr-xl-3 mr-2'>
                        <a href='/'>Home</a>
                      </li>
                      <li className='medium mx-xl-3 mx-2'>
                        <a href='/shop-hair'>Shop Hair</a>
                      </li>
                      <li className='mx-xl-3 mx-2 p-0 medium'>
                        <a href='hair-accessories'>Accessories</a>
                      </li>
                      <li className='mx-xl-3 mx-2 p-0 medium'>
                        <a href='hair-tools'>Hair Tools</a>
                      </li>
                      <li className='mx-xl-3 mx-2 p-0 medium  '>
                        <a href='about'>About</a>
                      </li>
                      <li className='mx-xl-3 mx-2 p-0 medium '>
                        <a href='blogs'>Hair Blog</a>
                      </li>
                      <li className='mx-xl-3 mx-2 p-0 medium '>
                        <a href='contact-us'>Help</a>
                      </li>
                      <li className='mx-xl-3 mx-2 p-0 medium '>
                        <a href='faq'>FAQ</a>
                      </li>
                      <li className='mx-2 mt-2 p-0 medium  '>
                        <a href=''>
                          <svg
                            id='noun_Search_3612564'
                            xmlns='http://www.w3.org/2000/svg'
                            width='19.395'
                            height='19.388'
                            viewBox='0 0 19.395 19.388'
                          >
                            <path
                              id='Path_4'
                              data-name='Path 4'
                              d='M42.26,41.318l-4.751-4.747a8.167,8.167,0,1,0-1.139,1.135l4.747,4.747a.805.805,0,0,0,1.143-1.135Zm-4.517-9.894a6.516,6.516,0,1,1-6.516-6.516A6.523,6.523,0,0,1,37.743,31.423Z'
                              transform='translate(-23.1 -23.3)'
                            />
                          </svg>
                        </a>
                      </li>
                      <li className='mx-2 mt-2 p-0 medium  '>
                        <a href='profile'>
                          <svg
                            id='noun_User_856030'
                            xmlns='http://www.w3.org/2000/svg'
                            width='17.903'
                            height='19.311'
                            viewBox='0 0 17.903 19.311'
                          >
                            <path
                              id='Path_5'
                              data-name='Path 5'
                              d='M134.752,9.5A4.752,4.752,0,1,0,130,4.752,4.752,4.752,0,0,0,134.752,9.5Zm0-8.089a3.336,3.336,0,1,1-3.336,3.336,3.336,3.336,0,0,1,3.336-3.336Z'
                              transform='translate(-125.801 0)'
                            />
                            <path
                              id='Path_6'
                              data-name='Path 6'
                              d='M20.077,283.615a7.534,7.534,0,0,1,15.068,0h1.417a8.952,8.952,0,0,0-17.9,0Z'
                              transform='translate(-18.659 -264.304)'
                            />
                          </svg>
                        </a>
                      </li>
                      <li className='mx-2 mt-2 p-0 medium  '>
                        <a href='cart'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='21.717'
                            height='19.311'
                            viewBox='0 0 21.717 19.311'
                          >
                            <g id='noun_cart_927424' transform='translate(0 0)'>
                              <g
                                id='Group_4'
                                data-name='Group 4'
                                transform='translate(0 0)'
                              >
                                <path
                                  id='Path_3'
                                  data-name='Path 3'
                                  d='M5.74,962.362a.724.724,0,0,0,0,1.448H8.048l2.489,11.745c.1.442.388.81.754.807H23.361a.724.724,0,1,0,0-1.448H11.88l-.309-1.448H24.327a.747.747,0,0,0,.7-.566l1.69-7.241a.758.758,0,0,0-.7-.883H9.738l-.392-1.841a.747.747,0,0,0-.709-.573Zm4.3,3.862H25.1l-1.35,5.793H11.269Zm3.666,10.621a2.414,2.414,0,1,0,2.414,2.414A2.425,2.425,0,0,0,13.706,976.845Zm7.241,0a2.414,2.414,0,1,0,2.414,2.414A2.425,2.425,0,0,0,20.947,976.845Zm-7.241,1.448a.966.966,0,1,1-.966.966A.955.955,0,0,1,13.706,978.293Zm7.241,0a.966.966,0,1,1-.966.966A.955.955,0,0,1,20.947,978.293Z'
                                  transform='translate(-5.016 -962.362)'
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </li>
                      <li className='mx-2 mt-2 p-0 medium  '>
                        <a href='wishlist'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='20.432'
                            height='18.012'
                            viewBox='0 0 20.432 18.012'
                          >
                            <path
                              id='Icon_feather-heart'
                              data-name='Icon feather-heart'
                              d='M19.795,5.957a4.981,4.981,0,0,0-7.046,0l-.96.96-.96-.96A4.982,4.982,0,1,0,3.782,13l.96.96,7.046,7.046,7.046-7.046.96-.96a4.981,4.981,0,0,0,0-7.046Z'
                              transform='translate(-1.573 -3.747)'
                              fill='none'
                              stroke='#000'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth='1.5'
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

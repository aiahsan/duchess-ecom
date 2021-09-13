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
                <img src='images/faq.png' alt='' className='img-fluid w-100' />
              </div>
            </div>
          </div>
          {/* banner ends here */}
          {/* hair-collection ends here */}
          <section className='contact-us py-4 pb-lg-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3'>
                  <ul className='side-links'>
                    <li>
                      <a href='profile'>My Profile</a>
                    </li>
                    <li className='active'>
                      <a href='orders'>Orders</a>
                    </li>
                    <li>
                      <a href='change-password'>Change Password</a>
                    </li>
                    <li>
                      <a href='login'>Log Out</a>
                    </li>
                  </ul>
                </div>
                <div className='col-lg-9'>
                  <h5 className='bold mt-0'>My Orders</h5>
                  <div className='table-responsive px-3'>
                    <table className='table text-center shopping-cart-wrap m-0'>
                      <thead className>
                        <tr>
                          <th scope='col' width={200}>
                            Order ID
                          </th>
                          <th scope='col' width={200} className>
                            Order Placed Date
                          </th>
                          <th scope='col' width={200} className>
                            Order Delivered Date
                          </th>
                          <th scope='col' width={120}>
                            Status
                          </th>
                          <th scope='col' width={200} className>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>123</td>
                          <td>23-04-2021</td>
                          <td>26-04-2021</td>
                          <td className='green-text'>Delivered</td>
                          <td>
                            <button className='site-btn px-4 py-2'>Hide</button>
                          </td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td>23-04-2021</td>
                          <td>-</td>
                          <td className='yellow-text'>Pending</td>
                          <td>
                            <button className='site-btn px-4 py-2'>Hide</button>
                          </td>
                        </tr>
                        <tr>
                          <td>123</td>
                          <td>23-04-2021</td>
                          <td>-</td>
                          <td className='red-text'>Cancelled</td>
                          <td>
                            <button className='site-btn px-4 py-2'>Hide</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='table-responsive details-table px-3'>
                    <table className='table shopping-cart-wrap m-0'>
                      <thead className>
                        <tr>
                          <th scope='col' width={400}>
                            Product Details
                          </th>
                          <th scope='col' width={200}>
                            Quantity
                          </th>
                          <th scope='col' width={200}>
                            Price
                          </th>
                          <th scope='col' width={120}>
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className='media'>
                              <img
                                src='images/table-1.png'
                                alt=''
                                className='img-fluid'
                              />
                              <div className='media-body ml-2'>
                                <p className='mb-0'>Product Name</p>
                                <p className='mb-0'>Product Code: 12345</p>
                              </div>
                            </div>
                          </td>
                          <td>2</td>
                          <td>$30.00</td>
                          <td>$60.00</td>
                        </tr>
                        <tr>
                          <td>
                            <div className='media'>
                              <img
                                src='images/table-2.png'
                                alt=''
                                className='img-fluid'
                              />
                              <div className='media-body ml-2'>
                                <p className='mb-0'>Product Name</p>
                                <p className='mb-0'>Product Code: 54321</p>
                              </div>
                            </div>
                          </td>
                          <td>1</td>
                          <td>$20.00</td>
                          <td>$20.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className='price-bg p-3'>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='mb-1 semi-bold'>Shipping Fee</p>
                      <p className='mb-1 semi-bold'>$10.0</p>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='mb-1 semi-bold'>Sub Total</p>
                      <p className='mb-1 semi-bold'>$90.0</p>
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

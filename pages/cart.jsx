import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  addItemToWishlist,
  removeItemFromWishlist,
  increaseQuantity,
  reduceQuantity,
  addCoupon,
  removeCoupon
} from '../redux/actionMethodes/cart';
import { repository } from '../utiles/repository';
import TopComp from '../components/topComp';
import { IoCafeOutline, IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import Coupon from '../components/coupon';
export default () => {
  const wishlist = useSelector((x) => x.Wishlist);
  const cart = useSelector((x) => x.Cart);
   const dispatch = useDispatch();

  const [showComponent, setshowComponent] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [shippingFee, setshippingFee] = React.useState(0);
  const [message, setmessage] = React.useState('');
  const [products, setproducts] = React.useState([]);
  const setcoupon=(data)=>{
    dispatch(addCoupon(data))
  }
  React.useEffect(() => {
    setshowanimation(true);
    setshowComponent(true);
    try {
      (async () => {
        const { data, status } = await repository.cart().then((x) => x);
        if (status == 200) {
          setproducts(
            data.data.products.map((x) => {
              return {
                ...x,
                id: x._id,
              };
            })
          );
          setshippingFee(data.data.shippingFee);
          setshowanimation(false);
        } else {
          setshowanimation(false);
        }
      })();
    } catch (e) {
      setshowanimation(false);
    }
  }, []);
  return (
    <div>
      <TopComp
        showmessage={showmessage}
        setshowmessage={setshowmessage}
        message={message}
        showanimation={showanimation}
      />
      <Head title='Shop Hair' />
      {showComponent == true ? (
        <>
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
                    <div className='col-lg-8'>
                      <div className='row'>
                        <div className='col-12 mt-4'>
                          <div className='d-flex justify-content-between align-items-center'>
                            <h5 className='bold mb-0'>Shopping Cart</h5>
                            <p className='p-lg mb-0'>
                              {cart.items.length} items
                            </p>
                          </div>
                          <hr className='grey-line' />
                        </div>
                        <div className='col-12 mt-3'>
                          <div className='table-responsive px-3'>
                            <table className='table shopping-cart-wrap m-0'>
                              <thead className>
                                <tr>
                                  <th>Product Details</th>
                                  <th>Quantity</th>
                                  <th>Price</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cart.items.map((x, i) => (
                                  <tr key={i}>
                                    <td>
                                      <div className='media w-230 align-items-center'>
                                        <img
                                          src={
                                            x.images && x.images[0]
                                              ? x.images[0]
                                              : ''
                                          }
                                          alt=''
                                          className='img-fluid'
                                        />
                                        <div className='media-body ml-2'>
                                          <p className='medium mb-0'>
                                            {x.name ? x.name : ''}
                                          </p>
                                          <p className='mb-0'>
                                            Description:{' '}
                                            {x.description ? x.description : ''}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div className='plus-minus-div mb-0'>
                                        <div
                                          className='value-button'
                                          id='decrease'
                                          onClick={() => {
                                            dispatch(reduceQuantity(x));
                                          }}
                                          value='Decrease Value'
                                        >
                                          <i
                                            className='fa fa-minus'
                                            aria-hidden='true'
                                          />
                                        </div>
                                        <input
                                          type='number'
                                          id='number'
                                          value={x.quantity ? x.quantity : 0}
                                        />
                                        <div
                                          className='value-button value-button-2'
                                          id='increase'
                                          onClick={() => {
                                            dispatch(increaseQuantity(x));
                                          }}
                                          value='Increase Value'
                                        >
                                          <i
                                            className='fa fa-plus'
                                            aria-hidden='true'
                                          />
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      £{' '}
                                      {x.discountPer && x.discountPer > 0 ? (
                                        <>
                                          <del>
                                            {x.price ? x.price : 'Out Of Stock'}
                                          </del>{' '}
                                          <span>
                                            {x.price
                                              ? x.price *
                                                (1 -
                                                  (x.discountPer
                                                    ? x.discountPer / 100
                                                    : 0))
                                              : 0}
                                          </span>
                                        </>
                                      ) : x.price ? (
                                        x.price
                                      ) : (
                                        'Out Of Stock'
                                      )}
                                    </td>
                                    <td>
                                      £{' '}
                                      {x.discountPer && x.discountPer > 0 ? (
                                        <>
                                          <span>
                                            {x.price
                                              ? x.price *
                                                (1 -
                                                  (x.discountPer
                                                    ? x.discountPer / 100
                                                    : 0)) *
                                                x.quantity
                                              : 0}
                                          </span>
                                        </>
                                      ) : x.price ? (
                                        x.price * x.quantity
                                      ) : (
                                        'Out Of Stock'
                                      )}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className='col-12 mt-3'>
                          <a href='#_' className='pink-text medium'>
                            <i className='fas fa-arrow-left mr-2' />
                            Continue Shopping
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-4'>
                      <div className='side-links'>
                        <h5 className='bold mb-0'>Order Summary</h5>
                        <hr className='grey-line' />
                        <label htmlFor className='mt-2'>
                          Promo Code
                        </label>
                        <Coupon
                          setshowmessage={setshowmessage}
                          setmessage={setmessage}
                          setshowanimation={setshowanimation}
                          setcoupon={setcoupon}
                        />
                        <div className='d-flex mt-4 align-items-center justify-content-between'>
                          <p>Shipping Fee</p>
                          <p>${shippingFee}</p>
                        </div>
                        {cart.coupon && cart.coupon.couponDiscount ? (
                          <>
                            {' '}
                            <div className='d-flex mt-4 align-items-center justify-content-between'>
                              <p>Total Discount</p>
                              <p>{cart.coupon.couponDiscount}%</p>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        <div className='d-flex align-items-center justify-content-between'>
                          <p className='semi-bold'>Total Cost</p>
                          <p className='semi-bold'>
                            ${cart.totalCost + shippingFee}
                          </p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                          <p className='semi-bold'>Sub Total Cost</p>
                          <p className='semi-bold'>
                            $
                            {cart.coupon && cart.coupon.couponDiscount
                              ? cart.totalCost *
                                  (1 -
                                    (cart.coupon.couponDiscount
                                      ? cart.coupon.couponDiscount / 100
                                      : 0)) +
                                shippingFee
                              : cart.totalCost + shippingFee}
                          </p>
                        </div>
                        <button
                          onClick={() => (location.href = 'checkout')}
                          className='w-100 mt-2 py-2 site-btn medium text-capitalize'
                        >
                          Checkout
                        </button>
                      </div>
                    </div>
                    <div className='col-12 mt-4'>
                      <h5 className='bold'>You May Like</h5>
                    </div>
                    {products.map((x, i) => (
                      <div key={i} className='col-lg-3 col-sm-6 mt-3'>
                        <div className='product-card'>
                          <img
                            src={x.images && x.images[0] ? x.images[0] : ''}
                            alt=''
                            className='img-fluid w-100'
                          />
                          <div className='product-btns'>
                            <button
                              onClick={() => {
                                if (
                                  cart.items.find((y) => y.id == x.id) !==
                                  undefined
                                ) {
                                  dispatch(removeItemFromCart(x));
                                } else {
                                  dispatch(addItemToCart(x));
                                }
                              }}
                              className='product-btn'
                            >
                              {cart.items.find((y) => y.id == x.id) !==
                              undefined ? (
                                <IoCartSharp fontSize={30} />
                              ) : (
                                <IoCartOutline fontSize={30} />
                              )}
                            </button>
                            <button
                              onClick={() => {
                                if (
                                  wishlist.items.find((y) => y.id == x.id) !==
                                  undefined
                                ) {
                                  dispatch(removeItemFromWishlist(x));
                                } else {
                                  dispatch(addItemToWishlist(x));
                                }
                              }}
                              className='product-btn light-btn'
                            >
                              {wishlist.items.find((y) => y.id == x.id) !==
                              undefined ? (
                                <BsSuitHeartFill fontSize={30} />
                              ) : (
                                <BsSuitHeart fontSize={30} />
                              )}
                            </button>
                          </div>
                          <div
                            onClick={() => (location.href = 'product-details')}
                            className='text-center pb-2 crs-pnt'
                          >
                            <p className='p-lg mt-3 mb-1'>
                              {x.name ? x.name : ''}
                            </p>
                            <p className='p-lg golden-text semi-bold'>
                              £{' '}
                              {x.discountPer && x.discountPer > 0 ? (
                                <>
                                  <del>
                                    {x.price ? x.price : 'Out Of Stock'}
                                  </del>{' '}
                                  <span>
                                    {x.price
                                      ? x.price *
                                        (1 -
                                          (x.discountPer
                                            ? x.discountPer / 100
                                            : 0))
                                      : 0}
                                  </span>
                                </>
                              ) : x.price ? (
                                x.price
                              ) : (
                                'Out Of Stock'
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              {/* hair-collection ends here */}
            </div>
          </div>
          <div className='overlay' />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

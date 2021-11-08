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
  removeCoupon,
  emptyCart,
} from '../redux/actionMethodes/cart';
import {saveToken} from '../redux/actionMethodes/User'
import jwt_decode from "jwt-decode";
import { repository } from '../utiles/repository';
import TopComp from '../components/topComp';
import { IoCafeOutline, IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import Coupon from '../components/coupon';
import FillOrderForm from '../components/fillorderform'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required('Required').email(),
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  companyName: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  street: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  appartment: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  passcode: Yup.string().required('Required'),

  });
export default () => {
  const wishlist = useSelector((x) => x.Wishlist);
  const cart = useSelector((x) => x.Cart);
   const dispatch = useDispatch();
  const token=useSelector(x=>x.Tokken);
  const [showComponent, setshowComponent] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [shippingFee, setshippingFee] = React.useState(0);
  const [message, setmessage] = React.useState('');
  const [products, setproducts] = React.useState([]);
  const [user,setuser]=React.useState(null);
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
  React.useEffect(()=>{
    if(token)
    {
      var decoded = jwt_decode(token);
      setuser(decoded);
      console.log(decoded,token);
    }
  },[])

  const postData=async (dataget)=>{
     setshowanimation(true);
     if(cart.items.length>0)
     {
      const newData={...dataget};
      if(user!=null)
      {
        newData.isUser=true;
        newData.requestUser=user;
      }
      else{
       newData.isUser=false;
       newData.requestUser=null;
      }
      newData.totalPrice=cart.totalCost + shippingFee
      newData.subTotalPrice=cart.coupon && cart.coupon.couponDiscount
      ? cart.totalCost *
          (1 -
            (cart.coupon.couponDiscount
              ? cart.coupon.couponDiscount / 100
              : 0)) +
        shippingFee
      : cart.totalCost + shippingFee;
      
      newData.discountPer=cart.coupon!=null && cart.coupon.couponDiscount?cart.coupon.couponDiscount:0
      newData.shippingFee=shippingFee
      newData.orderItems=cart.items;
      console.log(newData)
      
 
     const { data, status } = await repository.order(newData).then((x) => x);
     if (status == 200) {
       console.log(data)
       setmessage(data.message); 
       if(data.data.token&&data.data.token!=null)
       {
          dispatch(saveToken(data.data.token));
       }
       dispatch(emptyCart())
       setshowmessage(true);
       setshowanimation(false);
     } else {
       setmessage(
         data && data.message ? data.message : 'Opps something went wrong'
       );
       setshowmessage(true);
       setshowanimation(false);
     }
     }
     else
     {
      setmessage("Cart is empty");
      setshowmessage(true);
      setshowanimation(false);
     }
    
   }
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
        <Formik
        initialValues={{
          firstName: user!=null&&user.firstName?user.firstName:"",
          lastName: user!=null&&user.lastName?user.lastName:"",
          companyName: user!=null&&user.companyName?user.companyName:"",
          country: user!=null&&user.country?user.country:"",
          street: user!=null&&user.street?user.street:"",
          city:user!=null&&user.city?user.city:"",
          appartment: user!=null&&user.appartment?user.appartment:"",
          passcode: user!=null&&user.passcode?user.passcode:"",
          phone: user!=null&&user.phone?user.phone:"",
          email: user!=null&&user.email?user.email:"",
          instructions: '',
        }}
        validationSchema={DisplayingErrorMessagesSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await postData(values);
        }}
      >
        {({ errors, touched, getFieldProps, handleSubmit }) => {
          // cstErrors = errors;

          return (
            <Form>
        <div>
          {/* banner starts here */}
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 px-0'>
                <img
                  src='images/checkout-banner.png'
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
                <div className='col-12 text-center mt-4'>
                  <h3 className='bold mb-0'>Checkout</h3>
                  <p className='p-lg'>You are just few steps away!</p>
                </div>
                <div className='col-lg-7'>
                    <div className="row">
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        First Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='John'
                        className='login-input w-100 py-2'
                     {...getFieldProps('firstName')}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className='erorr'>{errors.firstName}</div>
                  )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Last Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Doe'
                        className='login-input w-100 py-2'
                        {...getFieldProps('lastName')}
                        />
                        {touched.lastName && errors.lastName && (
                          <div className='erorr'>{errors.lastName}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Company Name <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='John'
                        className='login-input w-100 py-2'
                        {...getFieldProps('companyName')}
                        />
                        {touched.companyName && errors.companyName && (
                          <div className='erorr'>{errors.companyName}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Country Region <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='United Kingdom'
                        className='login-input w-100 py-2'
                        {...getFieldProps('country')}
                        />
                        {touched.country && errors.country && (
                          <div className='erorr'>{errors.country}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Street Address <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='House Nmber & Street Number'
                        className='login-input w-100 py-2'
                        {...getFieldProps('street')}
                        />
                        {touched.street && errors.street && (
                          <div className='erorr'>{errors.street}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Apartment Info <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Apartment/Suit/Unit'
                        className='login-input w-100 py-2'
                        {...getFieldProps('appartment')}
                        />
                        {touched.appartment && errors.appartment && (
                          <div className='erorr'>{errors.appartment}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Town/City <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'     
                        placeholder='Manchester'
                        className='login-input w-100 py-2'
                        {...getFieldProps('city')}
                        />
                        {touched.city && errors.city && (
                          <div className='erorr'>{errors.city}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Passcode <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='number'
                        placeholder={123}
                        className='login-input w-100 py-2'
                        {...getFieldProps('passcode')}
                        />
                        {touched.passcode && errors.passcode && (
                          <div className='erorr'>{errors.passcode}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Phone <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='number'
                        placeholder={123456789}
                        className='login-input w-100 py-2'
                        {...getFieldProps('phone')}
                        />
                        {touched.phone && errors.phone && (
                          <div className='erorr'>{errors.phone}</div>
                        )}
                    </div>
                    <div className='col-md-6 mt-3'>
                      <label htmlFor className='medium'>
                        Email Address <span className='pink-text'>*</span>
                      </label>
                      <input
                        type='text'
                        readOnly={user!=null&&user.email?true:false}
                        placeholder='johndoe@gmail.com'
                        className='login-input w-100 py-2'
                        {...getFieldProps('email')}
                        />
                        {touched.email && errors.email && (
                          <div className='erorr'>{errors.email}</div>
                        )}
                    </div>
                    <div className='col-12 mt-4'>
                      <h6 className='semi-bold'>Additional Notes</h6>
                    </div>
                    <div className='col-12 mt-4'>
                      <label htmlFor className='medium'>
                        Order Notes
                      </label>
                      <input
                        type='text'
                        placeholder='e.g Special Notes for delivery'
                        className='login-input w-100 py-2'
                        {...getFieldProps('instructions')}
                        />
                        {touched.instructions && errors.instructions && (
                          <div className='erorr'>{errors.instructions}</div>
                        )}
                    </div>
                    </div>
                </div>
                <div className='col-lg-5'>
                  <div className='side-links'>
                   {token==null? <p className='p-sm'>
                      Returning customer?{' '}
                      <a href='login.php' className='pink-text semi-bold'>
                        Click here to login
                      </a>
                    </p>:<></>}
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
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='semi-bold'>Product</p>
                      <p className='semi-bold'>Sub Total</p>
                    </div>
                    {cart.items.map((x, i) => (
                      <div key={i} className='d-flex align-items-center justify-content-between'>
                      <p className='mb-2'>   {x.name ? x.name : ''} x{x.quantity ? x.quantity : 0}</p>
                      <p className='mb-2'> £{' '}
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
                                      )}</p>
                    </div>
                              
                    ))}
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
                    <p className='p-sm mb-2'>
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our privacy policy.
                    </p>
                    <button
                      // onClick={() => (location.href = 'order-placed')}
                      type="submit"
                      className='w-100 mt-3 py-2 site-btn'
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
        </div>
        
        </Form>

        );
      }}
    </Formik>


      </div>
      <div className='overlay' />
      </>
      ) : (
        <></>
      )}
    
    
    </div>
  );
};

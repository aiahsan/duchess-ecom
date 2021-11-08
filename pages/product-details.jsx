import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  addItemToWishlist,
  removeItemFromWishlist,
  increaseQuantity,
  reduceQuantity,
} from '../redux/actionMethodes/cart';
import { repository } from '../utiles/repository';
import TopComp from '../components/topComp';
import { IoCafeOutline, IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
export default () => {
  const wishlist = useSelector((x) => x.Wishlist);
  const cart = useSelector((x) => x.Cart);

  const dispatch = useDispatch();
  const [value,setvalue]=React.useState(1)
  const [showComponent, setshowComponent] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const [products, setproducts] = React.useState([]);
  const [product, setproduct] = React.useState();
  const [activeTab,setActiveTab]=React.useState(0);
  React.useEffect(() => {
    
    const encrypt=atob(location.search.substring(1));
     console.log(encrypt,"sss")
    const parsed = queryString.parse(encrypt);
    setshowanimation(true);
    setshowComponent(true);
    try {
      (async () => {
        if (parsed.name) {
          const { data, status } = await repository
            .getproductbyname(parsed.name)
            .then((x) => x);
          if (status == 200) {
            setproducts(data.data.products);
            setproduct(data.data.product);

            setshowanimation(false);
          } else {
            setshowanimation(false);
          }
        }
        else
        {
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
            {/* hair-collection ends here */}
            <section className='contact-us py-lg-5 py-4'>
              <div className='container'>
                <div className='row'>
                  {product ? (
                    <>
                      <div className='col-lg-6 mt-3'>
                        <img
                          src={product&&product.images&&product.images[0]?product.images[0]:""}
                          alt=''
                          className='img-fluid w-100'
                        />
                        <div className='row mt-3'>
                        {product&&product.images?product.images.slice(1).map((x,i)=><div key={i} className='col-4'>
                            <img
                              src={x}
                              alt=''
                              className='img-fluid w-100'
                            />
                          </div>):<></>}
                          
                       
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
                            <li
                              className='breadcrumb-item active'
                              aria-current='page'
                            >
                             {product&&product.name?product.name:""}
                            </li>
                          </ol>
                        </nav>
                        <h5 className='bold'> {product&&product.name?product.name:""}</h5>
                        <h6 className='bold'>
                         {product.discountPer>0?<> <del>£{product&&product.price?product.price:""}</del> 
                          <span className='golden-text'>£  {product&&product.price
                                              ? product.price *
                                                (1 -
                                                  (product.discountPer
                                                    ? product.discountPer / 100
                                                    : 0))
                                              : 0}</span></>
                     : <span className='golden-text'>${product&&product.price?product.price:""}</span>}
                            </h6>
                        <p className='grey-text mt-4 mb-2'>
                          Categories: {product&&product.category&&product.category.name?product.category.name:""}
                        </p>
                        <p className='grey-text mb-2'>Fabric: {product&&product.fabric?product.fabric.map((x,i)=><span key={i} className="mr-1">{x} ,</span>):""}</p>
                        <p className='grey-text mb-2'>Delivery  {product&&product.deliveryTime?product.deliveryTime:""}</p>
                        <p className='grey-text'>Care: {product&&product.care?product.care:""}</p>
                        <div className='d-flex mt-4 align-items-center'>
                          <p className='medium mb-0 mr-3'>Quantity:</p>
                          <div className='plus-minus-div mb-0'>
                            <div
                              className='value-button'
                              id='decrease'
                              onClick={()=>value>1?setvalue(value-1):console.log()}
                              value='Decrease Value'
                            >
                              <i className='fa fa-minus' aria-hidden='true' />
                            </div>
                            <input type='number' id='number' value={value} />
                            <div
                              className='value-button value-button-2'
                              id='increase'
                              onClick={()=>setvalue(value+1)}
                              value='Increase Value'
                            >
                              <i className='fa fa-plus' aria-hidden='true' />
                            </div>
                          </div>
                        </div>
                        <div className='d-flex mt-4 align-items-center'>
                          <p className='medium mb-0 mt-3 mr-3'>Color:</p>
                          <div className='d-flex align-items-center'>
                          {product&&product.colors?product.colors.map((x,i)=> <label className='radio-container'>
                              <input
                                type='radio'
                                defaultChecked='checked'
                                name='radio'
                              />
                              <span className='radio-checkmark' style={{backgroundColor:x}}/>
                            </label>):""}                        
                          </div>
                        </div>
                        <button onClick={()=>dispatch(addItemToCart({
                          ...product,
                          quantity:value
                        }))} className='site-btn w-100 py-2 medium text-capitalize mt-xl-5 mt-4'>
                          Add to Cart
                        </button>
                        <button
                        onClick={()=>dispatch(addItemToWishlist({
                          ...product
                        }))}
                          className='site-btn w-100 py-2 medium text-capitalize mt-3'
                           
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
                                  className={`nav-link ${activeTab==0?"active":""}`}
                                  id='home-tab'
                                  data-toggle='tab'
                                  onClick={()=>setActiveTab(0)}
                                  role='tab'
                                  aria-controls='home'
                                  aria-selected='true'
                                >
                                  Description
                                </a>
                              </li>
                              <li className='nav-item' role='presentation'>
                                <a
                                  className={`nav-link ${activeTab==1?"active":""}`}
                                  id='profile-tab'
                                  data-toggle='tab'
                                  onClick={()=>setActiveTab(1)}
                                  role='tab'
                                  aria-controls='profile'
                                  aria-selected='false'
                                >
                                  Delivery &amp; Shipping
                                </a>
                              </li>
                              <li className='nav-item' role='presentation'>
                                <a
                                  className={`nav-link ${activeTab==2?"active":""}`}
                                  id='contact-tab'
                                  data-toggle='tab'
                                  onClick={()=>setActiveTab(2)}
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
                          {
                            activeTab==0?  <div
                            className='tab-pane fade show active'
                           
                            role='tabpanel'
                            aria-labelledby='home-tab'
                          >
                            <p className='my-2'>
                              {product.description?product.description:""}
                            </p>
                          </div>:activeTab==1?  <div
                            className='tab-pane fade show active'
                           
                            role='tabpanel'
                            aria-labelledby='home-tab'
                          >
                            <p className='my-2'>
                              {product.deliveryandShipping?product.deliveryandShipping:""}
                            </p>
                          </div>:  <div
                            className='tab-pane fade show active'
                           
                            role='tabpanel'
                            aria-labelledby='home-tab'
                          >
                            <p className='my-2'>
                              {product.policy?product.policy:""}
                            </p>
                          </div>
                          }
                         
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {' '}
                      <div className='d-flex w-100 h-100 justify-content-center align-items-center flex-column'>
                        <h1>Product Not Found</h1>
                        <button className='site-btn px-4 py-2 mt-3 mt-sm-0 medium text-capitalize'>
                          Go Back
                        </button>
                      </div>
                    </>
                  )}

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
                                <del>{x.price ? x.price : 'Out Of Stock'}</del>{' '}
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
          <div className='overlay' />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

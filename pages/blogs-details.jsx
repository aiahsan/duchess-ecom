import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import GetinTouch from '../components/getInTouchForm';

import {
  addItemToCart,
  removeItemFromCart,
  addItemToWishlist,
  removeItemFromWishlist,
  increaseQuantity,
  reduceQuantity,
} from '../redux/actionMethodes/cart';
import momment from 'moment';
import { repository } from '../utiles/repository';
import TopComp from '../components/topComp';
import { IoCafeOutline, IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { BsSuitHeartFill, BsSuitHeart } from 'react-icons/bs';
import blogs from './blogs';
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
    const parsed = queryString.parse(location.search);
    setshowanimation(true);
    setshowComponent(true);
    try {
      (async () => {
        if (parsed.name) {
          const { data, status } = await repository
            .getblogbyname(parsed.name)
            .then((x) => x);
          if (status == 200) {
            setproduct(data.data.blog);
            setproducts(data.data.blogs);

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
        <div>
          {/* banner starts here */}
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 px-0'>
                <img
                  src={product&&product.image?product.image:""}
                  alt=''
                  className='img-fluid w-100 blog-banner'
                />
              </div>
            </div>
          </div>
          {/* banner ends here */}
          <section className='blog-details py-lg-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12 my-lg-auto'>
                  <h5 className='bold'>
                    {
                      product&&product.title?product.title:""
                    }
                  </h5>
                  <p className='mb-0 mt-4 p-lg'>
                   {momment(product&&product.dateCreated?product.dateCreated:"").format("MMMM DD yyyy ")}
                    <i className='fas p-sm fa-circle mx-2 golden-text' /> Posted
                    by abir in HAIR TIPS &amp; TRICKS
                  </p>
                 
                </div>
               <div className="row">
                
               <div dangerouslySetInnerHTML={{__html: product&&product.richDescription?product.richDescription:""}} />

                </div>
              </div>
            </div>
          </section>

          <div className="container mb-5">
                  <h6 className='mt-4'>Related Posts</h6>

                  <div className='row'>
                    {
                      products.map((x,i)=><a   href={`blogs-details?name=${x.title}`} key={i} className='col-lg-4 col-md-6 mt-3'>
                      <img
                        src={x.image?x.image:""}
                        alt=''
                        className='img-fluid w-100'
                      />
                      <div className='featured-blog-card mx-2 p-3'>
                        <p className='mb-1 medium pink-text'>{momment(x.dateCreated?x.dateCreated:"").format("MMMM DD yyyy ")}</p>
                        <p className='mb-1 bold'>
                          {x.title?x.title:""}
                        </p>
                        <p className='mb-1 golden-text medium'>
                          Posted by abir . HAIR CARE &amp; ADVICE
                        </p>
                      </div>
                    </a>)
                    }
                  
                  </div>
                </div>
          

          {/* hair-collection ends here */}
          <section className='get-in-touch pt-5 pb-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h3>
                    <span className='bold'>Leave a</span> Reply
                  </h3>
                  <p className='grey-text'>Your comments matters the most!</p>
                </div>
              </div>
              <GetinTouch
                setshowmessage={setshowmessage}
                setmessage={setmessage}
                setshowanimation={setshowanimation}
              />
            </div>
          </section>
          {/* hair-collection ends here */}
        </div>
      </div>
      <div className='overlay' />
      </>):<></>}
    </div>
  );
};

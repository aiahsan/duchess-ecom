
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import Navbar from '../components/navbar';
import Head from '../components/Head';
import TopComp from '../components/topComp';
import dynamic from 'next/dynamic';
import GetinTouch from '../components/getInTouchForm';
import { repository } from '../utiles/repository';
import _ from 'lodash';
dynamic(() => import('react-owl-carousel'), { ssr: false });
const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

export default function Home() {
  const [showanimation, setshowanimation] = React.useState(false);
  const [showComponent, setshowComponent] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState('');

  const [products, setproducts] = React.useState([]);
  const [viewproducts, setviewproducts] = React.useState([]);
  const [testimonials, settestimonials] = React.useState([]);
  const [galleries, setgalleries] = React.useState([]);
  const [categories, setcategories] = React.useState([]);
  const [category, setCategory] = React.useState();
  const handleCategory = (categoryitem) => {
    if (categoryitem) {
      setCategory(categoryitem);
      const hairCollaction = products.filter(
        (x) => x.isHairCollection && x.isHairCollection == true
      );

      setviewproducts(
        hairCollaction.filter((x) => x.category.id == categoryitem.id)
      );
    } else {
      setCategory(undefined);
    }
  };
  React.useEffect(() => {

    // typeof document !== undefined
    // ? require("bootstrap/dist/js/bootstrap.bundle")
    // : null;
    
    setshowanimation(true);
    setshowComponent(true);
    try {
      (async () => {
        const { data, status } = await repository.dashboard().then((x) => x);
        console.log(data, status);
        if (status == 200) {
          setproducts(data.data.products);
          settestimonials(data.data.testimonials);
          setgalleries(data.data.galleries);
          setcategories(data.data.categories);
          setviewproducts(
            data.data.products.filter(
              (x) => x.isHairCollection && x.isHairCollection == true
            )
          );
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

      <Head title='Home' />
    {showComponent==true?   <div>
        <div className='wrapper'>
          <header>
            <Navbar />
          </header>
          {/* banner starts here */}

          <section className='banner'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <OwlCarousel
                    className='owl-theme banner-carousel'
                    loop={true}
                    margin={10}
                    nav={true}
                    navText={[
                      "<img src='images/arrow-left.png'>",
                      "<img src='images/arrow-right.png'>",
                    ]}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      600: {
                        items: 1,
                      },
                      1000: {
                        items: 1,
                      },
                    }}
                  >
                    <div className='item'>
                      <div className='banner-inner'>
                        <h2 className='golden-text mistral'>Your Choice</h2>
                        <h1 className='bold'>Get longer, fuller hair.</h1>
                        <button className='site-btn px-5 py-2 mt-3'>
                          Shop Hair
                        </button>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='banner-inner'>
                        <h2 className='golden-text mistral'>Your Choice</h2>
                        <h1 className='bold'>Get longer, fuller hair.</h1>
                        <button className='site-btn px-5 py-2 mt-3'>
                          Shop Hair
                        </button>
                      </div>
                    </div>
                    <div className='item'>
                      <div className='banner-inner'>
                        <h2 className='golden-text mistral'>Your Choice</h2>
                        <h1 className='bold'>Get longer, fuller hair.</h1>
                        <button className='site-btn px-5 py-2 mt-3'>
                          Shop Hair
                        </button>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          {/* banner ends here */}
          {/* hair-collection starts here */}
          <section className='hair-collection text-center py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h3>
                    <span className='bold'>Duchess</span> Hair Collection
                  </h3>
                  <p className='grey-text'>
                    A wide range of premium quality hair collection
                  </p>
                  <ul className='nav nav-tabs' id='myTab' role='tablist'>
                    <li className='nav-item' role='presentation'>
                      <a
                        onClick={() => handleCategory(undefined)}
                        className={`nav-link ${
                          category == undefined ? 'active' : ''
                        }`}
                      >
                        All
                      </a>
                    </li>
                    {categories.map((x, i) => (
                      <li key={i} className='nav-item' role='presentation'>
                        <a
                          onClick={() => handleCategory(x)}
                          className={`nav-link ${
                            category && category.id && category.id == x.id
                              ? 'active'
                              : ''
                          }`}
                        >
                          {x.name ? x.name : ''}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className='tab-content' id='myTabContent'>
                    <div
                      className='tab-pane fade show active'
                      id='all'
                      role='tabpanel'
                      aria-labelledby='all-tab'
                    >
                      <OwlCarousel
                        className='collection-carousel mt-lg-5 mt-4 owl-theme'
                        loop={true}
                        margin={20}
                        dots={false}
                        nav={true}
                        navText={[
                          "<img src='images/arrow-left.png'>",
                          "<img src='images/arrow-right.png'>",
                        ]}
                        responsive={{
                          0: {
                            items: 2,
                          },
                          600: {
                            items: 2,
                          },
                          1000: {
                            items: 4,
                          },
                        }}
                      >
                        {viewproducts.map((x) => (
                          <div className='item'>
                            <img
                              src={
                                x.images && x.images[0]
                                  ? x.images[0]
                                  : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                              }
                              alt=''
                              className='img-fluid'
                            />
                            <p className='mt-3 mb-1'>{x.name ? x.name : ''}</p>
                            <p className='mt-0 golden-text semi-bold'>
                              £{x.price ? x.price : 0}
                            </p>
                          </div>
                        ))}
                      </OwlCarousel>

                      <a
                        href='#_'
                        className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                      >
                        View All
                      </a>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='extension'
                      role='tabpanel'
                      aria-labelledby='extension-tab'
                    >
                      <div className='owl-carousel collection-carousel mt-lg-5 mt-4 owl-theme'>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                      </div>
                      <a
                        href='#_'
                        className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                      >
                        View All
                      </a>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='wigs'
                      role='tabpanel'
                      aria-labelledby='wigs-tab'
                    >
                      <div className='owl-carousel collection-carousel mt-lg-5 mt-4 owl-theme'>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                      </div>
                      <a
                        href='#_'
                        className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                      >
                        View All
                      </a>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='pony'
                      role='tabpanel'
                      aria-labelledby='pony-tab'
                    >
                      <div className='owl-carousel collection-carousel mt-lg-5 mt-4 owl-theme'>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                      </div>
                      <a
                        href='#_'
                        className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                      >
                        View All
                      </a>
                    </div>
                    <div
                      className='tab-pane fade'
                      id='accessories'
                      role='tabpanel'
                      aria-labelledby='accessories-tab'
                    >
                      <div className='owl-carousel collection-carousel mt-lg-5 mt-4 owl-theme'>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-1.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Spiral Hair Ties</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-2.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair bands</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-3.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Nice Hair bands</p>
                          <p className='mt-0 semi-bold'>
                            <del>£18.00</del>{' '}
                            <span className='golden-text'> £16.00</span>
                          </p>
                        </div>
                        <div className='item'>
                          <img
                            src='images/collection-4.png'
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 mb-1'>Hair Scrunchies</p>
                          <p className='mt-0 golden-text semi-bold'>£16.00</p>
                        </div>
                      </div>
                      <a
                        href='#_'
                        className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                      >
                        View All
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          {/* hair-collection starts here */}
          <section className='hair-collection best-seller text-center py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h3>
                    <span className='bold'>Duchess</span> Best Sellers Products
                  </h3>
                  <p className='grey-text'>
                    Our highly rated best sellers products
                  </p>
                  <OwlCarousel
                    loop={true}
                    margin={20}
                    dots={false}
                    nav={true}
                    navText={[
                      "<img src='images/arrow-left.png'>",
                      "<img src='images/arrow-right.png'>",
                    ]}
                    responsive={{
                      0: {
                        items: 2,
                      },
                      600: {
                        items: 2,
                      },
                      1000: {
                        items: 4,
                      },
                    }}
                    className='collection-carousel mt-lg-5 mt-4 owl-theme'
                  >
                    {_.sortBy(products)
                      .slice(0, 9)
                      .map((x, i) => (
                        <div className='item'>
                          <img
                            src={
                              x.images && x.images[0]
                                ? x.images[0]
                                : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                            }
                            alt=''
                            className='img-fluid'
                          />
                          <p className='mt-3 semi-bold mb-1'>
                            {x.name ? x.name : ''}
                          </p>
                          <p className='mt-0 mb-1'>
                            {x.category & x.category.name
                              ? x.category.name
                              : ''}
                          </p>
                          <p className='mt-0 golden-text semi-bold'>
                            £{x.price ? x.price : 0}
                          </p>
                        </div>
                      ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          {/* hair-collection starts here */}
          <section className='hair-collection testimonials pt-5 pb-0'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3 className='bold'>Testimonials</h3>
                    <p className='grey-text'>Our happy satisfied customers</p>
                  </div>
                  <OwlCarousel
                    loop={true}
                    margin={10}
                    dots={false}
                    nav={true}
                    navText={[
                      "<img src='images/arrow-left.png'>",
                      "<img src='images/arrow-right.png'>",
                    ]}
                    responsive={{
                      0: {
                        items: 1,
                      },
                      600: {
                        items: 1,
                      },
                      1000: {
                        items: 1,
                      },
                    }}
                    className='testimonial-carousel mt-lg-5 mt-4 owl-theme'
                  >
                    {testimonials.map((x, i) => (
                      <div className='item'>
                        <div className='testimonial-inner'>
                          <div className='media d-md-flex d-block align-items-center'>
                            <img
                              src={x.image ? x.image : ''}
                              alt=''
                              className='nobrd img-fluid testimonial-img'
                            />
                            <div className='media-body ml-md-4 mt-3 mt-lg-0'>
                              <p className='p-lg grey-text mb-1'>
                                {x.review ? x.review : ''}
                              </p>

                              <p className='p-lg mt-md-5 mt-3 medium'>
                                {x.name ? x.name : ''}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          {/* hair-collection starts here */}
         
          {/* <section className='hair-collection text-center py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h3>
                    <span className='bold'>Duchess</span> Customer's Gallery
                  </h3>
                  <p className='grey-text'>
                    Our Beautiful Customers using Duchess Products
                  </p>
                  <OwlCarousel
                    loop={true}
                    margin={20}
                    dots={false}
                    nav={true}
                    navText={[
                      "<img src='images/arrow-left.png'>",
                      "<img src='images/arrow-right.png'>",
                    ]}
                    responsive={{
                      0: {
                        items: 2,
                      },
                      600: {
                        items: 2,
                      },
                      1000: {
                        items: 4,
                      },
                    }}
                    className='collection-carousel mt-lg-5 mt-4 owl-theme'
                  >
                    {galleries.map((x, i) => (
                      <div className='item'>
                        <img
                          src={
                            x.image
                              ? x.image
                              : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
                          }
                          alt=''
                          className='img-fluid nobrd'
                        />
                      </div>
                    ))}
                  </OwlCarousel>
                  <div></div>
                  <a
                    href='#_'
                    className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                  >
                    Add Photo
                  </a>
                </div>
              </div>
            </div>
          </section>
      */}
     
          {/* hair-collection ends here */}
          {/* hair-collection starts here */}
          <section className='hair-collection why-us py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3>
                      <span className='bold'>Why Duchess</span> Hair Extensions?
                    </h3>
                    <p className='grey-text'>
                      Our mission is to make you look and feel glamorous! Like a
                      Duchess!
                    </p>
                  </div>
                </div>
              </div>
              <div className='row mt-md-3'>
                <div className='col-md-8 my-md-auto mt-3'>
                  <ul className='why-list mb-0'>
                    <li>
                      ✓ The easiest way to get longer, thicker hair in
                      minutes–right at home
                    </li>
                    <li>✓ Can be washed, heat styled, and dyed </li>
                    <li>✓ like your own hair</li>
                    <li>✓ Made from premium quality</li>
                    <li>✓ 100% Remy human hair</li>
                    <li>
                      ✓ Causes absolutely zero damage to your natural hair
                    </li>
                    <li>✓ Sourced ethically and made sustainably</li>
                  </ul>
                  <a
                    href='#_'
                    className='site-btn px-5 py-2 mt-3 text-capitalize d-inline-block'
                  >
                    View Collection
                  </a>
                </div>
                <div className='col-md-4 my-md-auto mt-3'>
                  <img src='images/why-us.png' alt='' className='img-fluid' />
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          {/* hair-collection starts here */}
          <section className='hair-collection text-center py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3>
                      <span className='bold'>Duchess</span> Class Services
                    </h3>
                    <p className='grey-text'>Because you deserve it</p>
                  </div>
                  <div className='row mt-3'>
                    <div className='col-md-4 mt-5'>
                      <div className='class-card'>
                        <div className='class-circle'>
                          <img src='images/class-1.png' alt='' />
                        </div>
                        <p className='p-lg mb-0'>Easy Returns</p>
                      </div>
                    </div>
                    <div className='col-md-4 mt-5'>
                      <div className='class-card'>
                        <div className='class-circle'>
                          <img src='images/class-2.png' alt='' />
                        </div>
                        <p className='p-lg mb-0'>Fast Delivery</p>
                      </div>
                    </div>
                    <div className='col-md-4 mt-5'>
                      <div className='class-card'>
                        <div className='class-circle'>
                          <img src='images/class-3.png' alt='' />
                        </div>
                        <p className='p-lg mb-0'>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          {/* hair-collection starts here */}
          <section className='hair-collection text-center pt-lg-3 pb-5'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <h3 className='bold'>Sponsored By</h3>
                  <p className='grey-text mb-1'>As seen as featured in</p>
                </div>
              </div>
              <div className='row align-items-center'>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-1.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-2.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-3.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-4.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
              <div className='row align-items-center justify-content-center'>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-5.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-6.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-sm-3 col-6'>
                  <img
                    src='images/sponser-7.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </section>
          {/* hair-collection ends here */}
          {/* hair-collection ends here */}
          <section className='get-in-touch pt-5 pb-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 text-center'>
                  <h3>
                    <span className='bold'>Get in touch</span> with Duchess
                  </h3>
                  <p className='grey-text'>
                    We love to hear from you. Feel free to contact us.
                  </p>
                </div>
              </div>
              <GetinTouch
                setshowmessage={setshowmessage}
                setmessage={setmessage}
                setshowanimation={setshowanimation}
              />
            </div>
          </section>
       
        </div>
        <div className='overlay' />
      </div>
   :<></>}
    </div>
  );
}

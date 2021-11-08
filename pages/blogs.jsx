import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';
import { repository } from '../utiles/repository';
import TopComp from '../components/topComp';
import moment from 'moment';
import GetinTouch from '../components/getInTouchForm';
import SubscribeEmail from '../components/SubscribeEmail';

export default () => {
  const [showComponent, setshowComponent] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const [blogs, setblogs] = React.useState([]);
  const [fblogs, setfblogs] = React.useState([]);

  React.useEffect(() => {
    setshowanimation(true);
    setshowComponent(true);
    try {
      (async () => {
        const { data, status } = await repository.blogs().then((x) => x);
        if (status == 200) {
          const featured = data.data.filter((x) => x.isFeatured == true);
          const unFeatured = data.data.filter((x) => x.isFeatured != true);
          setblogs(unFeatured);
          setfblogs(featured.reverse());
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
          {' '}
          <div className='wrapper'>
            <Navbar />
            <div>
              {/* banner starts here */}
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-12 px-0'>
                    <img
                      src='images/blog-banner.png'
                      alt=''
                      className='img-fluid w-100 blog-banner'
                    />
                    <div className='banner-content text-center'>
                      <h5>
                        <span className='bold'>Subscribe</span> our Newsletter
                      </h5>
                      <SubscribeEmail
                        setshowmessage={setshowmessage}
                        setmessage={setmessage}
                        setshowanimation={setshowanimation}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* banner ends here */}
              <section className='real-transformation py-md-5 py-4'>
                <div className='container'>
                  <div className='row'>
                    {fblogs.map((x, i) =>
                      i == 0 ? (
                        <div className='col-12'>
                          <div className='text-center'>
                            <h3 className='mb-0'>
                              <span className='bold'>Duchess</span> Featured
                              Blog
                            </h3>
                            <p className='grey-text'>
                              Interesting Articles to Read
                            </p>
                          </div>
                          <a
                            href={`blogs-details?name=${x.title}`}
                            className='position-relative'
                          >
                            <img
                              src={x.image ? x.image : ''}
                              alt=''
                              className='img-fluid mt-4 featured-blog'
                            />
                            <div className='featured-card'>
                              <p className='mb-1 p-lg'>
                                {moment(
                                  x.dateCreated ? x.dateCreated : ''
                                ).format('MMMM DD yyyy')}
                              </p>
                              <h6>{x.title ? x.title : ''}</h6>
                              <p className='mb-1 p-lg'>
                                {x.description ? x.description : ''}
                              </p>
                              <p className='mb-1 p-lg'>
                                Posted by abir . HAIR CARE &amp; ADVICE
                              </p>
                            </div>
                          </a>
                        </div>
                      ) : (
                        <a
                          className='col-lg-4 col-md-6 mt-3'
                          href={`blogs-details?name=${x.title}`}
                        >
                          <img
                            src={x.image ? x.image : ''}
                            alt=''
                            className='img-fluid w-100'
                          />
                          <div className='featured-blog-card mx-2 p-3'>
                            <p className='mb-1 medium pink-text'>
                              {moment(
                                x.dateCreated ? x.dateCreated : ''
                              ).format('MMMM DD yyyy')}
                            </p>
                            <p className='mb-1 bold'>
                              {x.description ? x.description : ''}
                            </p>
                            <p className='mb-1 golden-text medium'>
                              Posted by abir . HAIR CARE &amp; ADVICE
                            </p>
                          </div>
                        </a>
                      )
                    )}
                  </div>
                </div>
              </section>
              <section className='real-transformation pb-md-5 pb-4'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='text-center'>
                        <h3 className='mb-0'>
                          <span className='bold'>The Luxy</span> Hair Blog
                        </h3>
                        <p className='grey-text'>
                          All you need to know about hair!
                        </p>
                      </div>
                    </div>
                    {blogs.map((x, i) => {
                      return (
                        <>
                          {' '}
                          <div className='col-lg-6 px-lg-0 mt-3 mt-lg-4'>
                            <img
                              src={x.image ? x.image : ''}
                              alt=''
                              className='img-fluid w-100'
                            />
                          </div>
                          <div className='col-lg-6 px-lg-0 featured-blog-card mt-lg-4 mt-0'>
                            <div
                              className='mx-2 p-3'
                              onClick={() => (location.href = 'blogs-details')}
                            >
                              <p className='mb-1 medium mt-3 pink-text'>
                                {moment(
                                  x.dateCreated ? x.dateCreated : ''
                                ).format('MMMM DD yyyy')}
                              </p>
                              <p className='mb-1 mt-3 bold'>
                                How Often Should I Wash My Hair?
                              </p>
                              <p className='mb-1 mt-3'>
                                {x.description ? x.description : ''}
                                <a href={`blogs-details?name=${x.title}`} className='pink-text'>
                                  {' '}
                                  Read More
                                </a>
                              </p>
                              <p className='mb-1 mt-3 golden-text medium'>
                                Posted by abir . HAIR CARE &amp; ADVICE
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </section>
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
                  />{' '}
                  {/* hair-collection ends here */}{' '}
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

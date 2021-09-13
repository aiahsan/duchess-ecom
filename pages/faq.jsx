import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';

export default () => {
  const [collapse, setcollapse] = React.useState(0);
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
          <section className='contact-us py-md-5 py-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-12'>
                  <div className='text-center'>
                    <h3 className='bold'>Frequently Asked Questions</h3>
                    <p className='grey-text'>Have any Questions?</p>
                  </div>
                  <div
                    className='accordion faq-accordion'
                    id='accordionExample'
                  >
                    <div className='card border-0 mt-3'>
                      <div className='card-header border-0' id='headingOne'>
                        <button
                          className='transparent-btn d-flex align-items-center justify-content-between btn-block text-left collapsed'
                          type='button'
                          onClick={() => setcollapse(0)}
                        >
                          What is the difference between Classic and Seamless
                          hair extensions?
                          <i className='fas fa-plus' />
                        </button>
                      </div>
                      <div
                        id='collapseOne'
                        className={`collapse ${collapse == 0 ? 'show' : ''}`}
                        aria-labelledby='headingOne'
                        data-parent='#accordionExample'
                      >
                        <div className='card-body'>
                          Some placeholder content for the first accordion
                          panel. This panel is shown by default, thanks to the{' '}
                          <code>.show</code> class.
                        </div>
                      </div>
                    </div>
                    <div className='card border-0 mt-3'>
                      <div className='card-header border-0' id='headingTwo'>
                        <button
                          className='transparent-btn d-flex align-items-center justify-content-between btn-block text-left collapsed'
                          type='button'
                          onClick={() => setcollapse(1)}
                        >
                          What is a Volumizer Weft and how do I use it?
                          <i className='fas fa-plus' />
                        </button>
                      </div>
                      <div
                        id='collapseTwo'
                        className={`collapse ${collapse == 1 ? 'show' : ''}`}
                      >
                        <div className='card-body'>
                          Some placeholder content for the second accordion
                          panel. This panel is hidden by default.
                        </div>
                      </div>
                    </div>
                    <div className='card border-0 mt-3'>
                      <div className='card-header border-0' id='headingThree'>
                        <button
                          className='transparent-btn d-flex align-items-center justify-content-between btn-block text-left'
                          type='button'
                          onClick={() => setcollapse(2)}
                        >
                          Can I wear a Volumizer Weft on its own?
                          <i className='fas fa-minus' />
                        </button>
                      </div>
                      <div
                        id='collapseThree'
                        className='collapse show'
                        className={`collapse ${collapse == 2 ? 'show' : ''}`}
                      >
                        <div className='card-body'>
                          Our Volumizer wefts are meant to be worn in
                          conjunction with a full set for extra volume. It can
                          only be worn separately on its own if your hair is the
                          same length as the weft. We do not recommend to use a
                          Volumizer Weft as a replacement to a full set of Hair
                          extensions. The weft is not designed to give you a
                          full, long, luscious look on its own, as a full set
                          would. The Volumizer Weft should be used for
                          supplemental thickness.
                        </div>
                      </div>
                    </div>
                    <div className='card border-0 mt-3'>
                      <div className='card-header border-0' id='headingThree'>
                        <button
                          className='transparent-btn d-flex align-items-center justify-content-between btn-block text-left collapsed'
                          type='button'
                          onClick={() => setcollapse(3)}
                        >
                          How long do your Hair extensions last?
                          <i className='fas fa-plus' />
                        </button>
                      </div>
                      <div
                        id='collapseFour'
                        className='collapse'
                        className={`collapse ${collapse == 3 ? 'show' : ''}`}
                      >
                        <div className='card-body'>
                          And lastly, the placeholder content for the third and
                          final accordion panel. This panel is hidden by
                          default.
                        </div>
                      </div>
                    </div>
                    <div className='card border-0 mt-3'>
                      <div className='card-header border-0' id='headingThree'>
                        <button
                          className='transparent-btn d-flex align-items-center justify-content-between btn-block text-left collapsed'
                          type='button'
                          onClick={() => setcollapse(4)}
                        >
                          What is your return and exchange policy?
                          <i className='fas fa-plus' />
                        </button>
                      </div>
                      <div
                        id='collapseFive'
                        className={`collapse ${collapse == 4 ? 'show' : ''}`}
                      >
                        <div className='card-body'>
                          And lastly, the placeholder content for the third and
                          final accordion panel. This panel is hidden by
                          default.
                        </div>
                      </div>
                    </div>
                    <div className='card border-0 mt-3'>
                      <div className='card-header border-0' id='headingThree'>
                        <button
                          className='transparent-btn d-flex align-items-center justify-content-between btn-block text-left collapsed'
                          type='button'
                          onClick={() => setcollapse(5)}
                        >
                          How long does shipping take?
                          <i className='fas fa-plus' />
                        </button>
                      </div>
                      <div
                        id='collapseSix'
                        className={`collapse ${collapse == 5 ? 'show' : ''}`}
                      >
                        <div className='card-body'>
                          And lastly, the placeholder content for the third and
                          final accordion panel. This panel is hidden by
                          default.
                        </div>
                      </div>
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

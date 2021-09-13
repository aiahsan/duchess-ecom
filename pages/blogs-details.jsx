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
                <img
                  src='images/blog-details-banner.png'
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
                <div className='col-lg-7 my-lg-auto'>
                  <h5 className='bold'>
                    Aloe vera: why you should try hair masking with this wonder
                    plant
                  </h5>
                  <p className='mb-0 mt-4 p-lg'>
                    March 5, 2021{' '}
                    <i className='fas p-sm fa-circle mx-2 golden-text' /> Posted
                    by abir in HAIR TIPS &amp; TRICKS
                  </p>
                  <p className='mt-4 p-md mb-0'>
                    Finding the perfect hair-wash schedule is often impossible
                    for us girls. Wash your hair too much, and it will become
                    dry and brittle. Don’t wash it enough, and it will become
                    oily and lifeless. It becomes hard to find the perfect
                    middle ground, but we at Luxy Hair have compiled all of our
                    tips, tricks and secrets to spill in today’s blog post.
                  </p>
                </div>
                <div className='col-lg-5 my-lg-auto mt-3'>
                  <img
                    src='images/blog-details-1.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-12 mt-2'>
                  <h6 className='semi-bold'>1. Hair Type Matters</h6>
                  <p className='p-md'>
                    There is a reason why there are different products for
                    different hair types. Every texture and hair type requires
                    particular and specific attention and your wash routine is
                    no exception. Hair with thicker strands can go longer
                    without cleansing, while thin tresses tend to get dirty and
                    oily quicker. Curly hair tends to be on the dry side, so can
                    go longer without washing, while straight hair may require
                    more frequent washing. Coarse hair can be left for longer
                    without a good scrub, while silky hair can’t…you get the
                    picture!
                  </p>
                  <img
                    src='images/blog-details-bg.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                </div>
                <div className='col-lg-7 mt-3 my-lg-auto'>
                  <h6 className='semi-bold'>2. Lifestyle and Activity</h6>
                  <p className='p-md mt-3'>
                    Here’s something that not many people consider: the kind of
                    lifestyle you’re leading. Does the following situation sound
                    familiar? You wash, blow dry and style your hair in the
                    morning. You’re looking fresh and turning heads all day.
                    Then, you hit the gym and your hair’s oil city and you have
                    to wash your hair AGAIN. Unfortunately, the more active you
                    are, the more often you should wash your hair. The reason is
                    pretty simple: sweat piles up, clogs your pores and dirties
                    your scalp and roots faster.{' '}
                  </p>
                  <h6 className='semi-bold'>
                    3. So, how often should I wash my hair?
                  </h6>
                  <p className='mt-3 p-md mb-0'>
                    Generally speaking, dry hair types should shampoo a maximum
                    of two times a week, while oily hair types may require
                    washing on a daily basis. If you have normal hair and don’t
                    suffer from dryness or oiliness, you have the luxury of
                    washing your hair whenever you feel like you need to. It
                    also depends on your hair type. Hair that’s thicker,
                    curlier, or processed can go without a wash for longer than
                    hair that is fine. This is because the oils in your scalp
                    don’t travel down the hair shaft as quickly as it does in
                    finer hair strands.HAIR CARE &amp; ADVICE
                  </p>
                </div>
                <div className='col-lg-5 mt-3'>
                  <img
                    src='images/blog-details-2.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-12 mt-4'>
                  <h5 className='bold'>How to Get Rid of Oily Hair: 6 Tips</h5>
                  <p className='p-md mb-0 mt-3'>
                    If you’re like me and feel icky without a shower, try a body
                    shower. You can purchase a shower cap to keep your hair dry
                    while you cleanse the rest of your body. Or try just rinsing
                    your hair without using any product. Sometimes, all the hair
                    needs is a little water rather than a full wash. We are well
                    trained to lather, rinse and repeat. But chances are you’re
                    washing your hair far too often. Instead of the traditional
                    shampoo-and-conditioner routine, many experts say we should
                    be co-washing more—short for conditioner-only
                    washing—embracing a little grease and letting our hair’s
                    natural oils do their job.
                  </p>
                </div>
                <div className='col-lg-9 mt-3 my-lg-auto'>
                  <h6 className='semi-bold'>
                    4. Brunettes Get Special Treatment
                  </h6>
                  <p className='mt-3 p-md'>
                    Dark haired? Then consider washing your hair twice a week at
                    maximum regardless of your type and texture. This is because
                    shampooing brunette hair too frequently will make it lose
                    some of its pigments, resulting in a faded and mousey color.
                    The pigments also help to keep the hair looking less oily.
                    Darker hair colors tend to keep their shine longer, and
                    frequent shampooing can damage that natural shine.
                  </p>
                </div>
                <div className='col-lg-3 mt-3'>
                  <img
                    src='images/blog-details-3.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
                <div className='col-12 mt-2'>
                  <h6 className='semi-bold'>5. When In Doubt Go Dry</h6>
                  <p className='p-md mt-4'>
                    It can become quite a hassle to constantly measure the
                    frequency of your rinses and balance out your hair’s health
                    with its appearance. What to do when you want to get rid of
                    dirt but you don’t want to coat your tresses in too much
                    shampoo?
                  </p>
                  <p className='p-md mt-4'>
                    Opt for dry shampoo instead. It absorbs dirt, dust, and
                    excess sebum, making it the ideal quick fix for that big
                    meeting that you’d rather not wash your hair for. In very
                    simple terms, dry shampoo is a magical substance that cleans
                    the hair without water. It basically works by absorbing
                    excess oil from your hair and scalp and makes it feel and
                    smell freshly washed. The ingredients in the spray dry
                    shampoo are usually a mixture of absorbing agents, aerosol
                    propellants, conditioning ingredients, solvents, and
                    fragrance.
                  </p>
                  <h6 className='mt-4'>In Conclusion</h6>
                  <p className='p-md mt-4'>
                    So, how often should you wash your hair? Generally speaking,
                    once every three days at maximum. If you want the best of
                    results, however, consider diving into the specifics of your
                    hair. Ponder texture, styling, how you treat it, the kind of
                    lifestyle you’re leading, and other factors which can sum up
                    the perfect washing routine for you.​
                  </p>
                  <p className='p-md mt-4'>
                    So there you have it loves, the lowdown on how often you
                    should be washing your hair while keeping it clean and
                    maintaining its natural components.{' '}
                  </p>
                  <p className='p-md mt-4'>Written by: Jordan Klee</p>
                  <p className='p-md mt-4'>
                    Jordan is a writer for Beautifully Alive. She loves eating
                    healthy and trying new recipes.The self-proclaimed Zumba
                    Queen has a passion for beauty products and loves reading
                    new books. She’s always down for a DIY project!
                  </p>
                  <h6 className='mt-4'>Related Posts</h6>
                </div>
                <div className='col-lg-4 col-md-6 mt-3'>
                  <img
                    src='images/featured-blog-1.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='featured-blog-card mx-2 p-3'>
                    <p className='mb-1 medium pink-text'>March 5, 2021.</p>
                    <p className='mb-1 bold'>
                      Top 10 Hat Hairstyles You Need to Try
                    </p>
                    <p className='mb-1 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 mt-3'>
                  <img
                    src='images/featured-blog-2.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='featured-blog-card mx-2 p-3'>
                    <p className='mb-1 medium pink-text'>March 6, 2021.</p>
                    <p className='mb-1 bold'>How to get a Natural Hair Look</p>
                    <p className='mb-1 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 mt-3'>
                  <img
                    src='images/featured-blog-3.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                  <div className='featured-blog-card mx-2 p-3'>
                    <p className='mb-1 medium pink-text'>March 7, 2021.</p>
                    <p className='mb-1 bold'>Six Medium Length Hairstyles</p>
                    <p className='mb-1 golden-text medium'>
                      Posted by abir . HAIR CARE &amp; ADVICE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
              <form action='#_'>
                <div className='row'>
                  <div className='col-lg-6 mt-4'>
                    <input
                      type='text'
                      placeholder='Name'
                      className='site-input w-100 px-3 py-sm-3 py-2'
                    />
                  </div>
                  <div className='col-lg-6 mt-4'>
                    <input
                      type='text'
                      placeholder='Email'
                      className='site-input w-100 px-3 py-sm-3 py-2'
                    />
                  </div>
                  <div className='col-12 mt-4'>
                    <textarea
                      name
                      id
                      cols={30}
                      rows={7}
                      placeholder='Your message'
                      className='site-input w-100 p-3'
                      defaultValue={''}
                    />
                  </div>
                  <div className='col-12 mt-4'>
                    <p className='mt-3'>
                      <input type='checkbox' id='c1' name='cb' />
                      <label htmlFor='c1'>
                        {' '}
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </p>
                  </div>
                  <div className='col-12 mt-4 text-center'>
                    <button
                      className='site-btn mb-2 text-capitalize px-5 py-2'
                      type='submit'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          {/* hair-collection ends here */}
        </div>
      </div>
      <div className='overlay' />
    </div>
  );
};

import React from 'react';
import Head from '../components/Head';
import Navbar from '../components/navbar';
import { repository } from '../utiles/repository';
import TopComp from '../components/topComp';
import _ from 'lodash'
import moment from 'moment';
import Pagination from '../components/pagination';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
 const { createSliderWithTooltip } = Slider;
 const Range = createSliderWithTooltip(Slider.Range);
 const { Handle } = Slider;
 
 const handle = props => {
   const { value, dragging, index, ...restProps } = props;
   return (
     <SliderTooltip
       prefixCls="rc-slider-tooltip"
       overlay={`${value} %`}
       visible={dragging}
       placement="top"
       key={index}
     >
       <Handle value={value} {...restProps} />
     </SliderTooltip>
   );
 };
 
export default () => {
  const [showDropdown, setshowDropdown] = React.useState(false);
  const [showComponent, setshowComponent] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState('');
  const [products, setproducts] = React.useState([]);
  const [viewproducts, setviewproducts] = React.useState([]);
  const [category, setCategory] = React.useState([]);
  const [categories, setcategories] = React.useState([]);
  const [maxRange,setmaxRange]=React.useState(0);
  const [filter,setfilter]=React.useState({
    category:[],
    newArrival:false,
    onSale:false,
    priceFrom:0,
    priceEnd:0,
    search:''
  })
const lastWeek = function () {
    var result = moment().subtract(7,'days').hours(0);   
    return result._d;
  };
  React.useEffect(() => {
    setshowanimation(true);
    setshowComponent(true);
    try {
      (async () => {
        const { data, status } = await repository
          .products('shop', '')
          .then((x) => x);
        if (status == 200) {
          setproducts(data.data.products);
          setcategories(data.data.categoryList);
          
          setviewproducts(data.data.products);
          const maxR=_.maxBy(data.data.products,'price').price;
          setfilter({
            category:[],
            newArrival:false,
            onSale:false,
            priceFrom:0,
            priceEnd:maxR,
            search:''
          })
          setmaxRange(maxR)
          
          setshowanimation(false);
        } else {
          setshowanimation(false);
        }
      })();
    } 
    catch (e) {
      setshowanimation(false);
    }
  }, []);
//0 for search
//1 for catgegory
//2 for newarrival,
//3 for onSale
//4 for priceFrom,
//5 for priceEnd
  const handleViewProducts=(value,option)=>{
    

    const oldFilter={...filter};
    if(option==0){
        oldFilter.search=value;
      }
   
    setfilter(oldFilter)
    getFilterAllData(oldFilter)
  }
  const handleOtherFilters=(value,option)=>{
    

    const oldFilter={...filter};
     if(option==1){
     if(value!="")
     {
      if(oldFilter.category.find(x=>x==value))
      {
        oldFilter.category= oldFilter.category.filter(x=>x!=value)
      }
      else
      {
        oldFilter.category.push(value);
      }
     }
     else
     {
       oldFilter.category=[];
     }
    }
    if(option==2){
      oldFilter.newArrival=!oldFilter.newArrival;
    }
    if(option==3){
      oldFilter.onSale=!oldFilter.onSale;

    }
    if(option==4){
      oldFilter.priceFrom=value[0];
      oldFilter.priceEnd=value[1];
    }
   
    setfilter(oldFilter)
  
  }
  const handleSetPosts=()=>
  {
    const oldFilter={...filter};
    getFilterAllData(oldFilter)
    setshowDropdown(false);
  }

  
  const getFilterAllData=(oldFilter)=>{
    let viewMainProducts=products;
    const oldProducts=[...products]
   
   if(oldFilter.search.trim()!="")
   {
     viewMainProducts=products.filter(x=>{
      if (x.name.toLowerCase().includes(oldFilter.search.toLowerCase())) {
       return x;
      }
    })
   }
   else{
      viewMainProducts=[...products];
     }
     if(oldFilter.onSale==true)
    {
       viewMainProducts=viewMainProducts.filter(x=>x.discountPer>0);
    }
     if(oldFilter.newArrival==true)
    {
    viewMainProducts=_.filter(viewMainProducts, function(inbox) {
    return ( moment(lastWeek()).isBefore(inbox.dateCreated));
    });
    }
     if(oldFilter.priceFrom>0)
    {
      viewMainProducts=viewMainProducts.filter(x=>x.price>oldFilter.priceFrom);
    }
     viewMainProducts=viewMainProducts.filter(x=>x.price<=oldFilter.priceEnd);
     if(oldFilter.category>0)
    {
      let pushitem=[];
        categories.forEach(x=>{
          pushitem=[...pushitem,...viewMainProducts.filter(y=>y.category.id==x)];
        });

        viewMainProducts=_.uniqBy([...pushitem,...viewMainProducts], 'id');
    }
     setviewproducts(viewMainProducts);
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

            <div className='container-fluid'>
              <div className='row'>
                <div className='col-12 px-0'>
                  <img
                    src='images/shop-hair.png'
                    alt=''
                    className='img-fluid w-100'
                  />
                </div>
              </div>
            </div>
            {/* banner ends here */}
            {/* shop-hair-collection ends here */}
       
           
            <section className='contact-us py-4 pb-lg-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12 text-center'>
                    <h3 className='mt-0 mb-0'>
                      <span className='bold'>Shop </span> Hair
                    </h3>
                    <p className='p-lg mb-1 grey-text'>
                      A wide range of premium quality hair collection
                    </p>
                  </div>
                </div>
                <div className='row align-items-center mt-4'>
                  <div className='col-lg-6 col-12'>
                    <div className='d-flex align-items-center'>
                      <div className='dropdown filter-drop d-inline-block'>
                        <button
                          className='btn text-capitalize pr-5 site-btn dropdown-toggle'
                          type='button'
                          onClick={() => setshowDropdown(!showDropdown)}
                        >
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='15.679'
                            height='15.679'
                            viewBox='0 0 15.679 15.679'
                          >
                            <path
                              id='Icon_awesome-filter'
                              data-name='Icon awesome-filter'
                              d='M14.943,0H.736a.736.736,0,0,0-.52,1.255L5.88,6.919v6.31a.735.735,0,0,0,.313.6l2.45,1.714a.735.735,0,0,0,1.156-.6V6.919l5.664-5.664A.736.736,0,0,0,14.943,0Z'
                              transform='translate(0)'
                              fill='#fff'
                            />
                          </svg>
                          Filter
                        </button>
                        <div
                          className={`dropdown-menu px-3  ${
                            showDropdown == true ? 'show' : ''
                          }`}
                          aria-labelledby='dropdownMenuButton'
                        >
                          <p className='p-lg bold'>Category</p>
                          <p className='mb-2'>
                            <input type='checkbox' onClick={()=>handleOtherFilters("",1)} id='c4' name='cb' />
                            <label htmlFor='c4' className='d-grey-text'>
                              <span className='ml-2'> All</span>
                            </label>
                          </p>
                          {
                              categories.map((x,i)=>{
                                return <p className='mb-2'>
                                <input type='checkbox' onClick={()=>handleOtherFilters(x.id?x.id:"",1)} id={i} name='cb' />
                                <label htmlFor={i} className='d-grey-text'>
                                  <span className='ml-2'> Pony Tails</span>
                                </label>
                              </p>
                              })
                          }
                         <p className='p-lg bold' >Type</p>
                          <p className='mb-2'>
                            <input type='checkbox'  onClick={()=>handleOtherFilters("",2)} id='c2' name='cb' />
                            <label htmlFor='c2' className='d-grey-text'>
                              <span className='ml-2'> New Arrival</span>
                            </label>
                          </p>
                          <p>
                            <input type='checkbox' id='c3' name='cb' />
                            <label htmlFor='c3' onClick={()=>handleOtherFilters("",3)} className='d-grey-text'>
                              <span className='ml-2'> On Sale</span>
                            </label>
                          </p>
                          <p className='p-lg bold'>Filter by Price</p>
                          <Range min={0} max={
                            maxRange==0?2000:maxRange
                          } defaultValue={[0, maxRange==0?2000:maxRange]} onChange={(e)=>handleOtherFilters(e,4)} tipFormatter={value => `${value}`} />

                           <button onClick={()=>handleSetPosts()} className='mt-4 px-5 py-2 site-btn grey-btn'>
                            Apply
                          </button>
                        </div>
                      </div>
                      <div className='search-bar'>
                        <input onChange={(e)=>handleViewProducts(e.target.value,0)} type='text' className='py-2 pl-4 pr-3 w-100' />
                        <button className='transparent-btn'>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width='15.926'
                            height='15.929'
                            viewBox='0 0 15.926 15.929'
                          >
                            <path
                              id='Icon_awesome-search'
                              data-name='Icon awesome-search'
                              d='M15.709,13.771l-3.1-3.1a.746.746,0,0,0-.529-.218h-.507a6.467,6.467,0,1,0-1.12,1.12v.507a.746.746,0,0,0,.218.529l3.1,3.1a.744.744,0,0,0,1.055,0l.88-.88a.75.75,0,0,0,0-1.058ZM6.47,10.452A3.982,3.982,0,1,1,10.452,6.47,3.98,3.98,0,0,1,6.47,10.452Z'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 d-none d-lg-block text-right'>
                    <p className='p-lg mb-0'>Showing 12-24 out of 200</p>
                  </div>
                </div>
                <Pagination  posts={viewproducts} />
                </div>
            </section>
          </div>
          <div className='overlay' />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

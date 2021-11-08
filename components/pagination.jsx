import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Pagination from "./paginations";
import {useDispatch,useSelector} from 'react-redux';
import {addItemToCart,removeItemFromCart,addItemToWishlist,removeItemFromWishlist} from '../redux/actionMethodes/cart'
import {IoCafeOutline, IoCartOutline,IoCartSharp} from 'react-icons/io5'
import {BsSuitHeartFill,BsSuitHeart} from 'react-icons/bs'
function App({data,posts}) {
    const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  useEffect(() => {
      
  }, []);
  const cart=useSelector(x=>x.Cart)
  const wishlist=useSelector(x=>x.Wishlist)
   const dispatch=useDispatch();
  // console.log(posts);

  const indexOfLastPost = currentPage * postsPerPage;
  // console.log("indexOfLastPost: ", indexOfLastPost);

  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // console.log("indexOfFirstPost: ", indexOfFirstPost);

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
  };
  console.log("currentPosts: ", currentPosts);

  return (
    <>
    <div className="row">
       
    {
      currentPosts.map((x,i)=><div key={i} className='col-lg-3 col-sm-6 mt-3'>
      <div className='product-card'>
        <img
          src={x.images&&x.images[0]?x.images[0]:""}
          alt=''
          className='img-fluid w-100'
        />
        <div className='product-btns'>
          <button onClick={()=>{
              if(cart.items.find(y=>y.id==x.id)!== undefined)
              {
                dispatch(removeItemFromCart(x))
              }
              else
              {
                 dispatch(addItemToCart(x))

              }
          }} className='product-btn'>
         {
          
          cart.items.find(y=>y.id==x.id)!== undefined?<IoCartSharp fontSize={30}/>:<IoCartOutline fontSize={30}/>
        }
          </button>
          <button
          onClick={()=>{
            if(wishlist.items.find(y=>y.id==x.id)!== undefined)
            {
              dispatch(removeItemFromWishlist(x))
            }
            else
            {
               dispatch(addItemToWishlist(x))

            }
        }}
          className='product-btn light-btn'>
             { wishlist.items.find(y=>y.id==x.id)!== undefined?<BsSuitHeartFill fontSize={30}/>:<BsSuitHeart fontSize={30}/>}
          </button>
        </div>
        <a
          href={`product-details?${btoa("name="+x.name)}`}
          className='text-center pb-2 crs-pnt card-a'
        >
          <p className='p-lg mt-3 mb-1'>{x.name?x.name:""}</p>
          <p className='p-lg golden-text semi-bold'>£ {x.discountPer&&x.discountPer>0?<>
          <del>{x.price?x.price:"Out Of Stock"}</del> <span>
            {
              x.price?x.price*(1-(x.discountPer?x.discountPer/100:0)):0
            }
            </span></>:x.price?x.price:"Out Of Stock"}</p>
        </a>
      </div>
      </div>
       )
    }
     
    </div>
     <Pagination
        paginate={paginate}
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        currentPage={currentPage}
      />
    </>
  );
}
 
export default App;
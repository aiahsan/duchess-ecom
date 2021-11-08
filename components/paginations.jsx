import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate ,currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
        <li className='page-item'>
                          <a className='page-link' onClick={() => paginate(currentPage==1?pageNumbers.length:currentPage-1)} >
                            &lt;
                          </a>
                        </li>
          {pageNumbers.map(number => (
            <li className={`page-item ${currentPage==number?"active":""}`}   key={number}>
              <a
                onClick={() => paginate(number)}
                 
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
           <li className='page-item'>
                          <a className='page-link'  onClick={() => paginate(currentPage==pageNumbers.length?1:currentPage+1)} >
                            &gt;
                          </a>
                        </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

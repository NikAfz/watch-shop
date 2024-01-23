import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom';
function Page404(props) {
  return (
    <>
      <div>
        <div className="title404--container">
          <h1>
            404
          </h1>
          <h3>
            Oops
          </h3>
          <p>
            Page Not Found
          </p> 
          <p>
            You can visit <Link className='title404--link' to="/watch-shop/">Home</Link>
          </p>
        </div>
        
      </div>
    </>
  )
};

export default Page404;

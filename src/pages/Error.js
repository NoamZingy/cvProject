import React from 'react';
import { Link } from 'react-router-dom';
import  'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      <Link to='/' className='btn justify-content-center'>
        Back Home
      </Link>
    </div>
  );
};

export default Error;

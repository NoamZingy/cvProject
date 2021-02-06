import React from 'react';
import  'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import img from '../images/cheeseCake.jpg'
const Recipe = () =>{

    return( <>
   <div className=' mt-5'>
        <h2 className='row justify-content-center'>recipe</h2>
        <img src={img} className='recipe-img'/>
        </div>
        <p className=' row justify-content-center'>
          ingrideints <span className='ml-2'>sugar, milk, cheese</span></p>

          <p className=' row justify-content-center'>
          sugar <span className='ml-2'>1 cup. Not that much considering how many
           mouths you can feed with this dessert.</span></p>
        </>
    )}
    export default Recipe;

  
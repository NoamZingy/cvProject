import React from 'react';
import { Link } from 'react-router-dom';
import 'react-bootstrap'
import { FaHandHoldingHeart , FaAngellist, FaGlobeAmericas } from 'react-icons/fa';

const Home = () =>{
  
  
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

    return( <>
    <main >
       <div className="parallax">
        <div className="titleText">
            <button className="border" onClick={handleScroll}>
         welcome!
            </button>
    </div>
    </div>
    <div className="container container-home">

     
<section id="best-features" className="text-center">


  <h2 className="mb-5 font-weight-bold"> Welcome to my CV website !</h2>


  <div className="row d-flex justify-content-center mb-4">

   
    <div className="col-md-8">

     
      <p className="grey-text"> here you can see my projects.
          and also you can get to know me a little bit better
         in the 'about' page.
         hopefully you will find me the right man for the job 🤩
         if you think i'm not fit for any reason, i dont want you to leave empty handed,
          here you can find the recipe for my mother's famous cheese cake. 
        dont worry its kosher 😂🍰</p>

    </div>
  

  </div>

<div className="row justify-content-center"> 
    <Link to='/Recipe' className='btn btn-primary'>
      for the cake
      </Link></div>
  <div className="row mt-5">

    <div className="col-md-4 mb-5">
    <FaHandHoldingHeart className='sociali'/>
      <h4 className="my-4 font-weight-bold">Motivation</h4>
      <p className="grey-text">Highly motivated to succeed and loves to help.
Very loyal to the workplace and constantly strives to learn and progress</p>
    </div>
  

    <div className="col-md-4 mb-1">
    <FaAngellist className='sociali'/>
      <h4 className="my-4 font-weight-bold">Skills</h4>
      <p className="grey-text">
Learns very fast and has a positive attitude. Creative and thinking outside the box.
full stack web developer - specializes in front end, but knows well beck end.
Specializes mainly - js, react, html, css, nodejs
Excellent acquaintance - mysql, typescript, angular, mogoDB</p>
    </div>
   

   
    <div className="col-md-4 mb-1">
     <FaGlobeAmericas className='sociali'/>
      <h4 className="my-4 font-weight-bold">Hobbies</h4>
      <p className="grey-text">Loves to travel. In addition, loves sports with an emphasis on running and ball games. Very fond of programming and technology
      </p>
    </div>
  </div>
</section>
</div>

   </main>
    </> 
    )}
    export default Home;
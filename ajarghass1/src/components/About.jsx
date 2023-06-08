import React from 'react'
import { NavLink } from 'react-router-dom';
// import {img1} from './assets/images/home/about.png'

const About = () => {
  return (
    <div>

  
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>About Us</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente provident tempora facere sunt tempore, ut incidunt, perferendis minus qui error et eveniet totam voluptatum asperiores quod in. Dicta vero quidem, saepe fuga sit placeat consequatur aspernatur aliquid molestias rem accusantium officiis ut laborum culpa error, minus quia praesentium eos nesciunt perferendis debitis sed non. Ipsam aperiam doloremque rerum eaque accusantium amet, ratione asperiores rem! Minima molestias corporis fuga consequuntur nesciunt sapiente nobis accusamus, eius velit nihil quia pariatur dolor asperiores tempore doloribus dolores vel expedita aut quibusdam dolore aspernatur veniam officiis consequatur. Maiores ratione aliquam tempore neque, incidunt sit itaque.
          </p>
          <NavLink to="/contact" className="btn btn-outline-dark">Contact Us</NavLink>
        </div>
        <div className='col-md-6 mb-4 d-flex  justify-content-center'>
          {/* <img src={img1} alt='about' height= "400px" width= "600px"/> */}
          <img src="/assets/images/home/about.png" alt='about' height= "400px" width= "600px"/>


        </div>
      </div>
    </div>



    </div>
  )
}

export default About;





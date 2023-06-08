import React from 'react'
import Product from './Product'







const Home = () => {
  return (
    <div>




{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}





<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>

  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="\assets\images\home\home1.jpg" class="d-block w-100" alt="home" height="700"/>


      <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container  text-dark">

                    <h5 className="card-title display-3 fw-bolder mb-0 text-color-white">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHEACK OUT ALL THE TREANDS......</p>

                    </div>
                   
                </div>
    </div>
    <div class="carousel-item">
    <video src="/assets/images/home/home2.mp4" autoPlay loop muted height="50%" width= "100%"> </video>

     
    </div>
    <div class="carousel-item">
    <img src="/assets/images/home/home1.jpg" class="d-block h-100 w-100" alt="home" height={700}/>
    <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container  text-white">

                    <h5 className="card-title display-3 fw-bolder mb-0 text-color-white">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHEACK OUT ALL THE TREANDS......</p>

                    </div>
                   
                </div>
    </div>
    <div class="carousel-item">
    <img src="/assets/images/home/home3.png" class="d-block w-100" alt="homw" height={700}/>
    <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container  text-white">

                    <h5 className="card-title display-3 fw-bolder mb-0 text-color-white">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHEACK OUT ALL THE TREANDS......</p>

                    </div>
                   
                </div>
    </div>
    
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually">Next</span>
  </button>
</div>




{/* ------------------------------------------------------------------------------------------------------------------------------------------------- */}







<Product/>


    </div>
    
  )
}

export default Home
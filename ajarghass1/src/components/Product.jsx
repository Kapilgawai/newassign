import React from 'react'
import {DATA} from '../Data'
import { NavLink } from 'react-router-dom';












const Product = () => {


  const cardItem = (item) => {
    return (


      <div class="card my-5 py-4" key={item.id} style={{ width: "18rem" }}>
        <img src={item.image} class="card-img-top" alt={item.title}  height={"250px"} width={"300px"} />
        <div class="card-body text-center">
        <h5 className="card-title mb-0">{item.title.substring(0, 12)}</h5>
          <p className="lead display-6 my-4">${item.price}</p>
          <NavLink to={`/products/${item.id}`} class="btn btn-outline-dark">Buy Now</NavLink>
        </div>
      </div>


    );
  }



  return (
    <div>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {DATA.map(cardItem)}
        </div>
      </div>

    </div>
  )
}

export default Product





// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// // import { addCart } from "../redux/action";
// // import {addCart}
// import { addCart } from "..";
// import { NavLink, useParams } from "react-router-dom";
// import Skeleton from "react-loading-skeleton";








// const Product = () => {

//     const { id } = useParams();
//     const [product, setProduct] = useState([]);
//     const [loading, setLoading] = useState(false);


//     const dispatch = useDispatch ();
//     const addProduct = (product)=>{
//         dispatch(addCart(product));
//     }




//     useEffect(() => {
//         const getProduct = async () => {
//             setLoading(true);
//             const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//             setProduct(await response.json());
//             setLoading(false);

//         }
//         getProduct();
//     }, []);


//     const Loading = () => {
//         return (
//             <>
//                 <div className="col-md-6">

//                       <Skeleton height={400}/>

//                 </div>
//                 <div className="col-md-6" style={{lineHeight:2}}>
//                     <Skeleton height={50} width={300}/>
//                     <Skeleton height={75}/>
//                     <Skeleton height={25} width={150}/>
//                     <Skeleton height={50}/>
//                     <Skeleton height={150}/>
//                     <Skeleton height={50} width={100}/>
//                     <Skeleton height={50} width={100} style={{marginLeft:6}}/>






//                 </div>
//             </>
//         )
//     }



//     const ShowProduct = () => {
//         return (
//             <>
//                 <div className="col-md-6">

//                     <img src={product.image} alt={product.title} height={"400px"} width={"400px"} />
//                 </div>
//                 <div className="col-md-6">

//                     <h4 className="text-uppercase text-black-50">

//                         {product.category}

//                     </h4>

//                     <h1 className="display-6" >{product.title}</h1>
//                     <p className="lead fw-bolder">
//                         Rating{product.rating && product.rating.rate}
//                         <i className="fa fa-star"></i>
//                     </p>
//                     <h3 className="display-6 fw-bold my-4">

//                         ${product.price}

//                     </h3>
//                     <p className="lead">{product.description}</p>
//                     <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>
//                         Add to Cart
//                     </button>
//                     <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
//                         Go to Cart
//                     </NavLink>
//                 </div>

//             </>
//         )
//     }


//     return (
//         <div>


//             <div className="container py-5">
//                 <div className="row py-5">
//                     {loading ? <Loading /> : <ShowProduct />}
//                 </div>
//             </div>


//         </div>
//     );
// }

// export default Product;





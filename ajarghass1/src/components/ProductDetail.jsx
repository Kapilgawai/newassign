import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { DATA } from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const [quantity, setQuantity] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNo: '',
    cardHolderName: '',
    expiryDate: ''
  });

  const proid = useParams();
  const proDetail = DATA.filter(x => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInstantBuy = () => {
    setShowForm(true);
  };

  const handleChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform action with card details
    console.log("Card Details:", cardDetails);
    // Reset form and close it
    setCardDetails({
      cardNo: '',
      cardHolderName: '',
      expiryDate: ''
    });
    setShowForm(false);
    setShowPopup(true);
  };

  const handleCancel = () => {
    // Reset form and close it
    setCardDetails({
      cardNo: '',
      cardHolderName: '',
      expiryDate: ''
    });
    setShowForm(false);
    setShowPopup(false);
  };

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.image} alt={product.title} height="400px" width="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className='lead'>{product.description}</p>
            <div className="size-chart">
              <button className="size">S</button>
              <button className="size">M</button>
              <button className="size">L</button>
              <button className="size">XL</button>
              <button className="size">XXL</button>
            </div>
            <div className="quantity-buttons">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={() => handleCart(product)} className="btn btn-outline-dark my-3">
              {cartBtn}
            </button>
            <button onClick={handleInstantBuy} className="btn btn-outline-dark my-3">
              Instant Buy
            </button>

            {showForm && (
              <form onSubmit={handleSubmit} className="form-middle">
                <div className="form-group">
                  <label htmlFor="cardNo">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNo"
                    name="cardNo"
                    value={cardDetails.cardNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardHolderName">Cardholder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardHolderName"
                    name="cardHolderName"
                    value={cardDetails.cardHolderName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">VALIDITY</label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryDate"
                    name="expiryDate"
                    value={cardDetails.validity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-outline-dark">
                  Proceed to Checkout
                </button>
                <button type="button" className="btn btn-outline-dark" onClick={handleCancel}>
                  Cancel
                </button>
              </form>
            )}

            {showPopup && (
              <div className="popup">
                <p className="popup-message">Thank you for shopping with us!</p>
                <button className="btn btn-outline-dark" onClick={handleCancel}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

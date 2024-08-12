/* eslint-disable no-unused-vars */
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Item({ description, price, title, image, id }) {
  const { getItemQuantity, addItem, deleteItem } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <div className="border-2 rounded border col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-3">
        <img
          className="ms-5 mt-2"
          src={image}
          alt="Card image cap"
          width={"100px"}
          height={"150vh"}
        />

        <div className="bg-white">
          <span className="fw-bold">{title}</span>
          <p className="">${description.slice(0, 100)}</p>
          <div className="text-warning">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="d-flex justify-content-between">
            <p className="fw-bold ms-1">${price}</p>{" "}
            <Link className="me-3" to={`/details/${id}`}>
              Details
            </Link>
          </div>
        </div>

        <div className="text-center">
          {!quantity ? (
            <button
              href="#"
              className="btn btn-primary mb-3 fw-bold w-75"
              onClick={() => {
                addItem(id);
              }}
            >
              Add To Cart
            </button>
          ) : (
            <button
              href="#"
              className="btn btn-danger mb-3 fw-bold w-100"
              onClick={() => {
                deleteItem(id);
              }}
            >
              Remove From Cart
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Item;

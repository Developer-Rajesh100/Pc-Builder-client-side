import React from "react";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ product }) => {
    const { _id, image, name, description, price, quantity, minimumQuantity } =
        product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/productdetail/${_id}`);
    };
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="text-justify">{description}</p>
                <p>
                    {" "}
                    <strong>Price:</strong> <i>$ {price} </i>{" "}
                </p>
                <p>
                    {" "}
                    <strong>Available Quantity:</strong> <i> {quantity} </i>{" "}
                </p>
                <p>
                    {" "}
                    <strong>Minimum Order Quantity:</strong>{" "}
                    <i> {minimumQuantity} </i>{" "}
                </p>
                <div class="card-actions justify-end">
                    <button
                        onClick={() => navigateToProductDetail(_id)}
                        class="btn bg-purple-400 border-0 hover:bg-purple-600"
                    >
                        Add to Card
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

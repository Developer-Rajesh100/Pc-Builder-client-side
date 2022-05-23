import React from "react";

const SingleProduct = ({ product }) => {
    const { image, name, description, price, quantity, minimumQuantity } =
        product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p className="text-justify">{description}</p>
                <p>
                    {" "}
                    <strong>Price:</strong> <i> {price} </i>{" "}
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
                    <button class="btn btn-primary">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;

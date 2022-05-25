import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { productdetailId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/product/${productdetailId}`;
        fetch(url)
            .then((req) => req.json())
            .then((data) => setProduct(data));
    }, []);
    const { image, name, description, price, quantity, minimumQuantity } =
        product;
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row">
                <img src={image} class="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-5">
                    <h1 class="text-5xl font-bold">{name}</h1>
                    <p class="py-6 text-xl">{description}</p>
                    <p className="text-xl">
                        <strong>Price: </strong> <i>${price}</i>
                    </p>
                    <p className="text-xl">
                        <strong>Quantity: </strong> <i>{quantity}</i>
                    </p>
                    <p className="text-xl">
                        <strong>MinimumQuantity: </strong>{" "}
                        <i>{minimumQuantity}</i>
                    </p>
                    <button class="btn btn-primary mt-5">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

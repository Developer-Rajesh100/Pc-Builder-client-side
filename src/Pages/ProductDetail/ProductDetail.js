import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
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
                    <form
                        className="flex flex-col items-center"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            placeholder="Address"
                            className="drop-shadow-2xl my-4 w-1/2 px-3 py-2 rounded-lg"
                            type="text"
                            {...register("Address")}
                        />
                        <input
                            placeholder="Quantity"
                            className="drop-shadow-2xl my-4 w-1/2 px-3 py-2 rounded-lg"
                            type="number"
                            {...register("quantity")}
                        />
                        <input
                            placeholder="Contract Number"
                            className="drop-shadow-2xl my-4 w-1/2 px-3 py-2 rounded-lg"
                            type="number"
                            {...register("number")}
                        />
                        <input
                            className="btn btn-sm bg-purple-400 border-0 hover:bg-purple-600 w-1/4"
                            type="submit"
                            value="Buy Now"
                        />
                    </form>
                    {/* <button class="btn btn-primary mt-5">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

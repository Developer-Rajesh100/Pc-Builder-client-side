import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../FirebaseInit";

const ProductDetail = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

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
    const { _id, image, name, description, price, quantity, minimumQuantity } =
        product;
    // const order = {
    //     productID: _id,
    //     name: name,
    //     quantity: quantity,
    //     user: user?.email,
    // };
    // fetch('http://localhost:5000/order', {
    //     method: 'POST',
    //     headers: {
    //         'content-type' : 'application/json'
    //     },
    //     body: JSON.stringify(order)
    // })
    // .then(res => res.json())
    // .then(data => {

    // })
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
                            value={user?.displayName}
                            className="drop-shadow-2xl my-4 w-1/2 px-3 py-2 rounded-lg"
                            type="text"
                            disabled
                            {...register("name")}
                        />
                        <input
                            value={user?.email}
                            className="drop-shadow-2xl my-4 w-1/2 px-3 py-2 rounded-lg"
                            type="email"
                            disabled
                            {...register("email")}
                        />
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

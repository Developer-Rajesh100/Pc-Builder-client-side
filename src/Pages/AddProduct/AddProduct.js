import { data } from "autoprefixer";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const details = {
            image: data.image,
            name: data.name,
            description: data.description,
            price: data.price,
            quantity: data.quantity,
            minimumQuantity: data.minimumQuantity,
        };

        if (details) {
            navigate("/");
            Swal.fire({
                title: "Successfully Added",
                icon: "success",
                confirmButtonText: "Cool",
            });
        }
        console.log(details);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(details),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        <div className="h-screen">
            <h1 className="text-center text-5xl font-semibold my-12">
                Add Product
            </h1>{" "}
            <form
                className="flex flex-col items-center drop-shadow-2xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="text"
                    placeholder="Product Image Url"
                    required
                    className="drop-shadow-lg my-2 w-full py-1 px-4 red rounded-lg"
                    {...register("image")}
                />
                <input
                    type="text"
                    placeholder="Product Name"
                    required
                    className="drop-shadow-lg my-2 w-full py-1 px-4 red rounded-lg"
                    {...register("name")}
                />

                <input
                    className="drop-shadow-lg my-2 w-full py-1 px-4 red rounded-lg"
                    type="number"
                    placeholder="Price"
                    required
                    {...register("price")}
                />
                <input
                    className="drop-shadow-lg my-2 w-full py-1 px-4 red rounded-lg"
                    type="number"
                    placeholder="Quantity"
                    required
                    {...register("quantity")}
                />
                <input
                    className="drop-shadow-lg my-2 w-full py-1 px-4 red rounded-lg"
                    type="number"
                    placeholder="Minimum Quantity"
                    required
                    {...register("minimumQuantity")}
                />
                <textarea
                    type="text"
                    className="drop-shadow-lg my-2 w-full py-1 px-4 red rounded-lg"
                    placeholder="Product Short Description"
                    required
                    {...register("description")}
                />
                <input
                    className="drop-shadow-lg w-full mt-3 bg-purple-400 hover:bg-purple-600 hover:font-bold hover:text-white py-1 px-4 red rounded-lg"
                    type="submit"
                    value="Add Product"
                />
            </form>
        </div>
    );
};

export default AddProduct;

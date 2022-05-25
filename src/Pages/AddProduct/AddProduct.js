import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application.json",
            },
            body: JSON.stringify(data),
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
                className="flex flex-col items-center drop-shadow-2xl p-"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    type="text"
                    placeholder="Product Image Url"
                    className="drop-shadow-lg my-2 w-1/2 py-1 px-4 red rounded-lg"
                    {...register("image")}
                />
                <input
                    type="text"
                    className="drop-shadow-lg my-2 w-1/2 py-1 px-4 red rounded-lg"
                    placeholder="Product Name"
                    {...register("name")}
                />

                <input
                    className="drop-shadow-lg my-2 w-1/2 py-1 px-4 red rounded-lg"
                    type="number"
                    placeholder="Price"
                    {...register("price")}
                />
                <input
                    className="drop-shadow-lg my-2 w-1/2 py-1 px-4 red rounded-lg"
                    type="number"
                    placeholder="Quantity"
                    {...register("quantity")}
                />
                <input
                    className="drop-shadow-lg my-2 w-1/2 py-1 px-4 red rounded-lg"
                    type="number"
                    placeholder="Minimum Quantity"
                    {...register("minimumQuantity")}
                />
                <textarea
                    type="text"
                    className="drop-shadow-lg my-2 w-1/2 py-1 px-4 red rounded-lg"
                    placeholder="Product Short Description"
                    {...register("description")}
                />
                <input
                    className="drop-shadow-lg w-1/6 mt-3 bg-purple-400 hover:bg-purple-600 hover:font-bold hover:text-white py-1 px-4 red rounded-lg"
                    type="submit"
                    value="Add Product"
                />
            </form>
        </div>
    );
};

export default AddProduct;

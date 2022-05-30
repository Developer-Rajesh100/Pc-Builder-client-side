import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://agile-springs-55744.herokuapp.com/product")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    products.length = 3;
    return (
        <div>
            <div>
                <h1 className="text-5xl text-center font-semibold mt-48 mb-28">
                    Products
                </h1>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mb-48 gap-10">
                {products.map((product) => (
                    <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>
                ))}
            </div>
        </div>
    );
};

export default Products;

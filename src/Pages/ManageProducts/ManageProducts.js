import React from "react";
import useProducts from "../../hooks/useProsucts";

const ManageProducts = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure???");
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = products.filter(
                        (product) => product._id !== id
                    );
                    setProducts(remaining);
                });
        }
    };
    return (
        <div className="h-screen">
            <h1>Manage Your Products...</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <div key={product._id}>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>
                                        {" "}
                                        <img
                                            className="w-20"
                                            src={product.image}
                                            alt=""
                                        />{" "}
                                    </td>
                                    <td> {product.name} </td>
                                    <td> $ {product.price} </td>
                                    <td> {product.quantity} </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(product._id)
                                            }
                                            class="btn btn-sm bg-red-400 hover:bg-red-600 py-0 border-0"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </div>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;

import React from "react";

const Mecanic = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://i.ibb.co/c3nq03s/pc-build.jpg"
                    class="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 class="text-5xl font-bold">Build Your Dream PC</h1>
                    <p class="py-6">
                        Get your dream PC built either at our store or online
                        using our build your PC page and get the complete setup
                        delivered at your door step.
                    </p>
                    <button class="btn bg-purple-400 border-0">
                        Contract Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mecanic;

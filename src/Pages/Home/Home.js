import React from "react";
import Banner from "./Banner/Banner";
import Business from "./Business/Business";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div className="mx-12">
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
        </div>
    );
};

export default Home;

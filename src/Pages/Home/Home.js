import React from "react";
import Banner from "./Banner/Banner";
import Business from "./Business/Business";
import Mecanic from "./Mecanic/Mecanic";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div className="mx-12">
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Mecanic></Mecanic>
        </div>
    );
};

export default Home;

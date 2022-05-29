import React from "react";
import Banner from "./Banner/Banner";
import Business from "./Business/Business";
import Extra from "./Extra/Extra";
import Mecanic from "./Mecanic/Mecanic";
import Products from "./Products/Products";

const Home = () => {
    return (
        <div className="mx-12">
            <Banner></Banner>
            <Products></Products>
            <Mecanic></Mecanic>
            <Extra></Extra>
            <Business></Business>
        </div>
    );
};

export default Home;

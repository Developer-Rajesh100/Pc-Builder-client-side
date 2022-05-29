import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div class="carousel w-full banner">
            <div id="slide1" class="carousel-item relative w-full h-full">
                <img src="https://i.ibb.co/h7yjD59/banner.png" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" class="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide2" class="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/ydH1P54/banner-4.png"
                    class="w-full"
                />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide3" class="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide3" class="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/swfb3VZ/banner-2.png"
                    class="w-full"
                />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide4" class="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
            <div id="slide4" class="carousel-item relative w-full">
                <img
                    src="https://i.ibb.co/HF4M1gw/banner-3.jpg"
                    class="w-full"
                />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">
                        ❮
                    </a>
                    <a href="#slide1" class="btn btn-circle">
                        ❯
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;

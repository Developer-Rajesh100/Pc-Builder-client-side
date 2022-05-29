import React from "react";

const Extra = () => {
    return (
        <div className="mb-12">
            <h1 className=" text-4xl text-center mb-16 font-semibold">
                Our Mechanic
            </h1>
            <a
                target="_blank"
                href="https://www.linkedin.com/in/rajesh-mondal-51544922a/"
            >
                {" "}
                <div className="flex justify-center">
                    <img
                        className="rounded-full border-8"
                        src="https://i.ibb.co/G511MVS/build-pc.jpg"
                        alt=""
                    />
                </div>
            </a>
        </div>
    );
};

export default Extra;

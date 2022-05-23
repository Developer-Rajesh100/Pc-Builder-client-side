import React from "react";

const Business = () => {
    return (
        <section>
            <h1 className="text-center mb-8 text-4xl font-semibold">
                Business Summary
            </h1>

            <div className="flex justify-center mb-48">
                <div class="stats shadow">
                    <div class="stat flex flex-col items-center">
                        <div class="stat-title text-3xl font-semibold">
                            Clients
                        </div>
                        <div class="stat-figure text-secondary my-3">
                            <img
                                className="w-16"
                                src="https://i.ibb.co/jzY8D5k/user-icon.png"
                                alt=""
                            />
                        </div>
                        <div class="stat-value">9,200</div>
                    </div>

                    <div class="stat flex flex-col items-center">
                        <div class="stat-title text-3xl font-semibold">
                            Downloads
                        </div>
                        <div class="stat-figure text-secondary my-5">
                            <img
                                className="w-16"
                                src="https://i.ibb.co/1rkMmr9/Download-icon.png"
                                alt=""
                            />
                        </div>
                        <div class="stat-value">31K</div>
                    </div>

                    <div class="stat flex items-center flex-col">
                        <div class="stat-title text-3xl font-semibold">
                            Countries
                        </div>
                        <div class="stat-figure text-secondary my-3">
                            <img
                                className="w-16"
                                src="https://i.ibb.co/ZMKbnvx/countries.png"
                                alt=""
                            />
                        </div>
                        <div class="stat-value">737</div>
                    </div>

                    <div class="stat flex items-center flex-col">
                        <div class="stat-title text-3xl font-semibold">
                            Projects
                        </div>
                        <div class="stat-figure text-secondary my-3">
                            <img
                                className="w-24"
                                src="https://i.ibb.co/92Rj0Yd/project-icon.png"
                                alt=""
                            />
                        </div>
                        <div class="stat-value">1733</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Business;

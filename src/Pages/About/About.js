import React from "react";

const About = () => {
    return (
        <section className="h-screen flex items-center justify-center my-32">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="rounded-full"
                        src="https://i.ibb.co/V3pJw1P/me.png"
                        alt="Shoes"
                    />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">রাজেশ মন্ডল</h2>
                    <p className="text-justify">
                        আমি রাজেশ, একজন একাদশ শ্রেনির ছাত্র এবং একজন জুনিয়র ওয়েব
                        ডেভেলপার। আমি গত একবছর ধরে ওয়েব ডেভেলপমেন্ট শিখে চলেছি
                        এবং গত চার মাস ধরে প্রোগ্রামিং হিরো টিমের কাছ থেকে
                        ট্রেনিং নিচ্ছি। আপাতত আমার Html, Html5, Css, Css3,
                        Bootstrap5, Tailwind, Javascript, Es6, React js, React
                        Router, Firebase, Express js, Node js, MongoDB টেকনোলজি
                        শেখা হয়ে গিয়েছে এবং পরবর্তী তিন মাসের মধ্যে Redux, Next
                        js Typescript ইত্যাদি টেকনোলজি শেখা আমার লক্ষ্য।
                    </p>
                    <div class="card-actions justify-end mt-3">
                        <button class="btn bg-purple-400 border-0 hover:bg-purple-600">
                            Visit Github
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

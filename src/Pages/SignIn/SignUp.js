import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import {
    useCreateUserWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../FirebaseInit";
import Swal from "sweetalert2";
import { sendEmailVerification } from "firebase/auth";
import Loading from "../Shared/Loading/Loading";
import useToken from "../../hooks/useToken";

const SignUp = () => {
    //GOOGLE SIGN UP
    const [signInWithGoogle, Guser, Gloading, Gerror] =
        useSignInWithGoogle(auth);
    // SIGN IN WITH EMAIL AND PASSWORD
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    //VALIDATION

    const [token] = useToken(Guser || user);

    let signinError;
    if (Gerror || error) {
        signinError = (
            <p className="text-red-500 text-center">
                <small>Error: {error?.message || Gerror?.message}</small>
            </p>
        );
    }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    if (Guser || user) {
        // navigate("/");
    }
    const Swal = require("sweetalert2");
    if (Guser || user) {
        Swal.fire({
            title: "Successful",
            text: "Sign Up Successful",
            icon: "success",
            confirmButtonText: "OK",
        });
    }

    if (token) {
        navigate("/");
    }

    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        verifyEmail();
        // console.log("Update Done");
    };
    if (Gloading || loading) {
        return <Loading></Loading>;
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser).then(() => {});
    };
    return (
        <section className="h-screen flex items-center justify-center">
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 className="text-3xl font-semibold text-center mb-5">
                        Sign Up
                    </h1>
                    <form onSubmit={handleSubmit(onSubmit)} action="">
                        <input
                            type="text"
                            placeholder="Name"
                            class="input input-bordered w-full max-w-xs mb-3"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is Required",
                                },
                            })}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            class="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is Required",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Inout a Valid Email",
                                },
                            })}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            class="input input-bordered w-full max-w-xs my-3"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer",
                                },
                            })}
                        />
                        {signinError}
                        <input
                            type="submit"
                            value="Sign Up"
                            class="input input-bordered w-full max-w-xs bg-purple-400 hover:bg-purple-600 text-white font-semibold mt-3"
                        />
                        <p className="mt-3">
                            Already Have an Account?{" "}
                            <Link className="text-blue-500" to="/signin">
                                sign In
                            </Link>{" "}
                        </p>
                        <div class="divider">OR</div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => signInWithGoogle()}
                                className="flex items-center border-2 w-auto py-2 px-8 rounded-lg"
                            >
                                {" "}
                                <div className="flex">
                                    {" "}
                                    <img
                                        className="w-7 mr-3"
                                        src="https://i.ibb.co/Jr7RHrt/google-icon.png"
                                        alt=""
                                    />
                                </div>{" "}
                                <p>CONTINUE WITH GOOGLE</p>
                            </button>
                        </div>
                    </form>
                    {/* <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div> */}
                </div>
            </div>
        </section>
    );
};

export default SignUp;

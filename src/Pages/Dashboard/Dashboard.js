import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../FirebaseInit";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input
                id="dashboard-sidebar"
                type="checkbox"
                class="drawer-toggle"
            />
            <div class="drawer-content flex flex-col items-center">
                <h2 className="text-5xl font-semibold text-purple-700">
                    Dashboard
                </h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">Profile</Link>
                    </li>

                    {/* ADMIN */}

                    {admin && (
                        <li>
                            <Link to="/dashboard/makeadmin">Make Admin</Link>
                        </li>
                    )}
                    {admin && (
                        <li>
                            <Link to="/dashboard/manageproduct">
                                Manage Product
                            </Link>
                        </li>
                    )}
                    {admin && (
                        <li>
                            <Link to="/dashboard/addproduct">Add Product</Link>
                        </li>
                    )}

                    {/* USERS */}

                    {!admin && (
                        <li>
                            <Link to="/dashboard/myreview">Review</Link>
                        </li>
                    )}
                    {!admin && (
                        <li>
                            <Link to="/dashboard/myorders">Orders</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

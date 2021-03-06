import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navebar from "./Pages/Shared/Navebar/Navebar";
import Footer from "./Pages/Shared/Footer/Footer";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignIn/SignUp";
import About from "./Pages/About/About";
import Blogs from "./Pages/Blogs/Blogs";
import RequireAuth from "./Pages/RequireAuth";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import NotFound404 from "./Pages/Shared/NotFound404/NotFound404";
import AddProduct from "./Pages/AddProduct/AddProduct";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import MyOrders from "./Pages/Dashboard/MyOrders";
import AddReview from "./Pages/Dashboard/AddReview";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import RequireAdmin from "./Pages/SignIn/RequreAdmine";

function App() {
    return (
        <div>
            <Navebar></Navebar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/signin" element={<SignIn></SignIn>}>
                    {" "}
                </Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
                {/* PROCTED ROUTE */}
                <Route
                    path="/productdetail/:productdetailId"
                    element={
                        <RequireAuth>
                            <ProductDetail></ProductDetail>
                        </RequireAuth>
                    }
                ></Route>
                {/* <Route
                    path="/addproduct"
                    element={
                        <RequireAuth>
                            <AddProduct></AddProduct>
                        </RequireAuth>
                    }
                ></Route> */}
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard></Dashboard>
                        </RequireAuth>
                    }
                >
                    {/* NASTED ROUTE */}
                    <Route index element={<MyProfile></MyProfile>}></Route>
                    <Route
                        path="myorders"
                        element={<MyOrders></MyOrders>}
                    ></Route>
                    <Route
                        path="makeadmin"
                        element={<MakeAdmin></MakeAdmin>}
                    ></Route>
                    <Route
                        path="myreview"
                        element={<AddReview></AddReview>}
                    ></Route>
                    <Route
                        path="manageproduct"
                        element={<ManageProducts></ManageProducts>}
                    ></Route>
                    <Route
                        path="addproduct"
                        element={<AddProduct></AddProduct>}
                    ></Route>
                </Route>
                <Route path="*" element={<NotFound404></NotFound404>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;

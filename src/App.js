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

function App() {
    return (
        <div className="mx-20">
            <Navebar></Navebar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/signin" element={<SignIn></SignIn>}>
                    {" "}
                </Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/blogs" element={<Blogs></Blogs>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
    );
}

export default App;

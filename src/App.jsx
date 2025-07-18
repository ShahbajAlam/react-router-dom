import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;

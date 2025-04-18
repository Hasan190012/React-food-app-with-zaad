import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import { useState } from "react";

const App = () => {
    const [cart, setCart] = useState(5);
    return (
        <div className="container">
            <Header cart={cart} setCart={setCart} />
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about"  element={ <About />} />
                <Route path="/contact"  element={ <Contact />} />
                <Route path="/cart"  element={ <Cart  setCart={setCart} />} />

            </Routes>
        </div>
    )
}

export default App;
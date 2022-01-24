import './App.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ProductState from './context/product/ProductState';
import Addproduct from './components/Addproduct';
import Cart from './components/Cart';
import CartState from './context/cart/CartState';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <ProductState>
        <CartState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/addproduct" element={<Addproduct />}></Route>
              <Route exact path="/cart" element={<Cart />}></Route>
              <Route exact path="/login" element={<Login />}></Route>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </Router>
        </CartState>
      </ProductState>
    </>
  );
}

export default App;

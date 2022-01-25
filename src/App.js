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
import Alert from './components/Alert'
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>
      <ProductState>
        <CartState>
          <Router>
            <Navbar />
            <Alert alert={alert} />
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/addproduct" element={<Addproduct showAlert={showAlert}/>}></Route>
              <Route exact path="/cart" element={<Cart showAlert={showAlert}/>}></Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
            </Routes>
          </Router>
        </CartState>
      </ProductState>
    </>
  );
}

export default App;

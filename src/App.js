import './App.css';
import { Home } from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import ProductState from './context/product/ProductState';
import Addproduct from './components/Addproduct';

function App() {
  return (
    <>
      <ProductState>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/addproduct" element={<Addproduct/>}></Route>
          </Routes>
        </Router>
      </ProductState>
    </>
  );
}

export default App;

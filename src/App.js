import {BrowserRouter as Router } from 'express';
import './App.css';
import Home from "components/Home.js"
import ProductDetails from "components/ProductDetails.js"
import Cart from "components/Cart.js"

function App() {

  return (
      <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
          <Route path="/Card" element={<Cart/>}/>
        </Routes>
    </Router>
      </div>
  );
}

export default App;

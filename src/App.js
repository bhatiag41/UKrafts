import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from "./components/Home.js"
import ProductDetails from "./components/ProductDetails.js"
import Cart from "./components/Cart.js"
import Demo from './components/Demo'

function App() {

  return (
      <div className="App">
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ProductDetails" element={<ProductDetails/>}/>
          <Route path="/Card" element={<Cart/>}/>
            <Route path='/Demo' element={<Demo/>}/>
        </Routes>
    </Router>
      </div>
  );
}

export default App;

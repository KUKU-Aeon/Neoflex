import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header'
import Footer from './Components/Footer'
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>}>

          </Route>

          <Route path="/cart" element={<CartPage/>}>

          </Route>

        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
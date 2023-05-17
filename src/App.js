import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './NavComponents/Home';
import About from './NavComponents/About';
import Contact from './NavComponents/Contact';
import icon from './NavComponents/icon.ico'
import cart from './NavComponents/cart.png'
import Cart from './Cart/Cart';

function App() {
  return (
    <div className='test'>
      <Router>
        <nav>
          <Link to="/" className='link'><img src={icon} alt="company logo" className='logo'/></Link>
          <Link to="about" className='link'>About</Link>
          <Link to="contact" className='link'>Contact</Link>
          <Link to="cart" className='link'><img src={cart} alt="shopping cart" className='logo'/></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="cart" element={<Cart/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

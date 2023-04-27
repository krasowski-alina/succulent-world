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

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="home" className='link'><img src={icon} alt="company logo" className='logo'/></Link>
          <Link to="about" className='link'>About</Link>
          <Link to="contact" className='link'>Contact</Link>
        </nav>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;

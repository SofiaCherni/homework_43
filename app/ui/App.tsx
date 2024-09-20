import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
import { About, AlbumDetails, AlbumList, Home } from '../../pages/index';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <nav className='nav-menu'>
        <ul className='menu'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/albums">Albums</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<AlbumList />} />
        <Route path="/albums/:id/photos" element={<AlbumDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

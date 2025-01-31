import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import downloadImage2 from './images/download (2).jpeg';
import downloadImage3 from './images/download (3).jpeg';
import downloadImage4 from './images/download (4).jpeg';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => setShowPopup(!showPopup);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Harjot Kaur</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Hero Section</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#three-columns">Three-Column Section</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary" onClick={handlePopup}>Copyright</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section d-flex justify-content-center align-items-center text-center" style={{ backgroundImage: `url('https://via.placeholder.com/1500x800?text=Hero+Image')`, height: '100vh', backgroundSize: 'cover' }}>
        <div className="hero-text">
          <h1>Welcome to Harjot's Website</h1>
          <p>Discover the Rich Heritage of Punjab</p>
          <p>"From ancient traditions to modern triumphs, Punjab's history is a tapestry of resilience, culture, and pride."</p>
        </div>
      </section>

      {/* Three-Column Section */}
      <section id="three-columns" className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <img src={downloadImage4} alt="Image 1" className="img-fluid" />
            <h3>Jallianwala Bagh Memorial</h3>
            <p>The historic Jallianwala Bagh Memorial marks the site of the 1919 massacre, where the courage and sacrifice of the people of Punjab have left an indelible mark on India's struggle for freedom.</p>
          </div>
          <div className="col-md-4">
            <img src={downloadImage3} alt="Image 2" className="img-fluid" />
            <h3>Punjab's Wheat Fields</h3>
            <p>Known as the "Granary of India," Punjab’s vast wheat fields symbolize the agricultural backbone of the region, which has fed millions over the years and played a crucial role in India's economy.</p>
          </div>
          <div className="col-md-4">
            <img src={downloadImage2} alt="Image 3" className="img-fluid" />
            <h3>The Golden Phulkari Embroidery</h3>
            <p>Phulkari, the traditional Punjabi embroidery, is a beautiful representation of Punjab's artistic culture, with vibrant patterns that tell stories of tradition, family, and heritage.</p>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p>&copy; 2025 Harjot Kaur. All rights reserved.</p>
      </footer>

      {/* Copyright Popup */}
      {showPopup && (
        <div className="popup-overlay" onClick={handlePopup}>
          <div className="popup-content">
            <h3>Copyright Information</h3>
            <p>&copy; 2025 Harjot Kaur. All rights reserved.</p>
            <button className="btn btn-secondary" onClick={handlePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

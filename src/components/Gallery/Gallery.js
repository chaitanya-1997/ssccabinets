import React, { useState } from 'react';
import './Gallery.css'; // Make sure CSS is updated accordingly
import Myfooter from '../MyHome/Myfooter/Myfooter';
import img1 from './galleryimg/gallery1.png'
import img2 from './galleryimg/gallery2.png'
import img3 from './galleryimg/gallery3.png'
import img4 from './galleryimg/gallery4.png'
import img5 from './galleryimg/gallery5.png'
import img6 from './galleryimg/gallery6.png'

import img7 from './galleryimg/gallery7.png'
import img8 from './galleryimg/gallery8.jpeg'

import img9 from './galleryimg/gallery9.png'
import img10 from './galleryimg/gallery10.png'
import img11 from './galleryimg/gallery11.jpeg'
import img12 from './galleryimg/gallery12.jpeg'
import img13 from './galleryimg/gallery13.jpeg'
import img14 from './galleryimg/gallery14.png'

import img15 from './galleryimg/gallery15.png'
import img16 from './galleryimg/gallery16.png'


import img17 from './galleryimg/gallery17.png'
import img18 from './galleryimg/gallery18.png'

import img19 from './galleryimg/gallery19.png'
import img20 from './galleryimg/gallery20.png'
import img21 from './galleryimg/gallery21.png'
import img22 from './galleryimg/gallery22.png'
import img23 from './galleryimg/gallery23.png'
import img24 from './galleryimg/gallery24.jpeg'

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('ShakerStyle');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const categories = {
    ShakerStyle: [
      img1,
      img2,
      img3,
      img4
    ],
    Distressed: [
        img5,
      img6,
      img7,
      img8
    ],
    RaisedPanel: [
     img9,
      img10,
      img11,
      img12
    ],
    Slab: [
      img13,
      img14,
      img15,
      img16
    ],
    GlassFront: [
      img17,
      img18,
    img19,
      
      img20
    ],
    Floating: [
     img21,
      img22,
      img23,
      img24
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }; 

  const openModal = (imgUrl) => {
    setSelectedImage(imgUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="gallery-container">
      {/* Header Section */}
      <header className="header-section">
           <h2 className="section-title">Gallery</h2>
    
        <p>Affordable Elegance for Every Home</p>
      </header>

      {/* Hero Image Section */}
      <section className="hero-image-section">
        <img
          src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "
          alt="Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </section>

      {/* Gallery Content Section */}
      <section className="gallery-content-section">
        <div className="gallery-box">
          {/* Left Side - Category List */}
          <div className="category-list">
            <h3>Categories</h3>
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`category-link ${selectedCategory === category ? 'active' : ''}`}
              >
                {category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </button>
            ))}
          </div>

          {/* Right Side - Image Grid */}
          <div className="image-grid">
            {categories[selectedCategory].map((imgUrl, index) => (
              <div
                key={index}
                className="image-item"
                style={{
                  backgroundImage: `url(${imgUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onClick={() => openModal(imgUrl)}
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      {modalOpen && (
        <div className="modals-overlay" onClick={closeModal}>
          <div className="modals-content" onClick={(e) => e.stopPropagation()}>
            <span className="modals-close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Enlarged view" className="modals-img" />
          </div>
        </div>
      )}

     
    </div>
     <Myfooter />
    </>
  
  );
};

export default Gallery;
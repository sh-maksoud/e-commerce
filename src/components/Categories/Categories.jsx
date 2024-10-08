

import { Link } from 'react-router-dom';
import './Categories.css';
import men from '../../assets/men.jpeg';
import women from '../../assets/women.jpeg';
import jewelery from '../../assets/jewelery.jpeg';
import electronics from '../../assets/electronics.jpeg'; 
import defaultImage from '../../assets/default-image.jpeg';

const Categories = ({ categories }) => {
  const categoryImages = {
    electronics: electronics,
    jewelery: jewelery, 
    "men's clothing": men,
    "women's clothing": women,
  };

  const handleScrollToTop = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <section className="categories-section">
      <div className="categories-container">
        <h1 className="categories-title">Categories</h1>
        <div className="categories-grid">
          {categories && categories.length > 0 ? (
            categories.map((category, index) => {
              const normalizedCategory = category.toLowerCase();
              const imageSrc = categoryImages[normalizedCategory] || defaultImage;
              
              return (
                <div key={index} className="category-item">
                  <Link 
                    to={`/shop/${normalizedCategory.replace(/ /g, '-')}`} 
                    onClick={handleScrollToTop} 
                  >
                    <div className="category-content">
                      <img
                        src={imageSrc}
                        alt={`${category} Category`}
                        className="category-image"
                      />
                      <h3 className="category-title">{category}</h3>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>No categories available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;

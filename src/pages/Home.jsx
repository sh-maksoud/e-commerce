


import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import Categories from '../components/Categories/Categories';
import useStore from '../store/useStore';
import useThemeStore from '../store/useThemeStore';
import Slider from 'react-slick';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const { fetchProducts, fetchCategories, products } = useStore();
  const [categories, setCategories] = useState([]);
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchProducts();
        await fetchCategories();
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setCategories([]); 
      }
    };

    fetchData();
  }, [fetchProducts, fetchCategories]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleProductClick = (productId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/product/${productId}`);
  };

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <Header />
      <Categories categories={categories} />
      
      <div className="carousel-section">
        <h2>Featured Products</h2>
        {products.length > 0 ? (
          <Slider {...carouselSettings}>
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="carousel-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * product.id, duration: 0.5 }}
                onClick={() => handleProductClick(product.id)} 
              >
                <motion.img 
                  src={product.image} 
                  alt={product.title} 
                  whileHover={{ scale: 1.05 }} 
                  className="carousel-image"
                />
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {product.title}
                </motion.p>
              </motion.div>
            ))}
          </Slider>
        ) : (
          <p>No products available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default Home;

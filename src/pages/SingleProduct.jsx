
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';
import Modal from '../pages/Modal/Modal';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import './SingleProduct.css';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const addToCart = useStore((state) => state.addToCart);
  const openSidebar = useStore((state) => state.openSidebar);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
        setSelectedImage(json.image);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    openSidebar(); 
    navigate('/cart'); 
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <div className="product-page">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.title },
        ]}
      />

      <div className="product-content">
        <div className="product-images">
          <div className="thumbnail-images">
            <img
              src={product.image}
              alt="Thumbnail 1"
              onClick={handleImageClick} 
            />
          </div>
          <img className="main-image" src={selectedImage} alt={product.title} onClick={handleImageClick} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="price">₹ {product.price}</p>
          <div className="ratings">
            <span>⭐⭐⭐⭐⭐</span>
            <span>({product.rating?.count} reviews)</span>
          </div>
          <p>{product.description}</p>

          <div className="quantity-control">
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <button className="add-cart" onClick={handleAddToCart}>Add To Cart</button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onClose={closeModal} product={product} />
    </div>
  );
};

export default SingleProduct;

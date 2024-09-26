







import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useStore from '../store/useStore';
// import useauth from '../hooks/useauth';
import './Shop.css';
import logo from '../../src/assets/logo.png';
import { FaShareAlt } from 'react-icons/fa'; 

const ITEMS_PER_PAGE = 10;

const Shop = () => {
  const { category } = useParams();
  const { products, fetchProducts, categories, fetchCategories, addToCart } = useStore((state) => ({
    products: state.products,
    fetchProducts: state.fetchProducts,
    categories: state.categories,
    fetchCategories: state.fetchCategories,
    addToCart: state.addToCart,
  }));

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchProducts();
        await fetchCategories();
      } catch (err) {
        setError('Failed to load data');
      }
    };
    loadData();
  }, [fetchProducts, fetchCategories]);

  useEffect(() => {
    const normalizedCategory = decodeURIComponent(selectedCategory).replace(/-/g, ' ');
    const filtered = normalizedCategory === 'all'
      ? products
      : products.filter((product) => product.category === normalizedCategory);

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
    window.scrollTo(0, 0);
  }, [products, selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    const encodedCategory = encodeURIComponent(category);
    window.history.pushState(null, '', `/shop/${encodedCategory}`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product);
  };

  const handleShare = (event, product) => {
    event.preventDefault();
    event.stopPropagation();
    
    const productUrl = `${window.location.origin}/product/${product.id}`;
    if (navigator.share) {
      navigator.share({
        title: product.title,
        url: productUrl
      }).catch((error) => console.error('Sharing failed:', error));
    } else {
      // Fallback for non-supporting browsers (e.g., desktop)
      alert(`Share this product: ${productUrl}`);
    }
  };

  if (error) return <p>{error}</p>;

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <img className="shop-logo" src={logo} alt="logo" />
        <h2>Shop</h2>
        <p>
          <Link to="/">Home</Link> &gt; Shop
        </p>
      </div>
      <h1>Shop Our Collection</h1>
      <div className="category-filters">
        <button
          className={selectedCategory === 'all' ? 'active' : ''}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        {categories.map((cat, index) => (
          <button
            key={index}
            className={selectedCategory === cat ? 'active' : ''}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="product-list">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <div className="price-container">
                <span className="price">${product.price}</span>
                <span className="old-price">${(product.price * 1.2).toFixed(2)}</span>
              </div>
            </Link>
            <button
              className="add-to-cart"
              onClick={(event) => handleAddToCart(event, product)}
            >
              Add to Cart
            </button>
            <button
              className="share-button"
              onClick={(event) => handleShare(event, product)}
              aria-label="Share Product"
            >
              <FaShareAlt />
            </button>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Shop;


// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import useStore from '../store/useStore';
// import './Shop.css';
// import logo from '../../src/assets/logo.png';

// const ITEMS_PER_PAGE = 10;

// const Shop = () => {
//   const { category } = useParams();
//   const { products, fetchProducts, categories, fetchCategories, addToCart } = useStore((state) => ({
//     products: state.products,
//     fetchProducts: state.fetchProducts,
//     categories: state.categories,
//     fetchCategories: state.fetchCategories,
//     addToCart: state.addToCart 
//   }));

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(category || 'all');

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         await fetchProducts();
//         await fetchCategories();
//       } catch (err) {
//         setError('Failed to load data');
//       }
//     };

//     loadData();
//   }, [fetchProducts, fetchCategories]);

//   useEffect(() => {
//     const normalizedCategory = selectedCategory.replace(/-/g, ' ');
//     const filtered = normalizedCategory === 'all'
//       ? products
//       : products.filter(product => product.category === normalizedCategory);

//     setFilteredProducts(filtered);
//     setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
//   }, [products, selectedCategory]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleAddToCart = (event, product) => {
//     event.stopPropagation(); 
//     addToCart(product);
//     // alert(`${product.title} added to cart.`);
//   };

//   if (error) return <p>{error}</p>;

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div className="shop-page">
//       <div className="shop-header">
//         <img className="shop-logo" src={logo} alt="logo" />
//         <h2>Shop</h2>
//         <p>
//           <Link to="/">Home</Link> &gt; Shop
//         </p>
//       </div>
//       <h1>Shop Our Collection</h1>
//       <div className="category-filters">
//         <button onClick={() => handleCategoryChange('all')}>All</button>
//         {categories.map((cat, index) => (
//           <button key={index} onClick={() => handleCategoryChange(cat)}>
//             {cat}
//           </button>
//         ))}
//       </div>
//       <div className="product-list">
//         {currentProducts.map((product) => (
//           <div key={product.id} className="product-item">
//             <Link to={`/product/${product.id}`} className="product-link">
//               <img src={product.image} alt={product.title} />
//               <h2>{product.title}</h2>
//               <div className="price-container">
//               <span className="price">${product.price}</span>
//               <span className="old-price">${(product.price * 1.2).toFixed(2)}</span>
//             </div>

          
//             </Link>
//             <button
//               className="add-to-cart"
//               onClick={(event) => handleAddToCart(event, product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {currentPage > 1 && (
//           <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//         )}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//         {currentPage < totalPages && (
//           <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;












// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import useStore from '../store/useStore';
// import './Shop.css';
// import logo from '../../src/assets/logo.png';

// const ITEMS_PER_PAGE = 10;

// const Shop = () => {
//   const { category } = useParams();
//   const { products, fetchProducts, categories, fetchCategories, addToCart } = useStore((state) => ({
//     products: state.products,
//     fetchProducts: state.fetchProducts,
//     categories: state.categories,
//     fetchCategories: state.fetchCategories,
//     addToCart: state.addToCart,
//   }));

//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [error, setError] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState(category || 'all');

//   useEffect(() => {
//     const loadData = async () => {
//       try {
//         await fetchProducts();
//         await fetchCategories();
//       } catch (err) {
//         setError('Failed to load data');
//       }
//     };

//     loadData();
//   }, [fetchProducts, fetchCategories]);

//   useEffect(() => {
//     const normalizedCategory = decodeURIComponent(selectedCategory).replace(/-/g, ' ');
//     const filtered = normalizedCategory === 'all'
//       ? products
//       : products.filter(product => product.category === normalizedCategory);

//     setFilteredProducts(filtered);
//     setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
//   }, [products, selectedCategory]);

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     setCurrentPage(1);
//     const encodedCategory = encodeURIComponent(category);
//     // Update the URL without reloading the page
//     window.history.pushState(null, '', `/shop/${encodedCategory}`);
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const handleAddToCart = (event, product) => {
//     event.stopPropagation(); 
//     addToCart(product);
//     // alert(`${product.title} added to cart.`);
//   };

//   if (error) return <p>{error}</p>;

//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   return (
//     <div className="shop-page">
//       <div className="shop-header">
//         <img className="shop-logo" src={logo} alt="logo" />
//         <h2>Shop</h2>
//         <p>
//           <Link to="/">Home</Link> &gt; Shop
//         </p>
//       </div>
//       <h1>Shop Our Collection</h1>
//       <div className="category-filters">
//         <button onClick={() => handleCategoryChange('all')}>All</button>
//         {categories.map((cat, index) => (
//           <button key={index} onClick={() => handleCategoryChange(cat)}>
//             {cat}
//           </button>
//         ))}
//       </div>
//       <div className="product-list">
//         {currentProducts.map((product) => (
//           <div key={product.id} className="product-item">
//             <Link to={`/product/${product.id}`} className="product-link">
//               <img src={product.image} alt={product.title} />
//               <h2>{product.title}</h2>
//               <div className="price-container">
//                 <span className="price">${product.price}</span>
//                 <span className="old-price">${(product.price * 1.2).toFixed(2)}</span>
//               </div>
//             </Link>
//             <button
//               className="add-to-cart"
//               onClick={(event) => handleAddToCart(event, product)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {currentPage > 1 && (
//           <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//         )}
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             className={index + 1 === currentPage ? 'active' : ''}
//           >
//             {index + 1}
//           </button>
//         ))}
//         {currentPage < totalPages && (
//           <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Shop;







import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useStore from '../store/useStore';
import './Shop.css';
import logo from '../../src/assets/logo.png';

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

  // Fetch products and categories on mount
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

  // Filter products based on selected category
  useEffect(() => {
    const normalizedCategory = decodeURIComponent(selectedCategory).replace(/-/g, ' ');
    const filtered = normalizedCategory === 'all'
      ? products
      : products.filter(product => product.category === normalizedCategory);

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / ITEMS_PER_PAGE));
  }, [products, selectedCategory]);

  // Change category and update URL
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    const encodedCategory = encodeURIComponent(category);
    // Update the URL without reloading the page
    window.history.pushState(null, '', `/shop/${encodedCategory}`);
  };

  // Change the page number
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Add product to cart
  const handleAddToCart = (event, product) => {
    event.stopPropagation(); 
    addToCart(product);
    // Optionally alert the user
    // alert(`${product.title} added to cart.`);
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
        <button onClick={() => handleCategoryChange('all')}>All</button>
        {categories.map((cat, index) => (
          <button key={index} onClick={() => handleCategoryChange(cat)}>
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

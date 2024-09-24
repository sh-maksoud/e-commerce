

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useStore from '../../store/useStore';
// import { useAuth } from '../../hooks/useAuth';
// import CartButton from '../../components/CartButton/CartButton';
// import Sidebar from '../../components/Nav/Sidebar/Sidebar';
// import './nav.css';
// import logo from '../../assets/logo.png';

// const Nav = () => {
//   const cartData = useStore(state => state.cart);
//   const { currentUser, signOut } = useAuth();
//   const { openSidebar, closeSidebar } = useStore(); 
//   const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);

//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const handleLogout = async () => {
//     try {
//       await signOut();
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   const handleCloseSidebar = () => {
//     closeSidebar(); 
//   };

//   const toggleNav = () => {
//     setIsNavOpen(prev => !prev);
//   };

//   return (
//     <nav className="nav">
//       <div className="nav-logo">
//         <Link to="/">
//           <img src={logo} alt="Logo" />
//           <span>TrendElite</span>
//         </Link>
//       </div>
      
//       <button className="nav-toggle" onClick={toggleNav}>
//         {isNavOpen ? '✖' : '☰'} 
//       </button>
      
//       <ul className={`nav-items ${isNavOpen ? 'open' : ''}`}>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/shop">Shop</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         {currentUser ? (
//           <>
//             <li><Link to="/user-profile">Profile</Link></li>
//             <li><button onClick={handleLogout}>Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/signup">Sign Up</Link></li>
//           </>
//         )}
//       </ul>

//       <CartButton cartItemsCount={totalItems} toggleSidebar={openSidebar} closeSidebar={handleCloseSidebar} /> 
      
//       <Sidebar onClose={handleCloseSidebar} /> 
//     </nav>
//   );
// };

// export default Nav;







import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';
import { useAuth } from '../../hooks/useAuth';
import CartButton from '../../components/CartButton/CartButton';
import Sidebar from '../../components/Nav/Sidebar/Sidebar';
import './nav.css';
import logo from '../../assets/logo.png';

const Nav = () => {
  const cartData = useStore(state => state.cart);
  const { currentUser, signOut } = useAuth();
  const { openSidebar, closeSidebar } = useStore(); 
  const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navRef = useRef();

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleCloseSidebar = () => {
    closeSidebar(); 
  };

  const toggleNav = () => {
    setIsNavOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span>TrendElite</span>
        </Link>
      </div>
      
      <button className="nav-toggle" onClick={toggleNav}>
        {isNavOpen ? '✖' : '☰'} 
      </button>
      
      <ul className={`nav-items ${isNavOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {currentUser ? (
          <>
            <li><Link to="/user-profile">Profile</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </>
        )}
      </ul>

      <CartButton cartItemsCount={totalItems} toggleSidebar={openSidebar} closeSidebar={handleCloseSidebar} /> 
      
      <Sidebar onClose={handleCloseSidebar} /> 
    </nav>
  );
};

export default Nav;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './hooks/useAuth'; 
// import MainLayout from './components/MainLayout'; 
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import SingleProduct from './pages/SingleProduct';
// import Contact from './pages/Contact';
// import Cart from './pages/Cart/Cart';
// import Checkout from './components/Checkout/Checkout';
// import PaymentOptions from './pages/PaymentOptions/PaymentOptions';
// import Return from './pages/Return/Return';
// import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
// import About from './pages/About/About';
// import Login from './components/Login/Login'; 
// import SignUp from './components/SignUp/SignUp';
// import UserProfile from './pages/UserProfile/UserProfile'; 
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import useThemeStore from './store/useThemeStore'; 
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function App() {
//   const { isDarkMode } = useThemeStore(); 

//   return (
//     <AuthProvider>
//       <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<MainLayout />}>
//               <Route index element={<Home />} />
//               <Route path="shop" element={<Shop />} />
//               <Route path="shop/:category" element={<Shop />} />
//               <Route path="shop/:category/:id" element={<SingleProduct />} />
//               <Route path="product/:id" element={<SingleProduct />} />
//               <Route path="contact" element={<Contact />} />
//               <Route path="cart" element={<Cart />} />
//               <Route path="checkout" element={<Checkout />} />
//               <Route path="payment" element={<PaymentOptions />} /> 
//               <Route path="returns" element={<Return />} />
//               <Route path="privacy" element={<PrivacyPolicy />} />
//               <Route path="about" element={<About />} />
              
//               {/* Authentication Routes with Nav */}
//               <Route path="login" element={<Login />} />
//               <Route path="signup" element={<SignUp />} />
//             </Route>

//             {/* Protected Routes */}
//             <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
//           </Routes>
//         </Router>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;







// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { AuthProvider } from './hooks/useAuth';
// import MainLayout from './components/MainLayout';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import SingleProduct from './pages/SingleProduct';
// import Contact from './pages/Contact';
// import Cart from './pages/Cart/Cart';
// import Checkout from './components/Checkout/Checkout';
// import PaymentOptions from './pages/PaymentOptions/PaymentOptions';
// import Return from './pages/Return/Return';
// import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
// import About from './pages/About/About';
// import Login from './components/Login/Login';
// import SignUp from './components/SignUp/SignUp';
// import UserProfile from './pages/UserProfile/UserProfile';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import useThemeStore from './store/useThemeStore';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function App() {
//   const { isDarkMode } = useThemeStore();

//   return (
//     <AuthProvider>
//       <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
//         <Router>
//           <Routes>
//             <Route path="/" element={<MainLayout />}>
//               <Route index element={<Home />} />
//               <Route path="shop" element={<Shop />} />
//               <Route path="shop/:category" element={<Shop />} />
//               <Route path="shop/:category/:id" element={<SingleProduct />} />
//               <Route path="product/:id" element={<SingleProduct />} />
//               <Route path="contact" element={<Contact />} />
//               <Route path="cart" element={<Cart />} />
//               <Route path="checkout" element={<Checkout />} />
//               <Route path="payment" element={<PaymentOptions />} />
//               <Route path="returns" element={<Return />} />
//               <Route path="privacy" element={<PrivacyPolicy />} />
//               <Route path="about" element={<About />} />
              
//               {/* Authentication Routes */}
//               <Route path="login" element={<Login />} />
//               <Route path="signup" element={<SignUp />} />
//             </Route>

//             {/* Protected Routes */}
//             <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
//           </Routes>
//         </Router>
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;






import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SingleProduct from './pages/SingleProduct';
import Contact from './pages/Contact';
import Cart from './pages/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import PaymentOptions from './pages/PaymentOptions/PaymentOptions';
import Return from './pages/Return/Return';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import About from './pages/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import UserProfile from './pages/UserProfile/UserProfile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import useThemeStore from './store/useThemeStore';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const { isDarkMode } = useThemeStore();

  return (
    <AuthProvider>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Router>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="Shop" element={<Shop />} />
              <Route path="Shop/:category" element={<Shop />} />
              <Route path="Shop/:category/:id" element={<SingleProduct />} />
              <Route path="product/:id" element={<SingleProduct />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="PaymentOptions" element={<PaymentOptions />} />
              <Route path="Return" element={<Return />} />
              <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="About" element={<About />} />
              
              {/* Authentication Routes */}
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Route>

            {/* Protected Routes */}
            <Route path="/user-profile" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;

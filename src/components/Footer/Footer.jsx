
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0); 
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <span className="footer-logo">TrendElite.</span>
          <p className="footer-address">
            400 University Drive Suite 200 Coral<br />
            Gables, FL 33134 USA
          </p>
        </div>
        
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            <li>Links</li>
            <li className="footer-nav-item">
              <Link to="/" onClick={scrollToTop}>Home</Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/shop" onClick={scrollToTop}>Shop</Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/about" onClick={scrollToTop}>About</Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/contact" onClick={scrollToTop}>Contact</Link>
            </li>
          </ul>
          
          <ul className="footer-nav-list">
            <li>Help</li>
            <li className="footer-nav-item">
              <Link to="/payment" onClick={scrollToTop}>Payment Options</Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/returns" onClick={scrollToTop}>Returns</Link>
            </li>
            <li className="footer-nav-item">
              <Link to="/privacy" onClick={scrollToTop}>Privacy Policies</Link>
            </li>
          </ul>
        </nav>
        
        <div className="footer-newsletter">
          <strong>Newsletter</strong>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email Address" className="newsletter-input" required />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
      </div>
      
      <hr className="footer-divider" />
      <p className="footer-rights">© 2023 <Link className="footer-link" to="/" onClick={scrollToTop}>TrendElite</Link> . All rights reserved.</p>
    </footer>
  );
};

export default Footer;

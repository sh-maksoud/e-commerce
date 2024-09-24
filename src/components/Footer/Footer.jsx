
import './footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-info">
//           <span className="footer-logo">TrendElite.</span>
//           <p className="footer-address">
//             400 University Drive Suite 200 Coral<br />
//             Gables, FL 33134 USA
//           </p>
//         </div>
        
//         <nav className="footer-nav">
//           <ul className="footer-nav-list">
//             <li>Links</li>
//             <li className="footer-nav-item"><a href="/">Home</a></li>
//             <li className="footer-nav-item"><a href="/shop">Shop</a></li>
//             <li className="footer-nav-item"><a href="/about">About</a></li>
//             <li className="footer-nav-item"><a href="/contact">Contact</a></li>
//           </ul>
          
//           <ul className="footer-nav-list">
//             <li>Help</li>
//             <li className="footer-nav-item"><a href="/payment">Payment Options</a></li>
//             <li className="footer-nav-item"><a href="/returns">Returns</a></li>
//             <li className="footer-nav-item"><a href="/privacy">Privacy Policies</a></li>
//           </ul>
//         </nav>
        
//         <div className="footer-newsletter">
//           <strong>Newsletter</strong>
//           <form className="newsletter-form">
//             <input type="email" placeholder="Enter Your Email Address" className="newsletter-input" required />
//             <button type="submit" className="newsletter-button">Subscribe</button>
//           </form>
//         </div>
//       </div>
      
//       <hr className="footer-divider" />
//       <p className="footer-rights">© 2023 <a className="footer-link" href="/">TrendElite</a> . All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;









import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
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
            <li className="footer-nav-item"><Link to="/">Home</Link></li>
            <li className="footer-nav-item"><Link to="/shop">Shop</Link></li>
            <li className="footer-nav-item"><Link to="/about">About</Link></li>
            <li className="footer-nav-item"><Link to="/contact">Contact</Link></li>
          </ul>
          
          <ul className="footer-nav-list">
            <li>Help</li>
            <li className="footer-nav-item"><Link to="/payment">Payment Options</Link></li>
            <li className="footer-nav-item"><Link to="/returns">Returns</Link></li>
            <li className="footer-nav-item"><Link to="/privacy">Privacy Policies</Link></li>
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
      <p className="footer-rights">© 2023 <Link className="footer-link" to="/">TrendElite</Link> . All rights reserved.</p>
    </footer>
  );
};

export default Footer;

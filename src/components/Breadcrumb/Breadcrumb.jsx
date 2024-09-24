

import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumb.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumbs">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <Link 
              to={item.href} 
              className={`breadcrumb-link ${item.isBackToShop ? 'back-to-shop' : ''}`}
            >
              {item.label}
            </Link>
          ) : (
            <span className="current">{item.label}</span>
          )}
          
          {index < items.length - 1 && <span className="separator-breadcrumb">{'>'}</span>}
      
          {index === items.length - 2 && <span className="separator-breadcrumb">|</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

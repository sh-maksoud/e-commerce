
import React from 'react';
import useStore from '../store/useStore';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Features from './Features/Features';
import ThemeToggle from '../components/ThemeToggle';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Nav /> {/* Sidebar is included in Nav */}
      <main>
        <ThemeToggle />
        <Outlet />
      </main>
      <Features />
      <Footer />
    </div>
  );
};

export default MainLayout;

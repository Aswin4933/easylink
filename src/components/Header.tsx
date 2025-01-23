"use client"
import React, { useState } from 'react';
import { Menu, X, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about'},
    { name: 'Products', href: '/products'},
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="relative w-full shadow-sm ">
      {/* Top Header */}
      <div className="bg-gray-100 px-5 md:px-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between py-2 md:flex-row">
            {/* Phone Number */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>Call: +971 56 582 5477</span>
            </div>

            {/* Sale Banner */}
            <div className="text-sm font-medium">
             <span className='text-black'>Summer Sale Discount..</span>  <span className="text-blue-500">50% Off.</span>
            </div>

            {/* Language and Currency - Hidden on Mobile */}
            <div className="hidden items-center gap-4 md:flex">
              
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-5 md:px-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">
                Easylink
              </a>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden items-center space-x-8 md:flex">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                    
                  </a>
                </div>
              ))}
            </nav>


              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu color='black' size={24} />}
              </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute left-0 right-0 z-50 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-between py-2 text-gray-600"
              >
                {link.name}
              </a>
            ))}
            
            {/* Social Links for Mobile */}
            <div className="flex items-center justify-center gap-6 border-t pt-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
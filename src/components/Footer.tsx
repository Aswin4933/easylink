import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Mail, 
  Phone, 
  Clock, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '#' }
  ];

  const categories = [
    { name: 'Office Stationery', href: '#' },
    { name: 'Writing Instruments', href: '#' },
    { name: 'Paper Products', href: '#' },
    { name: 'Filing Solutions', href: '#' },
    { name: 'Office Equipment', href: '#' }
  ];

  

  return (
    <footer className="bg-gray-100">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 md:px-20 pt-16">
        <div className="grid gap-8 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-black">Easylink</h2>
              <p className="mt-4 text-gray-600">
                Your premier destination for high-quality office supplies and equipment. 
                We are committed to providing businesses with essential tools for productive workspaces.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="rounded-full bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-blue-500 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="rounded-full bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-blue-500 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="rounded-full bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-blue-500 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-black">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 transition-colors hover:text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-black">Categories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-gray-600 transition-colors hover:text-blue-500">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-6 text-lg font-semibold text-black">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-600">
                  <MapPin size={20} className="mt-1 shrink-0" />
                  <span>123 Business Square, Dubai Silicon Oasis, Dubai, UAE</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Phone size={20} />
                  <span>+971 56 582 5477, +971 54 245 9263</span>
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <Mail size={20} />
                  <span>info@easylink.com</span>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-600 md:flex-row">
            <p>© 2024 Easylink. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
              <span>|</span>
              <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
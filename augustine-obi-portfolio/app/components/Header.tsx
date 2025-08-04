"use client";

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          J.M.N.
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><a href="#" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/80 transition-colors">Get in touch</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 p-4 bg-background">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/services" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link href="/pricing" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Pricing</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><a href="#" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/80 transition-colors text-center">Get in touch</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

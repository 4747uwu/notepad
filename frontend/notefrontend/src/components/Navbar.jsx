import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className='flex felx-col'>
      <div className="logo">
        {/* <img src="logo.png" alt="Fly.io Logo" /> */}
        <span>Note</span>
      </div>
    </div>
      <div className='flex items-center rounded-full bg-gray-600 bg-opacity-10 h-12 px-4 py-4'>
      <ul className="nav-links">
        <li><a href="#articles">Articles</a></li>
        <li><a href="#docs">Features</a></li>
        <li><a href="#community">Community</a></li>
        <li><a href="#status">About</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      </div>
      <button className="sign-in-btn">Sign In</button>
    </nav>

    //     <nav class="fixed top-0 left-0 right-0 z-50">
    //     <div class="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
    //         {/* <!-- Logo --> */}
    //         <div class="flex items-center">
    //             <a href="/" class="text-2xl font-bold">Clay</a>
    //         </div>

    //         {/* <!-- Desktop Navigation --> */}
    //         <div class="hidden flex flex-row md:flex items-center space-x-8">
    //             <a href="#" class="text-gray-600 hover:text-gray-900">RELEASES</a>
    //             <a href="#" class="text-gray-600 hover:text-gray-900">RESOURCES</a>
    //             <a href="#" class="text-gray-600 hover:text-gray-900">COMPANY</a>
    //             <a href="#" class="text-gray-600 hover:text-gray-900">PRICING</a>
    //         </div>

    //         {/* <!-- Sign In Button --> */}
    //         <div class="flex items-center space-x-4">
    //             <a href="#" class="text-gray-600 hover:text-gray-900">SIGN IN</a>
    //         </div>

    //         {/* <!-- Mobile Menu Button --> */}
    //         <button class="md:hidden">
    //             <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
    //             </svg>
    //         </button>
    //     </div>
    // </nav>
  );
};

export default Navbar

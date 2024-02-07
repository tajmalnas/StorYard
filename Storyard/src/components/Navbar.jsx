import { useState } from "react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-wrap h-full">
      <section className="relative mx-auto">
        {/* navbar */}
        <nav className="flex justify-between bg-transparent text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="cursor-pointer text-2xl font-bold font-heading">
              StorYard
            </a>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a className="cursor-pointer hover:text-gray-200">Home</a></li>
              <li><a className="cursor-pointer hover:text-gray-200">Category</a></li>
              <li><a className="cursor-pointer hover:text-gray-200">Collections</a></li>
              <li><a className="cursor-pointer hover:text-gray-200">Contact Us</a></li>
            </ul>
            {/* Header Icons */}
            <div className="hidden md:flex items-center space-x-5">
              <a className="cursor-pointer flex items-center hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Name</span>
              </a>
            </div>
          </div>
          {/* Responsive navbar  sidebar svg */}
          <a className="cursor-pointer navbar-burger self-center mr-4 md:hidden" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </a>
        </nav>
      </section>
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 z-50 right-0 h-screen w-64 bg-[#15191f] text-white">
          {/* Sidebar Header */}
          <div className="flex justify-between items-center px-4 py-3">
            <h2 className="text-lg font-semibold mt-4">Sidebar</h2>
            <button onClick={toggleSidebar} className="mt-4 text-gray-300 hover:text-gray-100 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Sidebar Content */}
          <ul className="py-4">
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">Option 1</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">Option 2</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-800">
              <a href="#" className="block">Option 3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

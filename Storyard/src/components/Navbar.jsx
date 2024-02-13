import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = useSelector(state => state.user);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    console.log(user.currentUser)
  }

  return (
    <div className="font-normal bg-[#1d232a]/90 backdrop-blur-md flex flex-wrap h-full border-b-2 border-first">
      <section className="relative mx-auto">
        {/* navbar */}
        <nav className="flex justify-between bg-transparent text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center">
            <a className="cursor-pointer text-2xl font-bold font-heading">
              StorYard
            </a>
            {/* Nav Links */}
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><a onClick={()=>navigateTo('/')} className="cursor-pointer font-medium hover:text-gray-200">Home</a></li>
              <li><a className="cursor-pointer font-medium hover:text-gray-200">Category</a></li>
              <li><a className="cursor-pointer font-medium hover:text-gray-200">Collections</a></li>
              <li><a className="cursor-pointer font-medium hover:text-gray-200">Contact Us</a></li>
            </ul>
      
            {user.currentUser===null && <div className="hidden md:flex items-center space-x-5">
              <button onClick={()=>navigateTo('/login')} className="hover:border-first border-2 border-[#1d232a] p-1 px-3 rounded-md">Login</button>
              <button onClick={()=>navigateTo('/signup')} className="bg-slate-50 p-1 px-3 rounded-md hover:scale-95 text-black">SignUp</button>
            </div>}
            {
              user.currentUser!==null && <div className="hidden md:flex items-center">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                </svg>
              </button>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <img src={user.currentUser.user.profilePicture} alt="profile" className="w-10 h-10 rounded-full" />
                  <span>{user.currentUser.user.username.slice(0,7)}</span>
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li><button onClick={()=>navigateTo('/profile')}>Profile</button></li>
                  <li><button>DashBoard</button></li>
                  <li><button>logout</button></li>
                </ul>
              </div>
            </div>
            }
          </div>
          <div className="md:hidden lg:hidden mr-4 flex items-center justify-center ">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
              </svg>
            </button>
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
        <div className="fixed top-0 z-50 right-0 h-screen w-64 bg-[#1e242e] text-white">
          {/* Sidebar Header */}
          <div className="flex justify-between border-b py-[18px] items-center px-4">
            <h2 className="text-lg font-semibold mt-4">Sidebar</h2>
            <button onClick={toggleSidebar} className="mt-4 text-gray-300 hover:text-gray-100 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Sidebar Content */}
          <ul className="py-4">
            {user.currentUser===null && <li onClick={()=>navigateTo('/signup')} className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button  className="block bg-slate-200 rounded-sm  py-1 text-black px-4">Sign Up</button>
            </li>}
            {user.currentUser===null &&<li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button onClick={()=>navigateTo('/login')} className="block  px-4">Login</button>
            </li>}
            {user.currentUser!==null && <li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button className="flex justify-around items-center">
                <img src={user.currentUser.user?.profilePicture || 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png'} alt="profile" className="w-8 h-8 inline mr-4 rounded-full" />
                <span>Profile</span>
              </button>
            </li>}
            {user.currentUser!==null &&<li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button className="flex justify-around items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline mr-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>                    
                Dashboard
              </button>
            </li>}
            <li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button  className="flex justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 inline mr-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
              Home</button>
            </li>
            <li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button  className="flex justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 inline ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
</svg>
            Category</button>
            </li>
            <li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button  className="flex justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
</svg>

              Collection</button>
            </li>
            <li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button  className="flex justify-around items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

              Contact Us</button>
            </li>
            {user.currentUser!==null && <li className="px-4 mb-4 py-2 hover:bg-gray-800">
              <button  className="flex justify-around items-center ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-4 inline">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
              Logout</button>
              </li>
            }  
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

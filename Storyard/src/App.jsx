import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage/page"
import SignUp from "./pages/SignUp/page"
import Login from "./pages/Login/page"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"


const App = () => {

  axios.defaults.baseURL = 'http://localhost:3000/api';

  return (
    <div className="font-default relative">
      <div className="fixed top-0 z-10 min-h-20">
        <Navbar/>
      </div>
      <div className="bg-[#1d232a] md:pt-20 pt-28">
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
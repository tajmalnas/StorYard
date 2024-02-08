import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage/page"
import SignUp from "./pages/SignUp/page"
import Login from "./pages/Login/page"

const App = () => {
  return (
    <div className="font-default relative">
      <div className="fixed top-0 z-10 min-h-20">
        <Navbar/>
      </div>
      <div className="bg-[#1d232a] md:pt-20 pt-28">
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
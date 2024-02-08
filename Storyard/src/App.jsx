import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/SignUp"

const App = () => {
  return (
    <div className="font-default relative">
      <div className="fixed top-0 z-10 min-h-20">
        <Navbar/>
      </div>
      <div className="md:pt-20 pt-28">
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
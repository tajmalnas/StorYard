import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../../redux/user/userSlice";
import GoogleAuth from "../../components/GoogleAuth";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();
  const {loading,error} = useSelector(state => state.user)

  const navigate = useNavigate();
  const navigateTo = (path) => {
      navigate(path);
  }

  const postData = async () => {
  
    // setLoading(true); // Set loading to true when the request starts
    dispatch(signInStart());
    try {
      const res = await axios.post('/auth/login', {
        email,
        password
      });
      dispatch(signInSuccess(res.data))
      toast.success(res.data.msg, {
        className: 'bg-second text-white'
      });
      console.log(res);
      localStorage.setItem('token', res.data.token);
      navigateTo('/');
    } catch (err) {
      dispatch(signInFailure(err.response.data))
      toast.error(error.message,{
        className: 'bg-second text-white'
      });
      console.log(err.response);
    }
  }
  

  const submitForm = () => {
    // setLoading(true);
    dispatch(signInStart());
    if(!email || !password) {
      toast.error("All fields are required",{
        className:'bg-second text-white'
      });
      // setLoading(false);
      dispatch(signInFailure("all fields are required"));
      return;
    }
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      toast.error("Invalid email",{
        className:'bg-second text-white'
      });
      // setLoading(false);
      dispatch(signInFailure("Invalid email"));
      return;
    }
    if(password.length < 8) {
      toast.error("Password must be at least 8 characters long",{
        className:'bg-second text-white'
      });
      // setLoading(false);
      dispatch(signInFailure("Password must be at least 8 characters long"));
      return;
    }
    postData()
    // setLoading(false);
  }

  return (
    <div className="min-h-screen flex md:flex-row flex-col-reverse gap-y-8">
        <div className="md:h-screen min-h-fit flex md:w-1/2 justify-center items-center animate-up-down">
            <img src="../../public/assets/_8224ac5e-a2de-41f5-a7b7-09a13e0ae2be-removebg-preview.png" alt="nature" className="w-68 md:h-[26rem] h-full object-cover" />
        </div>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center md:justify-center px-2">
            <div className="bg-second/90 border-first border-2 px-6 py-8 rounded shadow-md text-white w-full">
              <h1 className="mb-8 text-3xl text-center">Login</h1>
              <input 
                type="text"
                className="block border border-gray-300 w-full p-3 rounded mb-4"
                name="email"
                value={email}
                onChange = {(e)=>setEmail(e.target.value)}
                placeholder="Email" />
              <input 
                type="password"
                className="block border border-gray-300 w-full p-3 rounded mb-4"
                name="password"
                value={password}
                onChange = {(e)=>setPassword(e.target.value)}
                placeholder="Password" />
              <button
                onClick={submitForm}
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
              >
                {loading===true?<span className="loading loading-dots loading-xs"></span> : <span>Let{`'`}s Go</span>}
              </button>
              
              <GoogleAuth/>
    
              <div className="text-center text-sm text-gray-600 mt-4">
                By Login, you agree to the 
                <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                  Terms of Service
                </a> and 
                <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-gray-600 mt-6">
              Don{`'`}n have an account? 
              <a className="no-underline border-b border-first text-first" onClick={()=>navigateTo('/signup')}>
                Sign Up
              </a>.
            </div>
        </div>
    </div>
  )
}

export default Login
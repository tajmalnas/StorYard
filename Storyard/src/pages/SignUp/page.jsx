import { useNavigate } from "react-router-dom";
import '../../styles/Header.css'
import { useState } from "react";
import { validateForm } from "./validate";
import axios from "axios";
import { toast } from "react-toastify";
import GoogleAuth from "../../components/GoogleAuth";

const SignUp = () => {
  
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [otp, setOtp] = useState('')
 
  let errorMessage = "valid";
  
  const navigate = useNavigate()
  const navigateTo = (path) => {
    navigate(path);
  }

  const checkOtp = async () => {
    if (otp === "") {
      toast.error("Please Enter OTP",{
        className: 'bg-second text-white'
      });
      return;
    }
    const otpNumber = parseInt(otp);
    await axios.post('/auth/email-verification', {
      email,
      otp: otpNumber
    }).then((res) => {
      toast.success(res.data.msg, {
        className: 'bg-second text-white'
      });
      console.log(res);
      setOpen(false);
      navigateTo('/login');
      return;
    }).catch((err) => {
      toast.error('OTP does not matched', {
        className: 'bg-second text-white',
        duration: 5000
      });
      console.log(err.response);
      return;
    });
  }

  const postData = async () => {
    await axios.post('/auth/signup', {
      username,
      email,
      password
    }).then(() => {
      setOpen(true);
      toast.success("OTP has been sent to your email",{
        className: 'bg-second text-white',
        duration: 3000
      });
      setLoading(false);
    }).catch((err) => {
      setLoading(false);
      toast.error(err.response.data.msg,{
        className: 'bg-second text-white'
      });
      console.log(err.response);
    });
  }
  const submitForm = () => {
    setLoading(true);
    errorMessage = validateForm(username, email, password, confirmPassword);
    if (errorMessage !== "valid") {
      toast.error(errorMessage,{
        className:'bg-second text-white'
      });
      setLoading(false);
      return;
    }
    postData();
  }
  return (
    <div className="min-h-screen flex md:flex-row flex-col-reverse gap-y-8">
        <dialog id="my_modal_5" open={open} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello Genious!</h3>
            <p className="py-4">Please Enter the OTP send on Your Email</p>
            <input type="text" className="w-full border-2 border-gray-300 p-2 rounded mb-4" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="Enter OTP" />
            <button className="bg-first w-full font-normal text-center text-2xl rounded-md hover:bg-first/90 text-black" onClick={checkOtp}>Verify</button>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={()=>setOpen(false)}>Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="md:h-screen min-h-fit flex md:w-1/2 justify-center items-center animate-up-down">
            <img src="../../public/assets/_8224ac5e-a2de-41f5-a7b7-09a13e0ae2be-removebg-preview.png" alt="nature" className="w-68 md:h-[26rem] h-full object-cover" />
        </div>
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center md:-mt-8 md:justify-center px-2">
            <div className="bg-second/90 border-first border-2 px-6 py-4 rounded shadow-md text-white w-full">
              <h1 className="mb-4 text-3xl text-center">Sign Up</h1>
              <input 
                type="text"
                className="block border border-gray-300 w-full p-2 rounded mb-4"
                name="fullname"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Full Name" />
              <input 
                type="text"
                className="block border border-gray-300 w-full p-2 rounded mb-4"
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email" />
              <input 
                type="text"
                className="block border border-gray-300 w-full p-2 rounded mb-4"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" />
              <input 
                type="text"
                className="block border border-gray-300 w-full p-2 rounded mb-4"
                name="confirm_password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                placeholder="Confirm Password" />
              <button
                onClick={submitForm}
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
              >
                {loading ? <span className="loading loading-dots loading-xs"></span> : "Create Account"}
              </button>
              
              <GoogleAuth/>
    
              <div className="text-center text-sm text-gray-600 mt-2">
                By signing up, you agree to the 
                <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                  Terms of Service
                </a> and 
                <a className="no-underline border-b border-gray-600 text-gray-600" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-gray-600 mt-3">
              Already have an account? 
              <a className="no-underline border-b border-first text-first" onClick={()=>navigateTo('/login')}>
                Log in
              </a>.
            </div>
        </div>
    </div>
  );
}

export default SignUp
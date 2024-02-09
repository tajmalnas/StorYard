import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const GoogleAuth = () => {
    const auth = getAuth(app);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        dispatch(signInStart());
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({prompt: 'select_account'});
        try{
            const formResult = await signInWithPopup(auth, provider);
            const res = await axios.post('/auth/google', {
                username:formResult.user.displayName,
                email:formResult.user.email,
                googlePhotUrl:formResult.user.photoURL
            });
            const data = res.data;
            // console.log("response is", data)
            if(res.status === 200){
                dispatch(signInSuccess(data));
                toast.success(data.msg, {
                    className: 'bg-second text-white'
                });
                localStorage.setItem('token', data.token);
                navigate('/')
            }
        }catch(err){
            dispatch(signInFailure(err.response.data));
            toast.error("Google is not responding", {
                className: 'bg-second text-white'
            });
            console.log(err);
        }
    }    

    return (
    <button onClick={handleGoogleClick} className="btn btn-outline btn-accent w-full">
        <img src="../../public/assets/7123025_logo_google_g_icon.png" alt="google" className="w-8 h-8" />
        Continue with Google
    </button>
  )
}

export default GoogleAuth
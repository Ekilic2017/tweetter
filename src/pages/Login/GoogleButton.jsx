import { signInWithPopup } from "firebase/auth";
import {auth,provider} from "../../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GoogleButton = () => {
    
    const navigate=useNavigate();
    const handleLogin=()=>{
        signInWithPopup(auth,provider)
        .then(()=>{
navigate("/feed");
toast.success("hesaba giriş yapıldı")
        })
    }
  return (
    <button onClick={handleLogin} className="bg-white flex items-center py-2 px-10 rounded-full gap-3
    transition hover:bg-gray-300 text-black whitespace-nowrap">
        <img className="h-[20px]" src="R.png" alt="" />
        Google İle Giriş Yap
    </button>
  )
}

export default GoogleButton
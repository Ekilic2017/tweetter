import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../firebase"
import { toast } from "react-toastify"
const ResetButton = ({email}) => {
    //şifre sıfırlama epostası gönderme
    const handleReset=()=>{
sendPasswordResetEmail(auth,email)
.then(()=>
    toast.info("Şifre Sıfırlama E-postası gönderildi.Mailinizi kontrol edin"))
    .catch((err)=>toast.error("Bir hata oluştu:"+err.code))
}
  return (
    <button onClick={handleReset} className="text-red-600">
        Şifrenizimi Unuttunuz</button>
  )
}

export default ResetButton
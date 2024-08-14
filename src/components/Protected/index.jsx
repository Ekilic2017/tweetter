//parent route 
import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { auth } from "../../firebase"
const Protected = () => {
    const [isAuth,setIsAuth]=useState();
    
    useEffect(()=>{
        //kullanıcının oturumunu izler ve oturumda bir değişiklik
    //olduğunda cb functionı tetikler
        onAuthStateChanged(auth,(user)=>{
            setIsAuth(user ? true : false )
        })
    },[])
   //eğer kullanıcının yetkisi yoksa
    if (isAuth===false){
       return <Navigate to={"/"} replace/>
    }
    //kullanıcının yetkisi varsa
  return (
   <Outlet/>
  )
}

export default Protected
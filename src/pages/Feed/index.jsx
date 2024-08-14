import{ useEffect, useState } from 'react'
import Nav from './nav'
import Main from './main'
import Aside from './Aside'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

export const Feed = () => {
  const [user,setUser]=useState();
  useEffect(()=>{
   const unSub= onAuthStateChanged(auth,(user_data)=>{
setUser(user_data);
    });
    //kullanıcı sayfadan ayrıldığında aboneliği sonlandırıyoruz
    return()=>unSub();
  },[])
  return (
    <div className='feed h-screen bg-black  text-white overflow-hidden '>
      <Nav user={user}/>
      <Main user={user}/>
      <Aside/>
    </div>
  )
}

export default Feed
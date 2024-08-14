import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { BsCardImage } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { auth, db } from '../../firebase';
import upload from '../../utils/upload';
import Loader from '../Loader';

const Form = ({user}) => {
  const [isLoading,setIsLoading]=useState(false)
  const handleSubmit=async(e)=>{
e.preventDefault();
const text=e.target[0].value;
const file=e.target[1].files[0];
//
if(!text && !file){
  return toast.warning("lütfen içerik giriniz",
    {position:"bottom-right"}
  );
}
setIsLoading(true);
try{
 const url =await upload(file);
const tweetsCol=collection(db,"tweets")
await addDoc(tweetsCol,{
  textContent:text,
  imageContent:url,
  likes:[],
  isEdited:false,
  createdAt:serverTimestamp(),
  user:{
    id:auth.currentUser.uid,
    name:auth.currentUser.displayName,
    photo:auth.currentUser.photoURL,
  }
})}catch(err){
  toast.error("Bir hata oluştu")
  console.log(err)
}
setIsLoading(false);
e.target.reset();
  }
  return (
   <form  onSubmit={handleSubmit} className='flex gap-3 border-b border-zinc-600 p-4'>
    <img className='rounded-full h-[35px] md:h-[45px]'
    src={user?.photoURL} alt={user?.displayName} />
  <div className='w-full'>
<input className='w-full mt-1 mb-2 bg-transparent outline-none
md:text-lg' placeholder='Neler Oluyor...'
 type="text" />
 <div className='flex justify-between items-center'>
   <label htmlFor="image" className='text-lg transition p-4 cursor-pointer
   rounded-full hover:bg-gray-800'>
   <BsCardImage/>
   </label>
    
    <input className="hidden"id="image" type="file" />
    <button 
     disabled={isLoading} className='bg-blue-600 flex items-center 
    justify-center px-4 py-2 min-w-[85px] min-h-[40px] rounded-full transition hover:bg-blue-800' >
    {isLoading ? <Loader/> : "Tweetle"}</button>
 </div>
  </div>
   </form>
  )
}

export default Form
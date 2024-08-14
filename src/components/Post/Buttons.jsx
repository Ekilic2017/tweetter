import React from 'react'
import { CiShare2 } from 'react-icons/ci'
import { FaHeart,FaRegHeart, FaRetweet } from 'react-icons/fa'
import { LuMessageCircle } from 'react-icons/lu'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import {db,auth} from "../../firebase"
const Buttons = ({tweet}) => {
  //oturumu açık olan kullanıcı bu twetti likeladımı?
 const isLiked= tweet.likes.includes(auth.currentUser.uid)
  //like durumunu tersine çivirir
  const toogleLike=async()=>{
   const tweetRef= doc(db,"tweets",tweet.id)
   await updateDoc(tweetRef,{
    likes:isLiked 
    ? arrayRemove(auth.currentUser.uid)
    :arrayUnion(auth.currentUser.uid),
    });
  };
  return (
    <div className='flex justify-between items-center'>
        <div className='p-3 rounded-full
         cursor-pointer transition hover:bg-[#0000ff44]'>
<LuMessageCircle/>
        </div>
        <div className='p-3 rounded-full
         cursor-pointer transition hover:bg-[#00ff1139]'>
<FaRetweet/>
        </div>
        <div onClick={toogleLike}className='flex gap-2 items-center p-3 rounded-full
       cursor-pointer transition hover:bg-[#ff002f44]'>
{isLiked ? <FaHeart className='text-red-500'/>:<FaRegHeart/> }

<span>{tweet.likes.length}</span>
        </div>
        <div className='p-3 rounded-full
         cursor-pointer transition hover:bg-[#ff00aeb5]'>
<LuMessageCircle/>
        </div>
    </div>
  )
}

export default Buttons
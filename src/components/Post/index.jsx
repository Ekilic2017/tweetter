import React from 'react'
import UserInfo from './UserInfo'
import DropDown from './DropDown'
import Content from './Content'
import Buttons from './Buttons'
import { auth } from '../../firebase'
const Post = ({tweet}) => {
  const isOwn=tweet.user.id===auth.currentUser.uid;
  return (
    <div className='flex gap-3 border-b py-6 px-3
    border-zinc-600'>
        <img 
        className='w-12 h-12 rounded-full '
        src={tweet.user.photo} 
        alt={tweet.user.name}/>
        <div className='w-full'>
          <div className='flex justify-between'>
            <UserInfo tweet={tweet}/>
            {isOwn && <DropDown tweet={tweet}/>}
          
          </div>
          <Content tweet={tweet}/>
          <Buttons tweet={tweet}/>
        </div>
    </div>
  )
}

export default Post
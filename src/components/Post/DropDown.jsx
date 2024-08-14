import { deleteDoc, doc } from 'firebase/firestore'
import  { useState,useRef } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import { db } from '../../firebase'
import { toast } from 'react-toastify'
import Modal from '../Modal'

const DropDown = ({tweet}) => {
  const [isModalOpen,setIsModalOpen]=useState(false)
 const inputRef=useRef()
  const close=()=>{
    inputRef.current.checked=false;
  }
  const handleDelete=()=>{
const tweetRef=doc(db,"tweets",tweet.id)
deleteDoc(tweetRef)
.then(()=>toast.info("Tweet akıştan kaldırıldı"))
.catch(()=>toast.error("Bir sorun oluştu"));
close()
  }
  const handleEdit=()=>{
    setIsModalOpen(true);
    close();
  }
  return (
    <>
    <div>
       <label className="popup">
        <input ref={inputRef}  type="checkbox" />
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="popup-window">
          <legend>Eylemler</legend>
          <ul>
            <li>
              <button onClick={handleEdit}>
                <MdEdit />
                <span>Düzenle</span>
              </button>
            </li>
            <hr />
            <li>
              <button onClick={handleDelete}>
                <FaTrashAlt className="text-red-500" />
                <span>Sil</span>
              </button>
            </li>
          </ul>
        </nav>
      </label>
      { isModalOpen && <Modal tweet={tweet} close={()=>setIsModalOpen(false)}
      />}
    </div>
    </>
  )
}

export default DropDown
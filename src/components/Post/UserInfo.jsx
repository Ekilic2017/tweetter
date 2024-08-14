import moment from "moment";
import { MdEdit } from "react-icons/md";

const UserInfo = ({tweet}) => {
    let date=tweet.createdAt?.toDate();
    //moment yardımıyle şuanki tarihten ne kadar uzak olduğu hesaplanır.
   date= moment(date).fromNow();
  return (
    <div className='flex gap-3 items-center whitespace-nowrap'>
        <p className='text-blue-400 text-sm'>
            @{tweet.user.name.toLowerCase().split(" ").join("_")}</p>
    <p className="text-gray-500 text text-sm">{date}</p>
    {tweet.isEdited && (<p className="text-gray-400 text-xs">
<span className="max-md:hidden">*düzenlendi</span>
<span className="md:hidden"><MdEdit/></span>
    </p>
    )}
    </div>
  )
}

export default UserInfo
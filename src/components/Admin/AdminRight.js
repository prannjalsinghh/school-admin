import { useEffect, useState } from "react";
import ShowContactUs from "./ShowContactUs";
import AdminNoticeBoard from "./AdminNoticeBoard";
import AdminPhotoGallery from "./AdminPhotoGallery";

const AdminRight = (props)=>{

    const [home,setHome] = useState(true);
    const [contactUs,setContactUs] = useState(false);
    const [photoGallery,setPhotoGallery] = useState(false);
    const [noticeBoard,setNoticeBoard]  = useState(false);


    useEffect(()=>{
        if(props.data==="default"){
            setHome(true);
            setContactUs(false);
            setPhotoGallery(false);
            setNoticeBoard(false);
        }
        else if(props.data==="contactUs"){
            setHome(false);
            setContactUs(true);
            setPhotoGallery(false);
            setNoticeBoard(false);
        }
        else if(props.data==="photoGallery"){
            setHome(false);
            setContactUs(false);
            setPhotoGallery(true);
            setNoticeBoard(false);
        }
        else if(props.data==="noticeBoard"){
            setHome(false);
            setContactUs(false);
            setPhotoGallery(false);
            setNoticeBoard(true);
        }
    },[props.data])
    

    return(
        <div>
            {home && <h1>Welcome to Admin Panel</h1>}
            {contactUs && <ShowContactUs/>}
            {photoGallery && <AdminPhotoGallery/>}
            {noticeBoard && <AdminNoticeBoard/>}
        </div>
    )

}
export default AdminRight;


import style from './AdminLeft.module.css'
const AdminLeft = (props)=>{
    function showContactUsData(){
        props.onChangeData("contactUs");
    }
    function showPhotoGalleryCRUD(){
        props.onChangeData("photoGallery")
    }
    function showNoticeBoardCRUD(){
        props.onChangeData("noticeBoard")
    }
    return(
        
        <div>
            <p onClick={showContactUsData}>Show Contact Us</p>
            <p onClick={showPhotoGalleryCRUD}>Photo Gallery</p>
            <p onClick={showNoticeBoardCRUD}>Notice Board</p>
        </div>
    )
}
export default AdminLeft;
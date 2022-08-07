import axios from 'axios'

const ShowEachNotice = (props)=>{
    
    const deleteNotice=async ()=>{
        try{
            await axios.post("https://schooladminreact.herokuapp.com/deleteNoticeById",{id:props.notice.id})
        }catch(e){
            alert('something went wrong');
        }
       
        props.showNotices();
    }
    return(
        <div>
            <p  style={{textDecoration:"none",color:"black"}}>{props.notice.notice}</p>
           { props.call==="admin" && <button onClick={deleteNotice}>Delete</button>}
        </div>
    )
}
export default ShowEachNotice;
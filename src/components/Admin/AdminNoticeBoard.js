import { useEffect, useState } from "react";
import axios from "axios";
import ShowEachNotice from '../Admin/ShowEachNotice'
const AdminNoticeBoard = () => {
  const [addNotice, setAddNotice] = useState(false);
  const [notice, setNotice] = useState("");
  const [loadedNotices,setLoadedNotices] = useState([]);

  useEffect(()=>{
    showNotices();
  },[loadedNotices])

  function setNewNotice(event) {
    setNotice(event.target.value);
  }

  function newNotice() {
    setAddNotice(true);
  }

  async function noticeCreator() {
    if (notice.trim().length === 0) {
      return;
    }
    const obj = { notice: notice };

    await axios.post("https://schooladminreact.herokuapp.com/createNotice", obj);
    setNotice("");
    showNotices();
     
   
   
  }

  async function showNotices(){
    const response = await axios.get("https://schooladminreact.herokuapp.com/getNotices");
   

    const loadNotices = [];

    for(let key in response.data){
        loadNotices.push({
            id:response.data[key]._id,
            notice:response.data[key].notice
        })
    }
    setLoadedNotices(loadNotices);
  }
 

  return (
    <div>
      <div style={{marginBottom:"10%"}}>
        
        {addNotice && (
          <div>
            <input
              type="text"
              placeholder="new notice here"
              onChange={setNewNotice}
              value={notice}
            />
            <button onClick={noticeCreator}>Create New Notice</button>
          </div>
        )}
        {!addNotice && <button onClick={newNotice}>+ Create New Notice</button>}
      </div>
      <div style={{ backgroundColor: "rgb(185, 181, 181)",borderRadius:"20px"}}>
            {loadedNotices.map((notice)=><ShowEachNotice call="admin" notice={notice} showNotices={showNotices}/>)}
      </div>
    </div>
  );
};
export default AdminNoticeBoard;

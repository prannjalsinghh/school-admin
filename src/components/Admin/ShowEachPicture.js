import axios from 'axios'
import './ShowEachPicture.css'
const ShowEachPicture = (props)=>{
    const handleDelete = async (name) => {
        await axios
          .delete("https://schooladminreact.herokuapp.com/delete", {
            data: { name: name },
          })
          .then(props.getAllPics())
          .catch((error) => console.log(error.message));
      };
    return(
        <div>
            <img src={props.item.url} alt=""/>
            {props.call==="admin" && <button onClick={()=>handleDelete(props.item.name)}>Delete</button>}
        </div>
    )
}
export default ShowEachPicture;
import { useEffect,useState } from "react";
import axios from 'axios'
import ShowContactUsDataEach from './ShowContactUsDataEach'
import style from './ShowContactUs.module.css'


const ShowContactUs = ()=>{
    const [loadedData,setLoadedData] = useState([]);
    useEffect(()=>{
        setContactUs();
    },[]);

    async function setContactUs(){
        const response = await fetch("https://schooladminreact.herokuapp.com/getContactUs")
        const data = await response.json();
       

        const LoadContactUs= [];

        for(let key in data){
            LoadContactUs.push({
                id:key,
                name:data[key].name,
                phone:data[key].phone,
                email:data[key].email,
                subject:data[key].subject,
                message:data[key].message
            })
            LoadContactUs.reverse();
            setLoadedData(LoadContactUs);
        }
        console.log(loadedData)

    }

    return(
        <div className={style.main}>
            { loadedData.map((data)=>
            <ShowContactUsDataEach name= {data.name} phone={data.phone} email={data.email} subject={data.subject} message={data.message} />
            )}
            
        </div>
    )
    
}
export default ShowContactUs;
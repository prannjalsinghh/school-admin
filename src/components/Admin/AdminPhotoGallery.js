import React, { useState,useEffect } from "react";
import axios from "axios";
import ShowEachPicture from "./ShowEachPicture";
import LoadingSpinner from "../Loading";
const AdminPhotoGallery = () => {
  const [pic, setPic] = useState();
  const [allPics, setAllPics] = useState([]);
  const [isLoading,setIsLoading] = useState();
  useEffect(() => {
    getAllPics();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pic", pic);
    try{
      await axios.post("https://schooladminreact.herokuapp.com/addPicture", formData)
      getAllPics();
      setPic(null);
    }catch(e){
      console.log(e);
    }
    

     
  };
  const handleChange = (e) => {
    setPic(e.target.files[0]);
  };

  const getAllPics = async () => {
   setIsLoading(true);
   try{
    const response = await axios.get("https://schooladminreact.herokuapp.com/pictures")
    const data = response.data;

       const loadPictures = [];

    for (let key in data) {
      loadPictures.push({
        url:data[key].url,
        name:data[key].name
      });
     
    }
    setAllPics(loadPictures)
   }catch(e){
    console.log(e);
   }
    
   
    setIsLoading(false);
    
  };



  return (
    
      <div >
        <form style={{marginBottom:"10%"}}onSubmit={handleSubmit}>
          <input type="file" onChange={handleChange} />
          <button type="submit">upload new file</button>
        </form>
    
        <div>
          {isLoading && <LoadingSpinner/>}
          {!isLoading && allPics.map((item)=>(
            <ShowEachPicture call="admin" item={item} getAllPics={getAllPics}/>
          ))}
        </div>
      </div>
    );
  
};
export default AdminPhotoGallery;

import { useEffect, useState } from "react";
import ShowEachNotice from "../Admin/ShowEachNotice";
import Header from "../Header";
import axios from "axios";
import ShowEachPicture from "../Admin/ShowEachPicture";
import LoadingSpinner from "../Loading";

const Home = () => {
  const [loadedNotices, setLoadedNotices] = useState([]);
  const [pic, setPic] = useState();
  const [allPics, setAllPics] = useState([]);
  const [isLoading,setIsLoading] = useState();

  useEffect(() => {
    showNotices();
    getAllPics();
  }, []);
  async function showNotices() {

    const response = await axios.get("https://schooladminreact.herokuapp.com/getNotices");

    const loadNotices = [];

    for (let key in response.data) {
      loadNotices.push({
        id: response.data[key]._id,
        notice: response.data[key].notice,
      });
    }
    setLoadedNotices(loadNotices);
  }

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
    <div>
      <Header />
      <div>
        <div>
          <h1>Notices</h1>
          {loadedNotices.map((notice) => (
            <ShowEachNotice call="home" notice={notice} />
          ))}
        </div>
        <div>
          <h1>Photo Gallery</h1>
          <div>
            {isLoading && <LoadingSpinner/>}
            {allPics.map((item) => (
              <ShowEachPicture item={item} call="home" getAllPics={getAllPics} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

import { useEffect, useState } from "react";
import AdminLeft from "../Admin/AdminLeft";
import AdminRight from "../Admin/AdminRight";
import Header from "../Header";


const Admin = () => {
  const [dataShown, setDataShown] = useState();

  function setDataHandler(clicked) {
    setDataShown(clicked);
  }
  return (
    <>
      <Header />
      <div>
        <AdminLeft onChangeData={setDataHandler} />
        <br/>
        <AdminRight data={dataShown} />
      </div>
    </>
  );
};
export default Admin;

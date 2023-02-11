import React, { useState } from "react";
import UserForm from "./User/UserForm";
import UserTable from "./User/UserTable";

const App = () => {
  const [userData, setUserData] = useState([]);

  return (
    <>
      <UserForm setUserData={setUserData} userData={userData} />
      <UserTable userData={userData} />
    </>
  );
}

export default App;

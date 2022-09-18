import { Link, useParams } from "react-router-dom";
import react, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [userData, setUserData] = useState({});

  const { username } = useParams();

  async function getUserData() {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${username}`);
    console.log(data)
    setUserData(data)
    //{userData.length >0 ? true : false}
  }

  useEffect(() => {
    getUserData()
    
  }, []);

  //"https://jsonplaceholder.typicode.com/users/id"

  return (
    <div>
        <Link to="/"> Go Back </Link>
        <h1> {userData.id} </h1>
        <h1> {userData.name} </h1>
        <h1> {userData.email} </h1>
        <h1> {userData.username} </h1>

    </div>
  );
}

export default Users;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const [remove, setDeleteUser] = useState()


  const showUsers = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/users");
      const userData = await data.json();
      setUsers(userData.users);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const deleteUser = async () =>{
    const data = await fetch(`http://localhost:8000/api/users/${remove}`,{
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}

    })
    if(data.ok){
      console.log("user is deleted")
      showUsers()
    }else{
      console.log("user did not get deleted ")
    }
  }



  useEffect(() => {
    showUsers();
  }, []);

  useEffect(()=>{
  },[deleteUser])

  return (
    <>
      <header>
        <h1>USERDATABASE</h1>
      </header>

      <main>
        <ul>
          {users.map((user) => (
            <li key={user.id || user._id}>
              <span> id:{user.id}  Name: {user.name} Email: {user.email} </span>
            </li>
          ))}
        </ul>

        <h1>Delete  users here </h1>
        <form>
          <input type="text" value={remove} placeholder="delete user with it's ID"
          onChange={(e)=> setDeleteUser(e.target.value)} />
        </form>
        <button onClick={deleteUser}>Delete User</button>
      </main>

      <footer>Copyright &copy; 2025</footer>
    </>
  );
}

export default Home;

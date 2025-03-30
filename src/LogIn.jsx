import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [users, setUsers] = useState([]);

  const LogInApi = async () => {
    const res = await fetch("http://localhost:8000/api/users");
    const data = await res.json();
    console.log(data);
    setUsers(data.users);
  };

  useEffect(() => {
    LogInApi();
  }, []);

  const handleLogin = () => {
    const foundUser = users.find(
      (e) => e.name === userName && e.password === userpassword
    );

    if (foundUser) {
      console.log("user found Logging in");
    } else {
      console.log("user not found try another name name");
    }
  };

  return (
    <>
      <section className="login-container">
        <div>LogIn</div>
        <div>
          <input
            type="text"
            placeholder="Ditt användarnamn"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Lösenord"
            value={userpassword}
            onChange={(e) => setUserpassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        <div>
          <Link to={"/signup"}>
            <p>Create an account</p>
          </Link>
        </div>
      </section>
    </>
  );
}
export default LogIn;

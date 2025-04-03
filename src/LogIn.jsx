import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function LogIn() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [users, setUsers] = useState([]);
  const [loginSuccess , setLoginSuccess] = useState(null)

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
      setLoginSuccess(true)
    } else {
      console.log("user not found try another name name");
      setLoginSuccess(false)

    }

  };

  useEffect(()=>{
    if(loginSuccess === true){
      navigate("home")
    }
  },[loginSuccess])

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

         <p>{loginSuccess === false &&  "Fel användarnamn eller lösenord"
          }</p>
         <p>{loginSuccess === true && "Du loggas in...."}</p>
      
         
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

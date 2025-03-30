import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [newUserName, setNewUserName] = useState("");
  const [newUserEmail, setNewUseremail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  const signUp = async () => {
    const res = await fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        name: newUserName,
        email: newUserEmail,
        password: newUserPassword,
      }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <section className="signup-container">
        <div className="form-container">
          <div className="Signup-title">Skapa ett nytt konto</div>
          <input
            className="input"
            type="text"
            placeholder="Användarnamn"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />

          <div className="acc-details">
            <form>
              <input
                className="input"
                type="email"
                placeholder="Email"
                value={newUserEmail}
                onChange={(e) => setNewUseremail(e.target.value)}
              />
            </form>
          </div>

          <div className="acc-details">
            <form>
              <input
                className="input"
                type="password"
                placeholder="Lösenord"
                value={newUserPassword}
                onChange={(e) => setNewUserPassword(e.target.value)}
              />
            </form>
          </div>
          <div className="btn-1">
            <Link to={"/login"}>
              <button className="btn" onClick={signUp}>
                SKAPA
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;

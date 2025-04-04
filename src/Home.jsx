import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const [remove, setDeleteUser] = useState();

  const showUsers = async () => {
    try {
      const data = await fetch("http://localhost:8000/api/users");
      const userData = await data.json();
      setUsers(userData.users);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const deleteUser = async (id) => {
    const data = await fetch(`http://localhost:8000/api/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (data.ok) {
      console.log("user is deleted");
      showUsers();
    } else {
      console.log("user did not get deleted ");
    }
  };

  useEffect(() => {
    showUsers();
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="title">User Database</h1>
      </header>

      <main className="main">
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id || user._id} className="user-card">
              <div className="user-info">
                <p>
                  <strong>ID:</strong> {user._id}
                </p>
                <p>
                  <strong>Name:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
              <button
                className="delete-button"
                onClick={() => deleteUser(user._id)}
              >
                Delete User
              </button>
            </li>
          ))}
        </ul>

        <h2 className="delete-title">Delete users manually</h2>
        <form
          className="delete-form"
          onSubmit={(e) => {
            e.preventDefault();
            deleteUser(remove);
          }}
        >
          <input
            type="text"
            value={remove}
            placeholder="Enter user ID"
            onChange={(e) => setDeleteUser(e.target.value)}
            className="delete-input"
          />
          <button className="delete-button">Delete User</button>
        </form>
      </main>

      <footer className="footer">© 2025 UserDB</footer>
    </>
  );
}

export default Home;

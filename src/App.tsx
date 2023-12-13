import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const result: any = await axios.get("http://localhost:7000/users", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=utf-8",
          },
        });
        const { data } = result
        console.log({ data });
        setUsers(data);
      } catch (e:any) {
        console.error(e);
        setError(e)
      }
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {users.length > 0 ? users.map((user:any) => 
          <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>   
            <hr></hr>
          </div>) : <div>No hay usuarios todavia</div>}
        </p>
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

/* https://randomuser.me/api */

const fetchData = async () => {
  const res = await axios.get("https://randomuser.me/api");
  const resJSON = res.data.results;
  return resJSON;
};

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    userFetch();
  }, []);

  const userFetch = () => {
    fetchData().then((data) => setUser(data));
  };
  return (
    <div className="App">
      {user.map((element, index) => (
        <div className="card" key={index}>
          <img src={element.picture.large} alt="" />
          <div className="container">
            <p>
              <strong>{`${element.name.title} ${element.name.first} ${element.name.last}`}</strong>
            </p>
            <p>{element.email}</p>
          </div>
        </div>
      ))}
      <a onClick={userFetch}>new user</a>
    </div>
  );
}

export default App;

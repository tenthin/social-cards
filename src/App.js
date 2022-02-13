import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";

function App() {

  const [users, setUsers] = useState([]);
  useEffect (() => {
    (async () => {
      let userData;
      try{
        const response = await fetch('https://randomuser.me/api/?results=10');
        userData = (await response.json()).results;
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);
    })();
  }, []);
  return (
    <div className="App">
      <h1>Social Cards</h1>
      <div className="cards-container">


      
      {users.map((user, index) =>(
        <SocialCard userData={user} key={index}/>
      ))}
      </div>
    </div>
  );
}

export default App;

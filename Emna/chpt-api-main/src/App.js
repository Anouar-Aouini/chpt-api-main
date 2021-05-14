import "./App.css";
import DetailsUser from "./Components/DetailsUser";
import NavHeader from "./Components/NavHeader";
import UserList from "./Components/UserList";
import axios from "axios";
import React,{useState,useEffect} from 'react'

function App() {
  const [users , setUsers] = useState([])
  const fetchData = async () => {
    try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(result.data)
    }
    catch(err) {
      setUsers(null)
    }
  }
  useEffect(() => {
        fetchData();
    }, [])
    console.log(users)
  return (
    <div className="App">
      <NavHeader/>
      <UserList users={users}/>
    </div>
  );
}

export default App;

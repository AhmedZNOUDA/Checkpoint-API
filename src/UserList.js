import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserList() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
      axios.get(url).then(json => setData(json.data))
    }, [])
    
    const UserList = () => {
      return data. map(user => 
           (
              <p>I'm <span>{user.name}</span> and my Email is <span className="S1">{user.email}</span></p>
          ))
    }
     
    return (
        <div className="App">
         <h1 style={{fontSize:'40px', color: 'crimson', fontWeight:'700', fontFamily: 'Roboto'}}>My User List</h1>
          <p style={{fontSize:'25px', color: 'dodgerblue', fontWeight:'500', fontFamily: 'Roboto'}}>{UserList()}</p>
       </div>
      )
      
    }
    
    export default UserList;
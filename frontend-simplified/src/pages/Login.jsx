import React from "react";
import { useState } from "react";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newLogin ={
       
        email,
        password
    }
    updateLogin(newLogin);

  };

  const updateLogin = async(item)=> {
    console.log("Here");
    console.log(JSON.stringify(item));

    const res = await fetch(`/api/users/login`, {
        method : "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(item),
    });
    const user = await res.json();
    console.log(user);
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      <button className='button'>Login</button>
      </form>
    </div>
  );
};

export default Login;

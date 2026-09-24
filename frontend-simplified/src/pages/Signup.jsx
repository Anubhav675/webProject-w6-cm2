import React from "react";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newSignup ={
        name,
        email,
        password
    }
    updateSignup(newSignup);

  };

  const updateSignup = async(item)=> {
    console.log("Here");
    console.log(JSON.stringify(item));

    const res = await fetch(`/api/users/signup`, {
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
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
      <button className='button'>Signup</button>
      </form>
    </div>
  );
};

export default Signup;

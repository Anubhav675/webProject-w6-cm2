import React from "react";
import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [doB, setDoB] = useState("");
  const[street, setStreet] = useState('');
  const[city, setCity] = useState('');
  const[zipCode, setZipCode] = useState('');
  
  

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newSignup = {
      name,
      email,
      password,
      phone_number: phoneNumber,
      gender,
      date_of_birth: doB,
      address: {
        street,
        city,
        zipCode,
      },
    };
    updateSignup(newSignup);
  };

  const updateSignup = async (item) => {
    console.log("Here");
    console.log(JSON.stringify(item));

    const res = await fetch(`/api/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    const user = await res.json();
    console.log(user);
  };
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
        <label>Phone number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <label>DOB</label>
        <input
          type="date"
          value={doB}
          onChange={(e) => setDoB(e.target.value)}
        />
        <label>
            Address
            <input
          type="text"
          value={street}
          placeholder="Street"
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          type="text"
          value={city}
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
          <input
          type="number"
          value={zipCode}
          placeholder="Zip-Code"
          onChange={(e) => setZipCode(e.target.value)}
        />
            </label>
        <button className="button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;

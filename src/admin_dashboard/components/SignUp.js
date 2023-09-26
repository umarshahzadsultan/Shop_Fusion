import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_transparent.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up:", name , email, password, phone);

    setTimeout(()=>{
      setSuccessMessage('Register Successfully, You can Sign In!');
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
    },1000);
  };
  return (
    <div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <img src={logo} alt="" />
        {successMessage && <p className="success-message">{successMessage}</p>}
        <h2>Sign Up</h2>
        <input
          type="name"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit"> Sign Up</button>
        <p>
          Already have an account? <Link to="/SignIn">Sign In</Link>
        </p>
      </form>
    </div>
  );
};
export default SignUp;
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SingUpAPI } from './SingUpAPI';

const SingUp = ({ SingUpAPI }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const newUser = {
    username,
    email,
    password
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };
  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handelSubmit = event => {
    event.preventDefault();
    SingUpAPI(newUser);
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          onChange={handleUsername}
        />
        <input
          type="email"
          placeholder="Email"
          required
          onChange={handleEmail}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={handlePassword}
        />
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({});
const mapDispatchToProps = {
  SingUpAPI
};
export default connect(mapStateToProps, mapDispatchToProps)(SingUp);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginAPI from './LoginAPI';

const SingUp = ({ LoginAPI }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const credentials = {
    email,
    password
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };
  const handelSubmit = event => {
    event.preventDefault();
    LoginAPI(credentials);
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handelSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="Email"
            required
            onChange={handleEmail}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            required
            onChange={handlePassword}
          />
        </label>
        <p className="sing-up-text">
          Don't have an account? <a href="/sing-up">Sing up</a>
        </p>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  LoginAPI
};
export default connect(mapStateToProps, mapDispatchToProps)(SingUp);

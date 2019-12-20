import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export function SingUpAPI({ username, email, password }) {
  return async function() {
    try {
      await axios({
        method: 'post',
        url: `${baseURL}/sing-up`,
        data: {
          username,
          email,
          password
        }
      }).then(function({ data }) {
        if (data.auth) {
          localStorage.setItem('token', data.token);
          window.location.href = '/home';
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}

import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const LogInAPI = ({ email, password }) => {
  return async function() {
    try {
      await axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: {
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
};

export default LogInAPI;

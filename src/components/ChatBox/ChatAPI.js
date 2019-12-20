import axios from 'axios';
const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export function getMessages() {
  return async function(dispatch) {
    try {
      const messages = await axios({
        method: 'get',
        url: `${baseURL}/get-messages`,
        headers: {
          'x-acces-token': localStorage.getItem('token')
        }
      });
      return dispatch({
        type: 'GET_MESSAGES',
        payload: messages.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function newMessage(msgText) {
  return async function(dispatch) {
    try {
      const message = await axios({
        method: 'post',
        url: `${baseURL}/new-message`,
        headers: {
          'x-acces-token': localStorage.getItem('token')
        },
        data: {
          text: msgText
        }
      });
      return dispatch({
        type: 'NEW_MESSAGE',
        payload: message.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function youTubeBot(qSearch) {
  return async function(dispatch) {
    try {
      const videoId = await axios({
        method: 'post',
        url: `${baseURL}/youtube-bot`,
        headers: {
          'Content-Type': 'application/json',
          'x-acces-token': localStorage.getItem('token')
        },
        data: {
          qSearch
        }
      });
      return dispatch({
        type: 'NEW_VIDEO_ID',
        payload: videoId.data
      });
    } catch (err) {
      console.log(err);
    }
  };
}

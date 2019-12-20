import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const initialState = {
  messages: [],
  newMessage: ''
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MESSAGES':
      return {
        ...state,
        messages: action.payload
      };
    case 'NEW_MESSAGE':
      return {
        ...state,
        newMessage: action.payload,
        messages: state.messages.concat(action.payload)
      };
    default:
      return state;
  }
};

export default createStore(reducer, applyMiddleware(ReduxThunk));

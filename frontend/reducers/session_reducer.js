// import {
//   RECEIVE_CURRENT_USER,
//   RECEIVE_ERRORS
// } from '../actions/session_actions';
import merge from 'lodash/merge';


const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state)
  switch(action.type) {
    default:
      return state;

  }
}

export default SessionReducer

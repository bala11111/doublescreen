import { act } from "react-dom/test-utils";

const UPDATE_FORM = "UPDATE_FORM";
const LOGOUT = "LOGOUT";

const initalState = {
  name : '',
  email : '',
  isLoggedin : false
}

export default function url(state = initalState, action) {
    console.log('action comming to reducer',action);
    switch (action.type) {
      case UPDATE_FORM:
        return {
          ...state,
          name : action.name,
          email : action.email,
          isLoggedin : true
        };

        case LOGOUT : 
        return {
          ...state,
          isLoggedin : false
        }
      default:
        return state;
    }
}
  
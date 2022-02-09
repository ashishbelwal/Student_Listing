import { studentS_FETCHED } from "../actions/students";

const initialState = null;

export default function (state = initialState, action = {}){
    switch (action.type) {
        case studentS_FETCHED:
          return action.payload
        default:
          return state
      }
}
import { course_FETCHED, add_COURSE, remove_COURSE} from "../actions/students";

const initialState = null;

export default function (state = initialState, action = {}){
    switch (action.type) {
        case course_FETCHED:
          return action.payload
        case add_COURSE:
          return [...state, { ...action.payload }]
        case remove_COURSE:
          return [...state, { ...action.payload }]
        default:
          return state
      }
      
}
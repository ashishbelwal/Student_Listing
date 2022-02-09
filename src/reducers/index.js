import { combineReducers } from 'redux'
import students from './students'
import student from './student'
import courses from './courses'

export default combineReducers(
    {
        students,
        student,
        courses
    }
)
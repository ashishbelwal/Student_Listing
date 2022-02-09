import axios from 'axios';

export const studentS_FETCHED = 'studentS_FETCHED';
export const student_FETCHED = 'student_FETCHED';
export const course_FETCHED = 'course_FETCHED';
export const add_COURSE = 'add_COURSE';
export const remove_COURSE = 'remove_COURSE'


const studentsFetched = students => ({
    type: studentS_FETCHED,
    payload: students
})
const studentFetched = student => ({
    type: student_FETCHED,
    payload: student
})

const courseFetched = courses => ({
    type: course_FETCHED,
    payload: courses
});

const addCourse = course => ({
    type: add_COURSE,
    payload: course
})

const removeCourse = course => ({
    type: remove_COURSE,
    payload: course
})



export const loadStudents = () =>{
    return function(dispatch, getSate){
        if(getSate().students) return

        axios.get(`https://api.jsonserve.com/1ozX83`)
        .then(response => {
            dispatch(studentsFetched(response.data))
          })
        .catch(error => console.log(error))
    }
}

export const loadStudent = (id) => {
    return function(dispatch, getState){
        let students = getState().students;
        let student = students.filter((student) => id == student.id);
        dispatch(studentFetched(student))
    }
}

export const loadCourse = () => {
    return function(dispatch, getSate){
        if(getSate.courses) return

        axios.get(`https://api.jsonserve.com/pQLLIh`)
        .then(response => {
            dispatch(courseFetched(response.data))
        })
    }
}

export const addCourseToStudent = (id, course) => {
    console.log(id, course);
    return function(dispatch, getState){
        let students = getState().students;
        students.map(el => {
            if(el.id == id){
                el.course.push(course)
                console.log(el)
            }
        })
        dispatch(addCourse(students))
    }
}
export const removeCourseToStudent = (id, course) => {
    return function(dispatch, getState){
        let students = getState().students;
        students.map(el => {
            if(el.id == id){
                for(let i = 0; i<el.course.length; i++){
                    if(el.course[i].id == course.id){
                        el.course.splice(i, 1)
                    }
                }
                console.log(el)
            }
        })
        dispatch(removeCourse(students))
    }
}


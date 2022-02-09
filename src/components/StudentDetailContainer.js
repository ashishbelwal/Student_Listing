import * as React from 'react'
import StudentDetail from './StudentDetail'
import { connect } from 'react-redux'
import { loadStudent, loadCourse, addCourseToStudent, removeCourseToStudent} from '../actions/students'
import { useParams } from 'react-router-dom';


class StudentDetailContainer extends React.PureComponent{
    componentDidMount() {
        let param = window.location.href.split('/');
        let id = Number(param[param.length - 1]);
        this.props.loadStudent(id);
        this.props.loadCourse();
    }
    render() {
        return <StudentDetail student={this.props.student} courses= {this.props.courses} addCourse = {this.props.addCourseToStudent} removeCourse = {this.props.removeCourseToStudent} />
    }
    
}

const mapStateToProps = state => ({
    student: state.student,
    courses: state.courses
  })
export default connect(mapStateToProps, { loadStudent, loadCourse, addCourseToStudent, removeCourseToStudent })(StudentDetailContainer);
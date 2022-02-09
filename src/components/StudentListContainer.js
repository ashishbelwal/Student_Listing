import * as React from 'react'
import { loadStudents } from '../actions/students'
import { connect } from 'react-redux'
import StudentList from './StudentList'
import List from '@mui/material/List';


class StudentListContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {

    if (!this.props.students) return "...Loading users"

    return (
      <div className="studentList">
        <List>
          <StudentList students={this.props.students} />
        </List>
        
      </div>
    )
  }
}


const mapStateToProps = state => (
  {
    students: state.students
  })


export default connect(mapStateToProps, { loadStudents })(StudentListContainer)
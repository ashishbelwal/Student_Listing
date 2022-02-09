import * as React from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import StudentListContainer from './components/StudentListContainer';
import StudentDetailContainer from './components/StudentDetailContainer';
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';


class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route exact path='/' element={<StudentListContainer />} />
            <Route exact path='/students/:id' element={ <StudentDetailContainer /> } />
          </Routes>
        </Container>
        
      </Provider>
    )
  }
}

export default App;
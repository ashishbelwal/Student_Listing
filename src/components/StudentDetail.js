import * as React from 'react'
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';

export default function UserDetail(props) {
  const [drawerState, setDrawerState] = useState({
    right: false,
  });
  
  if (!props.student) return `...Loading User Details`

  const addRemoveCourse = (id,item) => {
    let found = props.student[0].course.some(el => el.id == item.id )
    if(found){
      console.log("Remove course")
      props.removeCourse(id,item)
    }
    else{
      console.log("Add course")
      props.addCourse(id,item)
    }
    
}

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setDrawerState({ ...drawerState, [anchor]: open });
  };
  const list = (anchor) => (
    <Box sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.courses && props.courses.map((item) => 
          <ListItem button key={item.id} onClick={() => {addRemoveCourse(props.student[0].id, item)}}>
              <ListItemText primary={item.name} />
          </ListItem>
        )}
      </List>
    </Box>
  );
  return (
    <div>

      {props &&
        <div className='titleHeader'>
          <h1>Name: {props.student[0].name}</h1>
          <p>Email: {props.student[0].email}</p>
        </div>
      }

      

      <div className="listContainer">
        <h3>Courses</h3>
        <List>  
          {props && props.student[0].course.map((item, index) => {
            return(
              /* eslint-disable */ 
              <ListItem button key={item.id} >
                  <ListItemText primary={item.name} />
              </ListItem>
            )
          })}
          {!props.student[0].course &&
            <div className='titleHeader'>
              <p>No course has been added yet!</p>
            </div>
          }
        </List>
      </div>
      


      <Button variant="contained" onClick={toggleDrawer('right', true)}>Add Course</Button>
      <Drawer
          anchor='right'
          open={drawerState['right']}
          onClose={toggleDrawer('right', false)}
      >
          {list('right')}
      </Drawer>
    </div>
  )
}
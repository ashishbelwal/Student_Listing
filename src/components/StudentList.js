import * as React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';


export default function StudentList(props) {
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);
    const [data, setData] = useState(null)
    useEffect(() => {
      const chunk = (items, size) => {  
          const chunks = []
          items = [].concat(...items)
          
          while (items.length) {
              chunks.push(
              items.splice(0, size)
              )
          }
          return chunks
      }
      let formatData = chunk(props.students, 8);
      setData(formatData);
      setCount(formatData.length)
     }, []);
  return (
    <div>
      <h1>List of users</h1>

        {data && data[page - 1].map(student =>
          <ListItem disablePadding key={student.id}>
            <ListItemButton component={Link} to={`/students/${student.id}`} >
                <ListItemText primary={student.name} />
            </ListItemButton>
          </ListItem>
        )}
        <Pagination onChange={(e, value) => setPage(value)} count={count} />
    </div>
  )
}
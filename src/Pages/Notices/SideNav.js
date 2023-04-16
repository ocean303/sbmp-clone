import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Link } from "react-router-dom";
import { width } from '@mui/system';
const style = {
  width: '100%',
  bgcolor: 'background.paper',
};
const SideNav = () => {
  return (
    <div style={{float:'left', width:'20%', padding:'1px'}} className='SideMenu'>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
        <Link to='/staffnotices' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Staff Notices"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/studnotices' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Student Notices"/></Link>
    </ListItem>
    <Divider />
    <ListItem button>
        <Link to='/cumulativeatt' style={{textDecoration:'none'}}><ListItemText style={{color:'black'}} primary="Cumulative Attendance"/></Link>
    </ListItem>
    <Divider />
    
    </List>
  </div>
  )
}

export default SideNav
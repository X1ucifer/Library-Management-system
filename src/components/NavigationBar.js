// import React, { Component } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";

// class NavigationBar extends Component {
//   render() {
//     return (
//       <Navbar bg="primary" variant="dark">
//         <Link to={""} className="navbar-brand">
//           {" "}
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png"
//             width="25"
//             height="25"
//             alt="brand"
//           />
//         </Link>
//         <Nav className="mr-auto">
//           <Link to={"add"} className="nav-link">
//             Add Book
//           </Link>
//           <Link to={"list"} className="nav-link">
//             Book Listing
//           </Link>
//         </Nav>
//       </Navbar>
//     );
//   }
// }

// export default NavigationBar;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavigationBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>

            <Link to={"/"} style={{color:"black"}}>
              Library Management System
            </Link>

          </Typography>


          <Button color="inherit">

            <Link to={"add"} className="nav-link">
              Add Book
            </Link>


          </Button>

          <Button>
            <Link to={"list"} className="nav-link">
              Book Listing
            </Link>
          </Button>


        </Toolbar>
      </AppBar>
    </div>
  );
}

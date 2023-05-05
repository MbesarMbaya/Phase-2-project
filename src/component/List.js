import React from 'react';
import logo from '../Images/replace.png';
import {NavLink} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import '../Css/ListStyle.css';

const List = () => {
  return (
    <>
      <header>
        <div className="container container-flex">
          <div className="logoContainer">
            <img src={logo} alt="logo" className="logo" />
          </div>
          <nav>
            <div className="List">
                <NavLink exact to="/"className="listItem"activeClassName="activeItem">Home</NavLink>
                <NavLink to="/about"className="listItem"activeClassName="activeItem">About</NavLink>
                <NavLink to="/courses"className="listItem"activeClassName="activeItem">Courses</NavLink>
                <NavLink to="/contact"className="listItem"activeClassName="activeItem">Contact</NavLink>
                <NavLink to="/policy"className="listItem"activeClassName="activeItem">Policy</NavLink>
            </div>
          </nav>
          <div className="icons">
              <SearchIcon className="icon"/>
              <PersonIcon className="icon"/>
              <PhoneIcon className="icon"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default List;

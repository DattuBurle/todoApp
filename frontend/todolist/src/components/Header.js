
import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from "@material-ui/icons/Search";

function Header({searchChange}) {
    return (
      <div className="header">
        <div className ="header__logo">
            <h1 className='header__h1'>ToDo</h1>
        </div>
        <div className = "header__search" >
            <SearchIcon style={{ fontSize: 25 }} className = "header__searchIcon" />
            <input 
              type= "search" 
              placeholder="Search ToDos" 
              className = "header__searchInput"
              onChange = {searchChange}/>
        </div>
      </div>
    );
  }
  
  export default Header;
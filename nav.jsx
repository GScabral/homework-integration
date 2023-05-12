import React from "react";
import SearchBar from "../buscador/SearchBar";
import style from "./nav.module.css"
import { Link } from "react-router-dom";

const Nav=({onSearch})=>{
    return(
        <nav className={style.nav}>
    <SearchBar onSearch={onSearch} />
    
        <Link to='/about'>
             <botom>about </botom>
        </Link>
          
        <Link to='/home'>
            <botom>home</botom>
        </Link>
        
    
    </nav>
    
    );
}

export default Nav;
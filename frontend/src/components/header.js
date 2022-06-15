import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom';
import Navigation from './nav';
import ukiki from './img/우끼끼.png';


function Header(){
    return(
        <div className="row mb-5">
            <div className="Header  text-center  col-md-2 p-1">
                <Link className="title"to={'/'}><h3 className="mt-2"><img src={ukiki} style={{width:`${80}px`}} ></img>우끼끼</h3></Link> 
            </div>
            <div className="nav col-md-10">
                <Navigation />
            </div>
        </div>
        
    );
}

export default Header;
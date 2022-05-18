import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom';
import Navigation from './nav';

function Header(){
    return(
        <div className="row mb-5">
            <div className="Header h1 p-4 text-center  col-md-2">
                <Link className="title"to={'/'}>우끼끼</Link>
            </div>
            <div className="nav col-md-10">
                <Navigation />
            </div>
        </div>
        
    );
}

export default Header;
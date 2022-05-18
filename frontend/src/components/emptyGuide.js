import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';


function EmptyGuide(){
    return(
        <div className="emptyGuide">
            <div className="row" >
                <img id="img"src={require('./img/donggukmap.png')} alt="1"></img>
                <div id="library_cover" > </div>

                <div id="new_tech_cover" ></div>
            </div>
        </div>
    )
}

export default EmptyGuide;
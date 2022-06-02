import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'

const MenuItem = ({active, children, to})=>(

    <Link to={to} className="menu-item">
        {children}
    </Link>
)

function Navigation(){
    return(
        <div className="Navigation">
            <Nav className="p-1 mb-5" variant ="pills" activekey="1">
                <NavDropdown title="가이드 선택" id="guide">
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/cse'}>학업이수 가이드</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/scheduleGuide'}>시간표 가이드</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/emptyGuide'}>공강 가이드</MenuItem></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="공과대학" id="college">
                    <NavDropdown.Item>학업이수 가이드</NavDropdown.Item>
                    <NavDropdown.Item>스케줄 가이드</NavDropdown.Item>
                    <NavDropdown.Item>공강 가이드</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="학과" id="major">
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/civ'}>건설환경공학과</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/ard'}>건축공학전공</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/arc'}>건축학전공</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/mec'}>기계로봇에너지공학과</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/mme'}>멀티미디어공학과</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/ise'}>산업시스템공학과</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/eme'}>융합에너지신소재공학과</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/ene'}>전자전기공학부</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/inc'}>정보통신공학전공</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/cse'}>컴퓨터공학전공</MenuItem></NavDropdown.Item>
                    <NavDropdown.Item><MenuItem to={'/api/graduateGuide/cen'}>화공생물공학과</MenuItem></NavDropdown.Item>
                </NavDropdown>
            </Nav>  
        </div>
    )
}

export default Navigation;
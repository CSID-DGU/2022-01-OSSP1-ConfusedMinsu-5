import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

import { render } from '@testing-library/react';
import  {useState, useEffect} from 'react';

function GraduateGuide(){
        const [message, setMessage] = useState("");

        useEffect(()=>{
            fetch('graduateGuide')
                .then(res => res.text())
                .then(message => {
                    setMessage(message);
                })
        },[])
        return(
            <div className="GraduateGuide">
                <div className="row justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="h2 p-3 m-2 list" id="kyoyang">
                            <a href="#">교양</a> 
                        </div>
                        <div className="h2 p-3 m-2 list" id="major">
                            <a href="#">전공</a>
                        </div>
                        <div className="h2 p-3 m-2 list" id="graduate">
                            <a href="#">졸업요건</a>
                        </div>
                        <div className="h2 p-3 m-2 list" id="group">
                            <a href="#">소모임</a>
                        </div> 
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="component" id="kyoyang_info">
                        <div className="p-3">
                            <p className="h3"><b>교양</b></p>
                            <p><b>기본소양 (9학점)</b></p>
                            <ul>
                                <li>공학윤리</li>
                                <li>공학경제</li>
                                <li>기술창조와특허</li>
                            </ul>
                            <p><b>공통교양 (14~16학점)</b></p>
                            <ul>
                                <li>자아와명상 1, 2</li>
                                <li>불교와인간</li>
                                <li>EAS 1, 2</li>
                                <li>{message}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="component" id="major_info">
                        <div className="p-3">
                            <p className="h3"><b>전공</b></p>
                            <p><b>기본소양 (9학점)</b></p>
                            <ul>
                                <li>공학윤리</li>
                                <li>공학경제</li>
                                <li>기술창조와특허</li>
                            </ul>
                            <p><b>공통교양 (14~16학점)</b></p>
                            <ul>
                                <li>자아와명상 1, 2</li>
                                <li>불교와인간</li>
                                <li>EAS 1, 2</li>
                            </ul>
                        </div>
                    </div>
                    <div className="component" id="graduate_info" >
                        <div className="p-3">
                            <p className="h3"><b>졸업요건</b></p>
                            <p><b>기본소양 (9학점)</b></p>
                            <ul>
                                <li>공학윤리</li>
                                <li>공학경제</li>
                                <li>기술창조와특허</li>
                            </ul>
                            <p><b>공통교양 (14~16학점)</b></p>
                            <ul>
                                <li>자아와명상 1, 2</li>
                                <li>불교와인간</li>
                                <li>EAS 1, 2</li>
                            </ul>
                        </div>
                    </div>
                    <div className="component" id="group_info" >
                        <div className="p-3">
                            <p className="h3"><b>소모임</b></p>
                            <p><b>기본소양 (9학점)</b></p>
                            <ul>
                                <li>공학윤리</li>
                                <li>공학경제</li>
                                <li>기술창조와특허</li>
                            </ul>
                            <p><b>공통교양 (14~16학점)</b></p>
                            <ul>
                                <li>자아와명상 1, 2</li>
                                <li>불교와인간</li>
                                <li>EAS 1, 2</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
    


export default GraduateGuide;
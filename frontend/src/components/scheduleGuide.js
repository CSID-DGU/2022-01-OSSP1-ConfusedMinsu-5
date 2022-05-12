import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';

function ScheduleGuide(){
    return(
        <div className="ScheduleGuide">
            <div className="container mb-5" >
                <div className="row justify-content-center ">
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 1</h5>
                            <i className="fa-solid fa-circle-plus"></i>
                            <a className="col-md-2"id="add" href="#">추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 2</h5>
                            <a className="col-md-2"id="add" href="#">추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 3</h5>
                            <a className="col-md-2"id="add" href="#">추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 4</h5>
                            <a className="col-md-2"id="add" href="#">추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 5</h5>
                            <a className="col-md-2"id="add" href="#">추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 6</h5>
                            <a className="col-md-2"id="add" href="#">추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>
                    <button className="btn btn-primary" >만들기</button>    
                </div>
        
            </div>
        </div>
        
    )
}

export default ScheduleGuide;
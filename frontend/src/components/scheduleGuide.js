import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown,Button,Modal,Form} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom'


function ScheduleGuide(){
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
    <>
        <div className="ScheduleGuide">
            <div className="container mb-5" >
                <div className="row justify-content-center ">
                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 1</h5>
                            <i className="fa-solid fa-circle-plus"></i>
                            <a className="col-md-2"id="add" href="#open" onClick={handleShow}>추가</a>

                        </div>
                        <hr></hr>
                        <p>시간표를 담아주세요.</p>
                    </div>

                    <div className="schedule_list p-4 m-3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 2</h5>
                            <a className="col-md-2"id="add" href="#" onClick={handleShow}>추가</a>

                            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-venter" centered>
                                    <Modal.Header closeButton>
                                      <Modal.Title>강의담기</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Select aria-label = "Default select example">
                                            <option>단과대를 선택하세요</option>
                                            <option value="kyoyang">교양</option>
                                            <option value="">공과대학</option>
                                        </Form.Select>
                                        <br />
                                        <Form.Select aria-label = "Default select example">
                                            <option>학과를 선택하세요</option>
                                            <option value="cse">컴퓨터공학과</option>
                                            <option value="dee">전자전기고학과</option>
                                        </Form.Select>
                                        <br />
                                        <Form.Select aria-label = "Default select example">
                                            <option>강의를 선택하세요</option>
                                            <option value="자료구조와실습">자료구조와실습</option>
                                            <option value="공개SW프로젝트">공개SW프로젝트</option>
                                        </Form.Select>
                                    </Modal.Body>
                                    <Modal.Footer>
                                      <Button variant="secondary" onClick={handleClose}>
                                          닫기
                                      </Button>
                                      <Button variant="primary" onClick={handleClose}>
                                          추가하기
                                      </Button>
                                    </Modal.Footer>
                                  </Modal>
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
                    <Link to={'/scheduleGuide/scheduleTable'} className="make pt-3 pb-3">만들기</Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default ScheduleGuide;
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown,Button,Modal,Form} from 'react-bootstrap';
import '../App.css';
import {Link} from 'react-router-dom'
import ReactDOM from 'react-dom/client';    
import Axios from "axios"

const arr = [];

let index = 0;



function createLecture(){
    const g1 = document.getElementById("lectureG1");
    const newDiv =document.createElement('div');
    var select = document.getElementById("lecture");
    var lectureOutput = document.getElementById('lecture').options[select.selectedIndex].innerText;
    const lectureName = document.createTextNode(lectureOutput);
    var property = document.getElementById('lecture').value;
    newDiv.appendChild(lectureName)
    g1.appendChild(newDiv);
    arr[index] = {1 :property};
    index++;
  }

  function createLecture1(){
    const g2 = document.getElementById("lectureG2");
    const newDiv =document.createElement('div');
    var select = document.getElementById("lecture");
    var lectureOutput = document.getElementById('lecture').options[select.selectedIndex].innerText;
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(lectureOutput);
    newDiv.appendChild(lectureName)
    g2.appendChild(newDiv);
    arr[index] = {2 :property};
    index++;
  }
  function createLecture2(){
    const g3 = document.getElementById("lectureG3");
    const newDiv =document.createElement('div');
 
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(property);
    newDiv.appendChild(lectureName)
    g3.appendChild(newDiv);
    arr[index] = {3 :property};
    index++;
  }
  function createLecture3(){
    const g4 = document.getElementById("lectureG4");
    const newDiv =document.createElement('div');
 
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(property);
    newDiv.appendChild(lectureName)
    g4.appendChild(newDiv);
    arr[index] = {4 :property};
    index++;
  }
  function createLecture4(){
    const g5 = document.getElementById("lectureG5");
    const newDiv =document.createElement('div');
 
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(property);
    newDiv.appendChild(lectureName)
    g5.appendChild(newDiv);
    arr[index] = {5 :property};
    
    index++;
    //console.log(property);
  }
  function createLecture5(){
    const g6 = document.getElementById("lectureG6");
    const newDiv =document.createElement('div');
 
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(property);
    newDiv.appendChild(lectureName)
    g6.appendChild(newDiv);
    arr[index] = {6 :property};
    
    index++;
    console.log(arr);
    //console.log(property);
  }
  
  

function ScheduleGuide(){
const [array , setArray] = useState([]);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
 
const [show1, setShow1] = useState(false);

const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);

const [show2, setShow2] = useState(false);

const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);

const [show3, setShow3] = useState(false);

const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);

const [show4, setShow4] = useState(false);

const handleClose4 = () => setShow4(false);
const handleShow4 = () => setShow4(true);

const [show5, setShow5] = useState(false);

const handleClose5 = () => setShow5(false);
const handleShow5 = () => setShow5(true);
  
  const [lecture , setLecture] = useState("");

  useEffect(()=>{
    Axios.post("/scheduleGuide").then((res)=>{
            if(res.data){
                setLecture(res.data);
                console.log(lecture);
            }else{
                alert("failed to");
            }
    });
},[lecture]);




    const lectureRedner = () => {
        const result = [];
        for(let i = 0;i<lecture.length;i++){
            if(lecture[i].lectureCode.substr(0,3)=="CSE")
                result.push(<option key={i} value={lecture[i].lectureCode}>{lecture[i].lname}/{lecture[i].professor}/{lecture[i].dayTime}</option>);
        }
        return result;    
    }
    
    

    const arrRender = () =>{
        const result = [];
        for(let i = 0;i<index;i++){

            result.push(<p key={i}>{array[i]}</p>)
        }
        
        return result;
    } 

  const lectureElement = document.getElementById("lectureG1");
    return(
    <>
        <div className="ScheduleGuide">
            <div>
                {arrRender()}
            </div>
            <div className="container mb-5" >
                <div className="row justify-content-center ">
                    <div className="schedule_list p-4 m-3 g1" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 1</h5>
                            <i className="fa-solid fa-circle-plus"></i>
                            <a className="col-md-2"id="add" onClick={handleShow}>추가</a>

                        </div>
                        <hr></hr>
                        <div id="lectureG1">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                        
                    </div>

                    <div className="schedule_list p-4 m-3 g2" >
                        <div className="d-flex">
                            <h5 className="col-md-8 ">그룹 2</h5>
                            <a className="col-md-2"id="add"  onClick={handleShow1}>추가</a>

                            
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <div id="lectureG2">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                    </div>
                    <div className="schedule_list p-4 m-3 g3" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 3</h5>
                            <a className="col-md-2"id="add"  onClick={handleShow2}>추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <div id="lectureG3">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                    </div>
                    <div className="schedule_list p-4 m-3 g4" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 4</h5>
                            <a className="col-md-2"id="add" onClick={handleShow3}>추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <div id="lectureG4">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                    </div>
                    <div className="schedule_list p-4 m-3 g5" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 5</h5>
                            <a className="col-md-2"id="add" onClick={handleShow4}>추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <div id="lectureG5">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                    </div>
                    <div className="schedule_list p-4 m-3 g6" >
                        <div className="d-flex">
                            <h5 className="col-md-8">그룹 6</h5>
                            <a className="col-md-2"id="add"onClick={handleShow5}>추가</a>
                            <a className="col-md-2" id="del" href="#">삭제</a>
                        </div>
                        <hr></hr>
                        <div id="lectureG6">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                    </div>
                    <Link to={'/scheduleGuide/scheduleTable'} className="make pt-3 pb-3" onClick={()=>{

                        Axios(
                            {
                                url : '/scheduleTable.do',
                                method : 'post',
                                data:{
                                    arr
                                },
                                baseURL:'http://localhost:3000'
                            }).then(response=>{
                            console.log(response.data);
                        }).catch(error=>{
                            console.log(error.response);
                        });
                    }}>만들기</Link>
                </div>
            </div>
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
                    <Form.Select aria-label = "Default select example" id="major" name="major">
                        <option>학과를 선택하세요</option>
                        <option value="cse">컴퓨터공학과</option>
                        <option value="dee">전자전기공학과</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {lectureRedner()}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose();createLecture();}}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1} size="lg" aria-labelledby="contained-modal-title-venter" centered>
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
                    <Form.Select aria-label = "Default select example" id="major">
                        <option>학과를 선택하세요</option>
                        <option value="cse">컴퓨터공학과</option>
                        <option value="dee">전자전기공학과</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {lectureRedner()}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose1();createLecture1();}}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show2} onHide={handleClose2} size="lg" aria-labelledby="contained-modal-title-venter" centered>
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
                    <Form.Select aria-label = "Default select example" id="major">
                        <option>학과를 선택하세요</option>
                        <option value="cse">컴퓨터공학과</option>
                        <option value="dee">전자전기공학과</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {lectureRedner()}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose2();createLecture2();}}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show3} onHide={handleClose3} size="lg" aria-labelledby="contained-modal-title-venter" centered>
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
                    <Form.Select aria-label = "Default select example" id="major">
                        <option>학과를 선택하세요</option>
                        <option value="cse">컴퓨터공학과</option>
                        <option value="dee">전자전기공학과</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {lectureRedner()}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose3}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose3();createLecture3();}}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show4} onHide={handleClose4} size="lg" aria-labelledby="contained-modal-title-venter" centered>
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
                    <Form.Select aria-label = "Default select example" id="major">
                        <option>학과를 선택하세요</option>
                        <option value="cse">컴퓨터공학과</option>
                        <option value="dee">전자전기공학과</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {lectureRedner()}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose4}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose4();createLecture4();}}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={show5} onHide={handleClose5} size="lg" aria-labelledby="contained-modal-title-venter" centered>
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
                    <Form.Select aria-label = "Default select example" id="major">
                        <option>학과를 선택하세요</option>
                        <option value="cse">컴퓨터공학과</option>
                        <option value="dee">전자전기공학과</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {lectureRedner()}
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose5}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={()=>{handleClose5();createLecture5();}}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>
    )
}


export default ScheduleGuide;
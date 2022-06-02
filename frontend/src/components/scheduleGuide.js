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

const [show6, setShow6] = useState(false);

const handleClose6 = () => setShow6(false);
const handleShow6 = () => setShow6(true);
  
  const [lecture , setLecture] = useState("");

  const [table,setTable] = useState("");

  useEffect(()=>{
    Axios.post("/scheduleGuide").then((res)=>{
            if(res.data){
                setLecture(res.data);
                console.log(lecture);
            }else{
                alert("failed to");
            }
    });
},[]);




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

  const makeTable = (table) =>{
    var result = "";
    for(let i = 0;i<table.length;i++){
        for(let j=0;j<table[i].length;j++){
            
            result+=table[i][j][2];
            result+=','
        }
    }
    console.log(result);
    makeWholeTable(result);    
}

const makeWholeTable = (table) =>{
    const time = table;
    var timeArr = []
    var day;
    var boxSize;
    var startTime;
    var finishTime;
    var date;

    var temp;
    console.log(time)
    timeArr = time.split(',');
    for(let i = 0;i<timeArr.length;i++){;
        day = timeArr[i].substr(0,1);
        temp = timeArr[i].split('-');
        startTime = temp[0].substr(1,);
        finishTime = temp[1];

        boxSize = finishTime- startTime;
        
        if(day == '월') date = document.querySelector('.mon');
        else if(day == '화') date = document.querySelector('.tue');
        else if(day == '수') date = document.querySelector('.wed');
        else if(day == '목') date = document.querySelector('.thr');
        else if(day == '금') date = document.querySelector('.fri');
        const inner_box = document.createElement('div');
        if(startTime == '0.0') inner_box.setAttribute('class','eight');
        else if(startTime == '0.5') inner_box.setAttribute('class','eightHalf');
        else if(startTime == '1.0') inner_box.setAttribute('class','nine');
        else if(startTime == '1.5') inner_box.setAttribute('class','nineHalf');
        else if(startTime == '2.0') inner_box.setAttribute('class','ten');
        else if(startTime == '2.5') inner_box.setAttribute('class','tenHalf');
        else if(startTime == '3.0') inner_box.setAttribute('class','eleven');
        else if(startTime == '3.5') inner_box.setAttribute('class','elevenHalf');
        else if(startTime == '4.0') inner_box.setAttribute('class','twelve');
        else if(startTime == '4.5') inner_box.setAttribute('class','twelveHalf');
        else if(startTime == '5.0') inner_box.setAttribute('class','thirteen');
        else if(startTime == '5.5') inner_box.setAttribute('class','thirteenHalf');
        else if(startTime == '6.0') inner_box.setAttribute('class','fourteen');
        else if(startTime == '6.5') inner_box.setAttribute('class','fourteenHalf');
        else if(startTime == '7.0') inner_box.setAttribute('class','fifteen');
        else if(startTime == '7.5') inner_box.setAttribute('class','fifteenHalf');
        else if(startTime == '8.0') inner_box.setAttribute('class','sixteen');
        else if(startTime == '8.5') inner_box.setAttribute('class','sixteenHalf');
        else if(startTime == '9.0') inner_box.setAttribute('class','seventeen');
        else if(startTime == '9.5') inner_box.setAttribute('class','seventeenHalf');
        else if(startTime == '10.0') inner_box.setAttribute('class','eighteen');

        if(boxSize == 1.0) inner_box.className+=' oneHalfBox';
        else if(boxSize == 1.5) inner_box.className+=' twoBox';
        else if(boxSize == 0.5) inner_box.className+=' oneBox';

        inner_box.className+=' lecture'+ Math.floor(Math.random() * 6+1);
      
        inner_box.innerHTML+=timeArr[i];
        date.appendChild(inner_box);
     
    }
}
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
                    <input type="button" className='btn btn-primary' value="make" onClick={()=>{
                    Axios(
                        {
                            url : '/scheduleTable.do',
                            method : 'post',
                            data:{
                                arr
                            },
                            baseURL:'http://localhost:3000'
                        }).then(response=>{
                        setTable(response.data);
                        console.log(response.data);
                        
                        setTimeout(makeTable(response.data),3000);
                        
                    }).catch(error=>{
                        console.log(error.response);
                    });
                    }}></input>
                    
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
                            setTable(response);
                            console.log(response.data);
                        }).catch(error=>{
                            console.log(error.response);
                        });
                    }}>만들기</Link>
                    {
                        ()=>makeTable()
                    }
                    <div className="d-flex justify-content-center">
                        <div class="tableBox">
                            <div class="d-flex ">
                                <div class="day mon">
                                    
                                </div>
                                <div class="day tue">
                                    
                                </div>
                                <div class="day wed">
                                    
                                </div>
                                <div class="day thr">
                                    
                                </div>
                                <div class="day fri">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
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
            <Modal show={show6} onHide={handleClose6} size="lg" aria-labelledby="contained-modal-title-venter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>강의담기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose6}>
                        닫기
                    </Button>
                    <Button variant="primary" onClick={handleClose6}>
                        추가하기
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    </>
    )
}


export default ScheduleGuide;
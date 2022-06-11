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
 
    var select = document.getElementById("lecture");
    var lectureOutput = document.getElementById('lecture').options[select.selectedIndex].innerText;
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(lectureOutput);
    newDiv.appendChild(lectureName)
    g3.appendChild(newDiv);
    arr[index] = {3 :property};
    index++;
  }
  function createLecture3(){
    const g4 = document.getElementById("lectureG4");
    const newDiv =document.createElement('div');
 
    var select = document.getElementById("lecture");
    var lectureOutput = document.getElementById('lecture').options[select.selectedIndex].innerText;
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(lectureOutput);
    newDiv.appendChild(lectureName)
    g4.appendChild(newDiv);
    arr[index] = {4 :property};
    index++;
  }
  function createLecture4(){
    const g5 = document.getElementById("lectureG5");
    const newDiv =document.createElement('div');
 
    var select = document.getElementById("lecture");
    var lectureOutput = document.getElementById('lecture').options[select.selectedIndex].innerText;
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(lectureOutput);
    newDiv.appendChild(lectureName)
    g5.appendChild(newDiv);
    arr[index] = {5 :property};
    
    index++;
    //console.log(property);
  }
  function createLecture5(){
    const g6 = document.getElementById("lectureG6");
    const newDiv =document.createElement('div');
 
    var select = document.getElementById("lecture");
    var lectureOutput = document.getElementById('lecture').options[select.selectedIndex].innerText;
    var property = document.getElementById('lecture').value;
    const lectureName = document.createTextNode(lectureOutput);
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
  
  const [lecture , setLecture] = useState([]);

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
    var title="";
    var titleArr=[""];
    var resultArr=[""];

    var minusTable = [""];
    var minusIndex = 0;
    for(let i = 0;i<table.length;i++){
        if(table[i][0][0] != ","){
            minusTable[minusIndex] =table[i];
            minusIndex++;
        }
    }
    console.log(minusTable);
    for(let i = 0;i<minusTable.length;i++){
        titleArr[i]="";//배열 초기화
        resultArr[i]="";
        for(let j=0;j<minusTable[0].length;j++){
            title+=minusTable[0][j][3];
            title+=','
            titleArr[i]+=minusTable[i][j][3];
            titleArr[i]+=',';
            if(minusTable[0][j][2].indexOf(',')!=-1){
                title+=minusTable[0][j][3];
                title+=',';
                titleArr[i]+=minusTable[i][j][3];
                titleArr[i]+=',';
            };
            result+=minusTable[0][j][2];
            result+=','
            resultArr[i]+=minusTable[i][j][2];
            resultArr[i]+=',';
        }
    }
    var tableDiv = document.querySelector(".tableBox");
    tableDiv.style.display='block';
    // console.log(titleArr);
    // console.log(resultArr);
    // console.log(result);
    // console.log(title);
    makeWholeTable(resultArr,titleArr);    
}

const makeWholeTable = (table,title) =>{
    const time = table;
    const titleSet = title;
    var timeArr = [];
    var titleArr = [];
    var day;
    var boxSize;
    var startTime;
    var finishTime;
    var date;

    

    var temp;
    console.log(time)
    for(let i = 0; i<time.length;i++){
        timeArr[i] = time[i].split(',');
        titleArr[i] = titleSet[i].split(',');
    }
    console.log(timeArr);
    console.log(titleArr);
    
    for(let i = 0;i<timeArr.length;i++){
        if(timeArr[i][0] !=""){
            const tabs = document.querySelector('.tabs');
        const inner_tab = document.createElement('div');    
        inner_tab.onclick = function() {tableShow(i);}
        inner_tab.setAttribute('class', i+ ' btn btn-warning');
        inner_tab.innerHTML=i+1;
        tabs.appendChild(inner_tab);
        }
        

        for(let j = 0;j<timeArr[i].length;j++){
            if(timeArr[i][0] != ""){
            day = timeArr[i][j].substr(0,1);
            temp = timeArr[i][j].split('-');
            startTime = temp[0].substr(1,);
            finishTime = temp[1];

            boxSize = finishTime- startTime;

            console.log(temp);
            console.log(boxSize);

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
            else if(boxSize == 2.5) inner_box.className+=' threeBox'
            else if(boxSize == 3.5) inner_box.className+=' fourBox';

            inner_box.className+=' table'+i;

            inner_box.className+=' lecture'+ i;
        
            inner_box.innerHTML+=titleArr[i][j];
            date.appendChild(inner_box);
            }
        }
        // day = timeArr[i].substr(0,1);
        // temp = timeArr[i].split('-');
        // startTime = temp[0].substr(1,);
        // finishTime = temp[1];

        // boxSize = finishTime- startTime;
        
        // if(day == '월') date = document.querySelector('.mon');
        // else if(day == '화') date = document.querySelector('.tue');
        // else if(day == '수') date = document.querySelector('.wed');
        // else if(day == '목') date = document.querySelector('.thr');
        // else if(day == '금') date = document.querySelector('.fri');
        // const inner_box = document.createElement('div');
        // if(startTime == '0.0') inner_box.setAttribute('class','eight');
        // else if(startTime == '0.5') inner_box.setAttribute('class','eightHalf');
        // else if(startTime == '1.0') inner_box.setAttribute('class','nine');
        // else if(startTime == '1.5') inner_box.setAttribute('class','nineHalf');
        // else if(startTime == '2.0') inner_box.setAttribute('class','ten');
        // else if(startTime == '2.5') inner_box.setAttribute('class','tenHalf');
        // else if(startTime == '3.0') inner_box.setAttribute('class','eleven');
        // else if(startTime == '3.5') inner_box.setAttribute('class','elevenHalf');
        // else if(startTime == '4.0') inner_box.setAttribute('class','twelve');
        // else if(startTime == '4.5') inner_box.setAttribute('class','twelveHalf');
        // else if(startTime == '5.0') inner_box.setAttribute('class','thirteen');
        // else if(startTime == '5.5') inner_box.setAttribute('class','thirteenHalf');
        // else if(startTime == '6.0') inner_box.setAttribute('class','fourteen');
        // else if(startTime == '6.5') inner_box.setAttribute('class','fourteenHalf');
        // else if(startTime == '7.0') inner_box.setAttribute('class','fifteen');
        // else if(startTime == '7.5') inner_box.setAttribute('class','fifteenHalf');
        // else if(startTime == '8.0') inner_box.setAttribute('class','sixteen');
        // else if(startTime == '8.5') inner_box.setAttribute('class','sixteenHalf');
        // else if(startTime == '9.0') inner_box.setAttribute('class','seventeen');
        // else if(startTime == '9.5') inner_box.setAttribute('class','seventeenHalf');
        // else if(startTime == '10.0') inner_box.setAttribute('class','eighteen');

        // if(boxSize == 1.0) inner_box.className+=' oneHalfBox';
        // else if(boxSize == 1.5) inner_box.className+=' twoBox';
        // else if(boxSize == 0.5) inner_box.className+=' oneBox';
        // else if(boxSize == 2.5) inner_box.className+=' threeBox'
        // else if(boxSize == 3.5) inner_box.className+=' fourBox';

        // inner_box.className+=' lecture'+ Math.floor(Math.random() * 6+1);
      
        // inner_box.innerHTML+=titleArr[i];
        // date.appendChild(inner_box);
     
    }
}

    const[selected, setSelected] = useState("");

    const changeSelected= (event)=>{
        setSelected(event.target.value);
    };

    var inquiries = lecture.filter(data=>{
        //console.log(data.lectureCode.substr(0,3));
        if(selected === "cse" && data.lectureCode.substr(0,3)==="CSE"){
            return data;
        }else if(selected === "ene" && data.lectureCode.substr(0,3)==="ENE"){
            return data;
        }else if(selected === "civ" && data.lectureCode.substr(0,3)==="CIV"){
            return data;
        }
        else if(selected === "ard" && data.lectureCode.substr(0,3)==="ARD"){
            return data;
        }else if(selected === "arc" && data.lectureCode.substr(0,3)==="ARC"){
            return data;
        }else if(selected === "mec" && data.lectureCode.substr(0,3)==="MEC"){
            return data;
        }
        else if(selected === "mme" && data.lectureCode.substr(0,3)==="MME"){
            return data;
        }else if(selected === "ise" && data.lectureCode.substr(0,3)==="ISE"){
            return data;
        }else if(selected === "eme" && data.lectureCode.substr(0,3)==="EME"){
            return data;
        }else if(selected === "inc" && data.lectureCode.substr(0,3)==="INC"){
            return data;
        }else if(selected === "cen" && data.lectureCode.substr(0,3)==="CEN"){
            return data;
        }
        else if(selected === "egc" && data.lectureCode.substr(0,3)==="EGC"){
            return data;
        }
        else if(selected === "rgc" && data.lectureCode.substr(0,3)==="RGC"){
            return data;
        }
        else if(selected === "pri" && data.lectureCode.substr(0,3)==="PRI"){
            return data;
        }

    })

    const tableShow =(a)=>{
        
        var tab = document.querySelector('.tabs');
        var tabs = document.querySelector('.tabs').childNodes;
        var table;
        console.log(tabs); 
        tab.style.display='';
        for(let i = 0;i<tabs.length;i++){
            table = document.querySelectorAll('.table'+i);
            console.log(table);
            if(i == a){
                console.log('if');
                for(let j = 0;j<table.length;j++)
                    table[j].style.display=''; 
            }
            else{
                console.log('else');
                console.log(a);
                for(let j = 0;j<table.length;j++)
                    table[j].style.display='none';   
            }
        }
    };

    return(
    <>

        <div className="ScheduleGuide d-flex justify-content-center">

            <div className="tableBox" >
                
                            <div className="d-flex ">
                                <div className='tabs'>
                                    
                                    
                                </div>  
                            
                                <div className="day mon">
                                
                                    <div className='title text-center'>월</div>
                                    <div className='timeBox nine'>9시</div>
                                    <div className='timeBox ten'>10시</div>
                                    <div className='timeBox eleven'>11시</div>
                                    <div className='timeBox twelve'>12시</div>
                                    <div className='timeBox thirteen'>13시</div>
                                    <div className='timeBox fourteen'>14시</div>
                                    <div className='timeBox fifteen'>15시</div>
                                    <div className='timeBox sixteen'>16시</div>
                                    <div className='timeBox seventeen'>17시</div>
                                    <div className='timeBox eighteen'>18시</div>
                                    
                                    
                                    
                                </div>
                                <div className="day tue">
                                    <div className='title text-center'>화</div>
                                </div>
                                <div className="day wed">
                                    <div className='title text-center'>수</div>   
                                </div>
                                <div className="day thr">
                                    <div className='title text-center'>목</div>
                                </div>
                                <div className="day fri">
                                    <div className='title text-center'>금</div>
                                </div>
                            </div>
                        </div>



            <div className="d-flex mb-5" >
                <div className="container justify-content-center ">

                <div> tip><br/> 과목을 1개 이상 담아주시면 <br/>각 그룹에서 1개씩 꺼내서 모든 경우의 수를 조합해본 후 <br/>만들어질 수 있는 시간표를 알려드릴게요. </div>

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

                        </div>
                        <hr></hr>
                        <div id="lectureG6">
                            <p>시간표를 담아주세요.</p>    
                        </div>
                    </div>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                        tableShow(0);
                    }).catch(error=>{
                        console.log(error.response);
                    });
                    }}></input>

                    &nbsp;&nbsp;
                   <input type="button" className='btn btn-primary' value="clear" onClick={()=>{

                                           window.location.reload();


                                       }}></input>




                </div>
           </div>






            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-venter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>강의담기</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Select aria-label = "Default select example" onChange={changeSelected}>
                        <option>전공인지 교양인지 선택하세요</option>
                        <option value="egc">일반교양</option>
                        <option value="pri">MSC(BSM)</option>
                        <option value="rgc">공통교양</option>
                           <option value="">전공(공과대학)</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example" id="major" name="major" onChange={changeSelected}>
                        <option>학과를 선택하세요</option>
                        <option value="civ">건설환경공학과</option>
                        <option value="ard">건축공학전공</option>
                        <option value="arc">건축학전공</option>
                        <option value="mec">기계로봇에너지공학과</option>
                        <option value="mme">멀티미디어공학과</option>
                        <option value="ise">산업시스템공학과</option>
                        <option value="eme">융합에너지신소재공학과</option>
                        <option value="ene">전자전기공학부</option>
                        <option value="inc">정보통신공학전공</option>
                        <option value="cse">컴퓨터공학전공</option>
                        <option value="cen">화공생물공학과</option>
                        
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {inquiries.map(inquiry=>(
                        <option value={inquiry.lectureCode}>{inquiry.lectureCode} / {inquiry.lname} / {inquiry.professor} / {inquiry.dayTime}</option>
                        ))}
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
                    <Form.Select aria-label = "Default select example" onChange={changeSelected}>
                        <option>전공인지 교양인지 선택하세요</option>
                        <option value="egc">교양</option>
                        <option value="pri">MSC(BSM)</option>
                        <option value="rgc">공통교양</option>
                           <option value="">전공(공과대학)</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example" id="major" name="major" onChange={changeSelected}>
                        <option>학과를 선택하세요</option>
                        <option value="civ">건설환경공학과</option>
                        <option value="ard">건축공학전공</option>
                        <option value="arc">건축학전공</option>
                        <option value="mec">기계로봇에너지공학과</option>
                        <option value="mme">멀티미디어공학과</option>
                        <option value="ise">산업시스템공학과</option>
                        <option value="eme">융합에너지신소재공학과</option>
                        <option value="ene">전자전기공학부</option>
                        <option value="inc">정보통신공학전공</option>
                        <option value="cse">컴퓨터공학전공</option>
                        <option value="cen">화공생물공학과</option>
                        
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {inquiries.map(inquiry=>(
                        <option value={inquiry.lectureCode}>{inquiry.lectureCode} / {inquiry.lname} / {inquiry.professor} / {inquiry.dayTime}</option>
                        ))}
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
                    <Form.Select aria-label = "Default select example" onChange={changeSelected}>
                        <option>전공인지 교양인지 선택하세요</option>
                        <option value="egc">교양</option>
                        <option value="pri">MSC(BSM)</option>
                        <option value="rgc">공통교양</option>
                           <option value="">전공(공과대학)</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example" id="major" name="major" onChange={changeSelected}>
                        <option>학과를 선택하세요</option>
                        <option value="civ">건설환경공학과</option>
                        <option value="ard">건축공학전공</option>
                        <option value="arc">건축학전공</option>
                        <option value="mec">기계로봇에너지공학과</option>
                        <option value="mme">멀티미디어공학과</option>
                        <option value="ise">산업시스템공학과</option>
                        <option value="eme">융합에너지신소재공학과</option>
                        <option value="ene">전자전기공학부</option>
                        <option value="inc">정보통신공학전공</option>
                        <option value="cse">컴퓨터공학전공</option>
                        <option value="cen">화공생물공학과</option>
                        
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {inquiries.map(inquiry=>(
                        <option value={inquiry.lectureCode}>{inquiry.lectureCode} / {inquiry.lname} / {inquiry.professor} / {inquiry.dayTime}</option>
                        ))}
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
                    <Form.Select aria-label = "Default select example" onChange={changeSelected}>
                        <option>전공인지 교양인지 선택하세요</option>
                        <option value="egc">교양</option>
                        <option value="pri">MSC(BSM)</option>
                        <option value="rgc">공통교양</option>
                           <option value="">전공(공과대학)</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example" id="major" name="major" onChange={changeSelected}>
                        <option>학과를 선택하세요</option>
                        <option value="civ">건설환경공학과</option>
                        <option value="ard">건축공학전공</option>
                        <option value="arc">건축학전공</option>
                        <option value="mec">기계로봇에너지공학과</option>
                        <option value="mme">멀티미디어공학과</option>
                        <option value="ise">산업시스템공학과</option>
                        <option value="eme">융합에너지신소재공학과</option>
                        <option value="ene">전자전기공학부</option>
                        <option value="inc">정보통신공학전공</option>
                        <option value="cse">컴퓨터공학전공</option>
                        <option value="cen">화공생물공학과</option>
                        
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {inquiries.map(inquiry=>(
                        <option value={inquiry.lectureCode}>{inquiry.lectureCode} / {inquiry.lname} / {inquiry.professor} / {inquiry.dayTime}</option>
                        ))}
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
                    <Form.Select aria-label = "Default select example" onChange={changeSelected}>
                        <option>전공인지 교양인지 선택하세요</option>
                        <option value="egc">교양</option>
                        <option value="pri">MSC(BSM)</option>
                        <option value="rgc">공통교양</option>
                           <option value="">전공(공과대학)</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example" id="major" name="major" onChange={changeSelected}>
                        <option>학과를 선택하세요</option>
                        <option value="civ">건설환경공학과</option>
                        <option value="ard">건축공학전공</option>
                        <option value="arc">건축학전공</option>
                        <option value="mec">기계로봇에너지공학과</option>
                        <option value="mme">멀티미디어공학과</option>
                        <option value="ise">산업시스템공학과</option>
                        <option value="eme">융합에너지신소재공학과</option>
                        <option value="ene">전자전기공학부</option>
                        <option value="inc">정보통신공학전공</option>
                        <option value="cse">컴퓨터공학전공</option>
                        <option value="cen">화공생물공학과</option>
                        
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {inquiries.map(inquiry=>(
                        <option value={inquiry.lectureCode}>{inquiry.lectureCode} / {inquiry.lname} / {inquiry.professor} / {inquiry.dayTime}</option>
                        ))}
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
                    <Form.Select aria-label = "Default select example" onChange={changeSelected}>
                        <option>전공인지 교양인지 선택하세요</option>
                        <option value="egc">교양</option>
                        <option value="pri">MSC(BSM)</option>
                        <option value="rgc">공통교양</option>
                           <option value="">전공(공과대학)</option>
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example" id="major" name="major" onChange={changeSelected}>
                        <option>학과를 선택하세요</option>
                        <option value="civ">건설환경공학과</option>
                        <option value="ard">건축공학전공</option>
                        <option value="arc">건축학전공</option>
                        <option value="mec">기계로봇에너지공학과</option>
                        <option value="mme">멀티미디어공학과</option>
                        <option value="ise">산업시스템공학과</option>
                        <option value="eme">융합에너지신소재공학과</option>
                        <option value="ene">전자전기공학부</option>
                        <option value="inc">정보통신공학전공</option>
                        <option value="cse">컴퓨터공학전공</option>
                        <option value="cen">화공생물공학과</option>
                        
                    </Form.Select>
                    <br />
                    <Form.Select aria-label = "Default select example"  id="lecture">
                        <option>강의를 선택하세요</option>
                        {inquiries.map(inquiry=>(
                        <option value={inquiry.lectureCode}>{inquiry.lectureCode} / {inquiry.lname} / {inquiry.professor} / {inquiry.dayTime}</option>
                        ))}
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
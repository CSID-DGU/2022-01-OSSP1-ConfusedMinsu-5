import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';
import '../style.css';


function makeTable(table){
    const time = table;
    var timeArr = []
    var day;
    var boxSize;
    var startTime;
    var finishTime;
    var date;

    var temp;

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
        if(startTime == '8.0') inner_box.setAttribute('class','eight');
        else if(startTime == '8.5') inner_box.setAttribute('class','eightHalf');
        else if(startTime == '9.0') inner_box.setAttribute('class','nine');
        else if(startTime == '9.5') inner_box.setAttribute('class','nineHalf');
        else if(startTime == '10.0') inner_box.setAttribute('class','ten');
        else if(startTime == '10.5') inner_box.setAttribute('class','tenHalf');
        else if(startTime == '11.0') inner_box.setAttribute('class','eleven');
        else if(startTime == '11.5') inner_box.setAttribute('class','elevenHalf');
        else if(startTime == '12.0') inner_box.setAttribute('class','twelve');
        else if(startTime == '12.5') inner_box.setAttribute('class','twelveHalf');
        else if(startTime == '13.0') inner_box.setAttribute('class','thirteen');
        else if(startTime == '13.5') inner_box.setAttribute('class','thirteenHalf');
        else if(startTime == '14.0') inner_box.setAttribute('class','fourteen');
        else if(startTime == '14.5') inner_box.setAttribute('class','fourteenHalf');
        else if(startTime == '15.0') inner_box.setAttribute('class','fifteen');
        else if(startTime == '15.5') inner_box.setAttribute('class','fifteenHalf');
        else if(startTime == '16.0') inner_box.setAttribute('class','sixteen');
        else if(startTime == '16.5') inner_box.setAttribute('class','sixteenHalf');
        else if(startTime == '17.0') inner_box.setAttribute('class','seventeen');
        else if(startTime == '17.5') inner_box.setAttribute('class','seventeenHalf');
        else if(startTime == '18.0') inner_box.setAttribute('class','eighteen');


        if(boxSize == 1.0) inner_box.className+=' oneHalfBox';
        else if(boxSize == 1.5) inner_box.className+=' twoBox';
        else if(boxSize == 0.5) inner_box.className+=' oneBox';
        else if(boxSize==2.0) inner_box.className+=' twoHalfBox';
        else if(boxSize == 2.5) inner_box.className+=' threeBox'
        else if(boxSize == 3.5) inner_box.className+=' fourBox';
        else if(boxSize==3.0) inner_box.className+=' threeHalfBox';
        else if(boxSize == 4.0) inner_box.className+=' fourHalfBox';
        else if(boxSize==4.5) inner_box.className+=" fiveBox";

        inner_box.className+=' lecture'+ Math.floor(Math.random() * 6+1);
      
        inner_box.innerHTML+=timeArr[i];
        date.appendChild(inner_box);
     
    }
}


function ScheduleTable(){
    const[lecture,setLecture] =useState([]);
    useEffect(()=>{
        Axios.post("/scheduleGuide/scheduleTable").then((res)=>{
                if(res.data){
                    setLecture(res.data);
                    console.log(lecture);
                }else{
                    alert("failed to");
                }
        });
    },[lecture]);
    



    const lookup=
    [
        {id:'1', query:'cse',text:'컴공1-1'},
        {id:'2', query:'cse',text:'컴공1-2'},
        {id:'3', query:'ene',text:'전전2-1'},
        {id:'4', query:'ene',text:'전전2-2'},
        {id:'5', query:'ene',text:'전전2-3'},
    ];

    const[seleted, setSelected] = useState("");

    const changeSelecte= (event)=>{
        setSelected(event.target.value);
    };

    var inquiries = lecture.filter(data=>{
        //console.log(data.lectureCode.substr(0,3));
        if(seleted === "cse" && data.lectureCode.substr(0,3)==="CSE"){
            return data;
        }else if(seleted === "ene" && data.lectureCode.substr(0,3)==="ENE"){
            return data;
        }
    })

    return(
        <div style={{padding:"16px", margin:"16px",}}>
            <div>
                <select onChange ={changeSelecte}>
                    <option value="cse">조건검색1</option>
                    <option value="ene">조건검색2</option>
                </select>
            </div>
            <div>
                <div>
                    <select>
            {inquiries.map(inquiry=>(
                <option>{inquiry.lname}/{inquiry.dayTime}</option>
            ))}
                    </select>
                </div>
            </div>
        </div>
    )
    

    
        


    
    
}

export default ScheduleTable;
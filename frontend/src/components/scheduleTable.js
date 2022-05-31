import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table, Button} from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';
import '../style.css';


function makeTable(){
    const time = '월8.0-10.0,화9.0-11.0,월10.0-12.0,목15.0-17.0,월13.5-15.0,수10.0-11.5,월15.0-17.0,화13.0-15.0,화15.0-16.5,목13.5-15.0,월17.5-19.5,금14.0-16.0';
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

        if(boxSize == 1.5) inner_box.className+=' oneHalfBox';
        else if(boxSize == 2.0) inner_box.className+=' twoBox';

        inner_box.className+=' lecture'+ Math.floor(Math.random() * 6+1);
      
        inner_box.innerHTML+=timeArr[i];
        date.appendChild(inner_box);
     
    }
}


function ScheduleTable(){
    

    const [table , setTable] = useState("");

//   useEffect(()=>{
//     Axios.post("/scheduleGuide/scheduleTable").then((res)=>{
//             console.log("before if");
//             console.log(res.data);setTable(res.data);
//             if(res.data){
//                 setTable(res.data);
//                 console.log("in if");
//                console.log(table);
//             }else{
//                 alert("failed to");
//             }
//         }); 
//     },[table]);
    
    
    return(
    <>
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
        <Button onClick={()=>{makeTable();}}></Button>
    </div>
        


    </>
    )
}

export default ScheduleTable;
import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';
import { isElementOfType } from 'react-dom/test-utils';

const newTechRoom = document.querySelector(".newTechRoom");

// document.addEventListener("click", (e)=>{
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;
//     console.log(mouseX, mouseY);
//     newTechRoom.style.left = mouseX + 'px';
//     newTechRoom.style.top = mouseY + 'px';
//     console.log(newTechRoom.style.left);
//     console.log(newTechRoom.style.top);
// })




function EmptyGuide(){
    const [room, setRoom] = useState([]);

    useEffect(()=>{
        Axios.post("/emptyGuide").then((res)=>{
                if(res.data){
                    setRoom(res.data);
                    console.log(room);
                }else{
                    alert("failed to");
                }
        });
    },[]);

    const show =(a)=>{
        var categories = document.querySelector('.categories').childNodes;
        var tab = document.querySelector('.tabs');
        var tabs = document.querySelector('.tabs').childNodes;
        console.log(tabs); 
        tab.style.display='';
        for(let i = 0;i<tabs.length;i++){
            if(i === a){
                categories[i].style.backgroundColor = 'orange';
                tabs[i].style.display = '';    
            }
            else{
                categories[i].style.backgroundColor = 'lightyellow';
                tabs[i].style.display = 'none';    
            }
        }
    };

    const [timer, setTimer] = useState('0');
    const currentTimer = () =>{
        const date = new Date();
        const hours = String(date.getHours()).padStart(2,"0");
        const minutes = String(date.getMinutes()).padStart(2,"0");
        const seconds = String(date.getSeconds()).padStart(2,"0");
       setTimer(`${hours}:${minutes}:${seconds}`)
    }
    const startTimer  =()=>{
        setInterval(currentTimer,1000)
    }
    startTimer()

    const newTechRoom = () => {
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "401") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="newTechRoom">{result}</div>;
    };

    const oneHeungRoom = () => {
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "405") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="oneHeungRoom">{result}</div>;
    };

    const infoP = () => {
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "407") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="infoP">{result}</div>;
    };

    const infoQ = () => {
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "408") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="infoQ">{result}</div>;
    };
    return(
        
        <div className="emptyGuide">
            {timer}
            <div className="d-flex categories">
                <div className="category"onClick={()=>{show(0);}}>신공학관</div>
                <div className="category" onClick={()=>{show(1);}}>원흥관</div>
                <div className="category" onClick={()=>{show(2);}}>정보문화관P</div>
                <div className="category" onClick={()=>{show(3);}}>정보문화관Q</div>
            </div>
            <div className="tabs" >
                <div id="0">{newTechRoom()}</div>
                <div id="1">{oneHeungRoom()}</div>
                <div id="2">{infoP()}</div>
                <div id="3">{infoQ()}</div>
            </div>
            
            <div className="row" >
                <img id="img"src={require('./img/googleDongguk.PNG')} alt="1"></img>
                
                <div id="library_cover" > </div>
                <div id="tech_cover">

                </div>
                <div id="new_tech_cover" >
                
                </div>
                <div id="oneHeung_cover" ></div>
                <div id="infoP_cover" ></div>
                <div id="infoQ_cover" ></div>
                <div id="law_cover" ></div>
                <div id="myungjin_cover" ></div>
                <div id="manhae_cover" ></div>
                <div id="science_cover" ></div>
                <div id="hyehwa_cover" ></div>
                <div id="socialSci_cover" ></div>
                <div id="business_cover" ></div>
                <div id="culture_cover" ></div>
                
            </div>
            

        </div>
    )
}

export default EmptyGuide;
import {React, useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import '../App.css';
import Axios from 'axios';
import { isElementOfType } from 'react-dom/test-utils';
import ImageMapper from 'react-image-mapper';
//import Image from'./imageMapper';

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
            if(i == a){
                console.log('if');
                categories[i].style.backgroundColor = 'orange';
                tabs[i].style.display = '';    
            }
            else{
                console.log('else');
                console.log(i);
                console.log(a);
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

    const myungjin = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "307") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="myungjin">{result}</div>;
    }

    const lawManhae = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "303") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="lawManhae">{result}</div>;
    }

    const science = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "308") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="science">{result}</div>;
    }

    const hwehwa = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "207") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="hwehwa">{result}</div>;
    }

    const hakrim = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "501") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="hakrim">{result}</div>;
    }

    const socialBus = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "201" || room[i].substr(0,3) === "202") {
                needSort.push(room[i].substr(0,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="socialBus">{result}</div>;
    }

    const hakCul = () =>{
        const result = [];
        const needSort = [];
        for (let i = 0; i < room.length; i++) {
            //console.log(room[i].substr(0,3));
            if (room[i].substr(0,3) === "102") {
                needSort.push(room[i].substr(4,).split('(',1))
            }
        }
        needSort.sort();
        for(let i = 0;i<needSort.length;i++){
            //if(i % 3 == 0) result.push(<br />);
            result.push(<a key={i}>{needSort[i]} </a>);
        }
        
        return <div className="hakCul">{result}</div>;
    }

    const [state, setState]= useState({hoveredArea:null});

    const getTipPosition=(area)=> {
        return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }

    const enterArea=(area)=> {
        setState({ hoveredArea: area });
        console.log(state);
    }

    const leaveArea=(area)=> {
        setState({ hoveredArea: null });
        console.log(state);
    }
    var MAP = {
        name: "my-map",
        areas: [
          {id:"0", name: "신공학관", shape: "poly", coords: [152,504,115,613,198,644,239,617,261,557,262,528,194,502], preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },//신공학관
          {id:"1", name: "원흥관", shape: "poly", coords: [272,456,253,511,307,523,331,444,303,424,294,382,218,320,208,327,199,267,169,268,173,340,295,447,295,457], preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)"  },
          {id:"2", name: "정보문화관P", shape: "poly", coords: [213,202,205,202,218,299,235,309,258,259,249,212,247,202,226,199,225,181,214,178],preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)"   },
          {id:"3", name: "정보문화관Q", shape: "poly", coords: [151,154,172,152,196,163,203,193,193,201,196,255,174,261,172,188,128,192,128,176,152,175], preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)"  },
          {id:"12", name: "본관", shape: "poly", coords: [372,433,383,428,434,437,454,442,420,571,340,545,335,537,340,523,348,523 ] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"13", name: "중앙도서관", shape: "poly", coords: [290,566,279,599,275,649,300,697,310,713,341,724,384,596,335,580] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"4", name: "명진관", shape: "poly", coords: [406,647,422,650,423,661,477,680,478,673,494,676,493,683,551,701,556,694,568,701,555,756,537,753,539,722,490,704,486,714,466,706,468,697,412,680,404,706,384,700] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"5", name: "법학관", shape: "poly", coords: [656,517,612,652,650,673,666,626,700,635,740,648,754,610,681,585,701,530] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"5", name: "만해관", shape: "poly", coords: [623,766,658,776,700,637,665,626] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"6", name: "과학관", shape: "poly", coords: [408,749,389,800,408,808,415,790,535,828,546,790,419,747] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"7", name: "혜화관", shape: "poly", coords: [807,660,789,708,805,714,790,774,801,780,797,798,817,801,831,787,892,602,851,586,826,662] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"8", name: "학림관", shape: "poly", coords: [340,25,333,44,366,59,367,70,549,123,559,120,561,105,555,100,559,77,527,67,521,87,474,75,479,65,459,58,454,67,411,54,420,31,382,22,375,33] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"9", name: "경영관", shape: "poly", coords: [979,880,979,918,1038,909,1073,827,1073,802,993,773,980,806,1018,823,1004,873] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"9", name: "사회과학관", shape: "poly", coords: [980,635,932,794,978,810,990,773,983,767,1024,648,1016,640,1003,635,1000,644] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"10", name: "문화관", shape: "poly", coords: [1011,756,1065,778,1076,748,1099,662,1120,570,1121,544,1107,533,1084,542,1083,554,1076,557] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"10", name: "학술관", shape: "poly", coords: [1138,560,1140,680,1162,686,1163,659,1177,647,1187,594,1173,548,1159,524,1155,564] ,preFillColor: "rgb(100,100,100,0.3)", fillColor: "rgb(250,100,10,0.7)",strokeColor:"rgb(0,0,0,0)" },
          {id:"11", name: "동국대학교", shape: "poly", coords: [10,520,66,596,154,651,244,663,274,972,1078,966,1143,785,1099,764,1089,746,1099,702,1115,692,1168,704,1189,654,1198,619,1195,574,1163,444,1109,435,1016,490,953,549,934,529,890,579,662,496,491,380,468,340,478,285,560,298,575,246,593,165,649,179,658,113,640,109,629,86,419,17,395,1,346,2,285,23,250,80,254,107,171,84,129,134,128,207,163,278,169,341,237,445,224,502,114,464],preFillColor: "rgb(100,100,100,0)",fillColor: "rgb(250,100,10,0)",strokeColor:"rgb(0,0,0)" },
        ]
      }
    return(
        
        <div className="emptyGuide">
            {timer}

            <div className='d-flex justify-content-center'>
                <div id="img"className=" containerr">
                    
                <ImageMapper src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlQfQI%2FbtrDGJrTzPW%2FKIXcEWNkQGehPK7mjXRkE1%2Fimg.png"} map={MAP} 
                    onLoad={()=>{console.log(1);}}
                    onClick={area => {var index=area.id;show(index);console.log(index)}}
                    onMouseEnter={area => enterArea(area)}
                    onMouseLeave={area => leaveArea(area)}
                />
                {
                    state.hoveredArea && 
                    <span className="tooltip" style={{...getTipPosition(state.hoveredArea)}}>{state.hoveredArea && state.hoveredArea.name}</span>
                }
                
                </div>
                <div className="tabs row justify-content-center text-center" style={{width:`${110}px`,top:`${0}px`}}>
                    <div className="row " id="0">{newTechRoom()}</div>
                    <div className="row"id="1">{oneHeungRoom()}</div>
                    <div className="row"id="2">{infoP()}</div>
                    <div className="row"id="3">{infoQ()}</div>
                    
                    <div className="row"id="4">{myungjin()}</div>
                    <div className="row"id="5">{lawManhae()}</div>
                    <div className="row"id="6">{science()}</div>
                    <div className="row"id="7">{hwehwa()}</div>
                    <div className="row"id="8">{hakrim()}</div>
                    <div className="row"id="9">{socialBus()}</div>
                    <div className="row"id="10">{hakCul()}</div>

                </div>
                <div className="d-flex " >
                    
                    <ul className='categories'>
                        <div className="category"onClick={()=>{show(0);}}>신공학관</div>
                        <div className="category" onClick={()=>{show(1);}}>원흥관</div>
                        <div className="category" onClick={()=>{show(2);}}>정보문화관P</div>
                        <div className="category" onClick={()=>{show(3);}}>정보문화관Q</div>
                        <div className="category" onClick={()=>{show(4);}}>명진관</div>
                        <div className="category" onClick={()=>{show(5);}}>법학 / 만해관</div>
                        <div className="category" onClick={()=>{show(6);}}>과학관</div>
                        <div className="category" onClick={()=>{show(7);}}>혜화관</div>
                        <div className="category" onClick={()=>{show(8);}}>학림관</div>
                        <div className="category" onClick={()=>{show(9);}}>사회과학 / 경영관</div>
                        <div className="category" onClick={()=>{show(10);}}>학술 / 문화관</div>
                    </ul>
              
                
            </div>
            </div>
                
                
            </div>
            

        
    )
}

export default EmptyGuide;
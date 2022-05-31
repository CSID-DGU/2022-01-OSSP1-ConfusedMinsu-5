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
    const [state, setState]= useState({hoveredArea:null});

    const getTipPosition=(area)=> {
        return { top: `${area.center[1]+340}px`, left: `${area.center[0]+330}px` };
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
          {id:"1", name: "신공학관", shape: "poly", coords: [152,504,115,613,198,644,239,617,261,557,262,528,194,502], preFillColor: "rgb(100,100,100,0.3)", fillColor: "blue"  },//신공학관
          { name: "원흥관", shape: "poly", coords: [272,456,253,511,307,523,331,444,303,424,294,382,218,320,208,327,199,267,169,268,173,340,295,447,295,457], preFillColor: "pink"  },
          { name: "정보문화관P", shape: "poly", coords: [213,202,205,202,218,299,235,309,258,259,249,212,247,202,226,199,225,181,214,178],preFillColor: "rgb(100,100,100,0.3)", fillColor: "yellow"  },
          { name: "정보문화관Q", shape: "poly", coords: [151,154,172,152,196,163,203,193,193,201,196,255,174,261,172,188,128,192,128,176,152,175], preFillColor: "red"  },
          { name: "본관", shape: "poly", coords: [372,433,383,428,434,437,454,442,420,571,340,545,335,537,340,523,348,523 ] ,preFillColor: "red"},
          { name: "5", shape: "poly", coords: [290,566,279,599,275,649,300,697,310,713,341,724,384,596,335,580] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "6", shape: "poly", coords: [406,647,422,650,423,661,477,680,478,673,494,676,493,683,551,701,556,694,568,701,555,756,537,753,539,722,490,704,486,714,466,706,468,697,412,680,404,706,384,700] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "7", shape: "poly", coords: [656,517,612,652,650,673,666,626,700,635,740,648,754,610,681,585,701,530] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [623,766,658,776,700,637,665,626] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [408,749,389,800,408,808,415,790,535,828,546,790,419,747] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [807,660,789,708,805,714,790,774,801,780,797,798,817,801,831,787,892,602,851,586,826,662] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [340,25,333,44,366,59,367,70,549,123,559,120,561,105,555,100,559,77,527,67,521,87,474,75,479,65,459,58,454,67,411,54,420,31,382,22,375,33] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [979,880,979,918,1038,909,1073,827,1073,802,993,773,980,806,1018,823,1004,873] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [980,635,932,794,978,810,990,773,983,767,1024,648,1016,640,1003,635,1000,644] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [1011,756,1065,778,1076,748,1099,662,1120,570,1121,544,1107,533,1084,542,1083,554,1076,557] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
          { name: "8", shape: "poly", coords: [1138,560,1140,680,1162,686,1163,659,1177,647,1187,594,1173,548,1159,524,1155,564] ,preFillColor: "rgb(100,100,100,0.3)",fillColor: "red"},
        ]
      }
  
    //   <map name="image-map">
    //       <area target="" alt="중앙도서관" title="중앙도서관" href="" coords="290,566,279,599,275,649,300,697,310,713,341,724,384,596,335,580" shape="poly">
    //       <area target="" alt="신공학관" title="신공학관" href="" coords="152,504,115,613,198,644,239,617,261,557,262,528,194,502" shape="poly">
    //       <area target="" alt="원흥관" title="원흥관" href="" coords="272,456,253,511,307,523,331,444,303,424,294,382,218,320,208,327,199,267,169,268,173,340,295,447,295,457" shape="poly">
    //       <area target="" alt="정보문화관P" title="정보문화관P" href="" coords="213,202,205,202,218,299,235,309,258,259,249,212,247,202,226,199,225,181,214,178" shape="poly">
    //       <area target="" alt="정보문화관Q" title="정보문화관Q" href="" coords="151,154,172,152,196,163,203,193,193,201,196,255,174,261,172,188,128,192,128,176,152,175" shape="poly">
    //       <area target="" alt="본관" title="본관" href="" coords="372,433,383,428,434,437,454,442,420,571,340,545,335,537,340,523,348,523" shape="poly">
    //       <area target="" alt="명진관" title="명진관" href="" coords="406,647,422,650,423,661,477,680,478,673,494,676,493,683,551,701,556,694,568,701,555,756,537,753,539,722,490,704,486,714,466,706,468,697,412,680,404,706,384,700" shape="poly">
    //       <area target="" alt="법학관" title="법학관" href="" coords="656,517,612,652,650,673,666,626,700,635,740,648,754,610,681,585,701,530" shape="poly">
    //       <area target="" alt="만해관" title="만해관" href="" coords="623,766,658,776,700,637,665,626" shape="poly">
    //       <area target="" alt="과학관" title="과학관" href="" coords="408,749,389,800,408,808,415,790,535,828,546,790,419,747" shape="poly">
    //       <area target="" alt="혜화관" title="혜화관" href="" coords="807,660,789,708,805,714,790,774,801,780,797,798,817,801,831,787,892,602,851,586,826,662" shape="poly">
    //       <area target="" alt="학림관" title="학림관" href="" coords="340,25,333,44,366,59,367,70,549,123,559,120,561,105,555,100,559,77,527,67,521,87,474,75,479,65,459,58,454,67,411,54,420,31,382,22,375,33" shape="poly">
    //       <area target="" alt="경영관" title="경영관" href="" coords="979,880,979,918,1038,909,1073,827,1073,802,993,773,980,806,1018,823,1004,873" shape="poly">
    //       <area target="" alt="사회과학관" title="사회과학관" href="" coords="980,635,932,794,978,810,990,773,983,767,1024,648,1016,640,1003,635,1000,644" shape="poly">
    //       <area target="" alt="문화관" title="문화관" href="" coords="1011,756,1065,778,1076,748,1099,662,1120,570,1121,544,1107,533,1084,542,1083,554,1076,557" shape="poly">
    //       <area target="" alt="학술관" title="학술관" href="" coords="1138,560,1140,680,1162,686,1163,659,1177,647,1187,594,1173,548,1159,524,1155,564" shape="poly">
    //   </map>
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
            <div>
            
            
            <div id="img"className="d-flex justify-content-center" >
            <ImageMapper src={"https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FlQfQI%2FbtrDGJrTzPW%2FKIXcEWNkQGehPK7mjXRkE1%2Fimg.png"} map={MAP} 
                onLoad={()=>{console.log(1);}}
                onClick={area => {var index=area.id;show(index);console.log(index)}}
                 onMouseEnter={area => enterArea(area)}
                 onMouseLeave={area => leaveArea(area)}
                // //onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
                // onImageClick={evt => this.clickedOutside(evt)}
                //onImageMouseMove={evt => this.moveOnImage(evt)}
            />
            {
    	state.hoveredArea && 
    	<span className="tooltip" style={{...getTipPosition(state.hoveredArea)}}>{state.hoveredArea && state.hoveredArea.name}</span>
    	    
    	
    }
            </div>
            
                
                
            </div>
            

        </div>
    )
}

export default EmptyGuide;
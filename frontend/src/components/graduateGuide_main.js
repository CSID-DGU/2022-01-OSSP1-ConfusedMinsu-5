import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Main from "./main";
import civImage from './img/건설환경공학과.jpg'
import arc_ardImage from "./img/건축공학과.jpg"
import mecImage from "./img/기계공학과.jpg"
import mmeImage from "./img/멀티미디어공학과.jpg"
import iseImage from "./img/산업시스템공학과.jpg"
import emeImage from "./img/융합에너지신소재공학과.jpg"
import eneImage from "./img/전자전기공학과.jpg"
import incImage from "./img/정보통신공학과.jpg"
import cseImage from "./img/컴퓨터공학과.jpg"
import cenImage from "./img/화공생물공학과.jpg"

function GraduateGuide_MAIN() {
  return (
      <div className="row justify-content-center">
        <div className="main">
          <div className="row justify-content-center">
            <Card className="bigCard m-3" style={{width: '58rem'}}>
              <Card.Body>
                <Card.Title>학과를 클릭해서 학업이수가이드를 확인하세요!</Card.Title>
              </Card.Body>
            </Card>
            <br/>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={civImage} ></Card.Img>
              <Card.Body>
                <Card.Title>건설환경공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/civ'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={arc_ardImage}/>
              <Card.Body>
                <Card.Title>건축공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/ard'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={arc_ardImage}/>
              <Card.Body>
                <Card.Title>건축학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/arc'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>
          </div>

          <div className="row justify-content-center">
            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={mecImage}/>
              <Card.Body>
                <Card.Title>기계로봇에너지공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/mec'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={mmeImage}/>
              <Card.Body>
                <Card.Title>멀티미디어공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/mme'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={iseImage}/>
              <Card.Body>
                <Card.Title>산업시스템공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/ise'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>
          </div>

          <div className="row justify-content-center">
            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={emeImage}/>
              <Card.Body>
                <Card.Title>융합에너지신소재공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/eme'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={eneImage}/>
              <Card.Body>
                <Card.Title>전자전기공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/graduateGuide/ene'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={incImage}/>
              <Card.Body>
                <Card.Title>정보통신공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/inc'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>
          </div>

          <div className="row justify-content-center">
            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={cseImage}/>
              <Card.Body>
                <Card.Title>컴퓨터공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/cse'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>

            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={cenImage}/>
              <Card.Body>
                <Card.Title>화공생물공학과</Card.Title>
                <Button variant="warning"><Link
                    to={'/api/graduateGuide/cen'}>확인하러가기</Link></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
  );
}

export default GraduateGuide_MAIN;
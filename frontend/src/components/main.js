import React, {useState, useEffect} from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import graduateGuideImage from './img/말라비틀어진대학일기.jpg'
import scheduleGuideImage from "./img/종강이라구요.jpg";
import emptyGuideImage from "./img/꽃밭코끼리.jpg"

function Main() {

  return (
      <div className="row justify-content-center">
        <div className=" main">
          <div className="row justify-content-center">
            <Card className="bigCard m-3" style={{width: '58rem'}}>
              <Card.Body>
                <Card.Title>학업이수 가이드</Card.Title>
                <Card.Text>
                  학과 정보를 알고싶은 당신! 학과별 교양강의, 전공강의, 졸업요건, 소모임을 알고싶다구요? 여기에요!
                </Card.Text>
                <Button variant="warning"><Link
                    to={'/graduateGuide_main'}>확인 하러가기</Link></Button>
              </Card.Body>
            </Card>
            <br/>
            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={graduateGuideImage}/>
              <Card.Body>
                <Card.Title>학업이수 가이드</Card.Title>
                <Card.Text>
                  학과 정보를 알고싶은 당신! 학과별 교양강의, 전공강의, 졸업요건, 소모임을 알고싶다구요? 여기에요!
                </Card.Text>
                <Button variant="warning"><Link
                    to={'/graduateGuide_main'}>확인 하러가기</Link></Button>
              </Card.Body>
            </Card>
            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={scheduleGuideImage}/>
              <Card.Body>
                <Card.Title>시간표 가이드</Card.Title>
                <Card.Text>
                  시간표 짜는게 복잡하죠? 우리랑 같이 짜봐요! 시간표만 입력하면 연강해도 가까운 거리로 짜볼게요!
                </Card.Text>
                <Button variant="warning"><Link
                    to={'/scheduleGuide'}>시간표 보러가기</Link></Button>
              </Card.Body>
            </Card>
            <Card className="m-3" style={{width: '18rem'}}>
              <Card.Img variant="top"
                        src={emptyGuideImage}/>
              <Card.Body>
                <Card.Title>공강 가이드</Card.Title>
                <Card.Text>
                  공강일 때 시간이 붕 뜨는게 싫다면! 여기에 들어오세요! 건물별 빈강의실과 추천 카페리스트도 제공해요!
                </Card.Text>
                <Button variant="warning"><Link
                    to={'/emptyGuide'}>시간 때우러가기</Link></Button>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>
  );
}

export default Main;
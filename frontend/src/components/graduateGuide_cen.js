import React, {useState, useEffect} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, NavDropdown, Modal} from "react-bootstrap";
import $ from "jquery";
import {render} from "@testing-library/react";
import Axios from "axios";

function GraduateGuide() {
  const [kyoyang, setKyoyang] = useState("");

  const [major, setMajor] = useState("");

  const [grad, setGrad] = useState("");

  const [sGroup, setSGroup] = useState("");

  const [isKyoyang, setIsKyoyang] = useState();

  const [isMajor, setIsMajor] = useState();

  const [isGrad, setIsGrad] = useState();

  const [isSGroup, setIsSGroup] = useState();

  const onKyoyang = () => {
    setIsKyoyang(true);
    setIsMajor(false);
    setIsGrad(false);
    setIsSGroup(false);
  };
  const onMajor = () => {
    setIsKyoyang(false);
    setIsMajor(true);
    setIsGrad(false);
    setIsSGroup(false);
  };
  const onGrad = () => {
    setIsKyoyang(false);
    setIsMajor(false);
    setIsGrad(true);
    setIsSGroup(false);
  };

  const onSGroup = () => {
    setIsKyoyang(false);
    setIsMajor(false);
    setIsGrad(false);
    setIsSGroup(true);
  };
  useEffect(() => {
    Axios.post("/api/graduateGuide/화공생물공학과/kyoyang").then((res) => {
      if (res.data) {
        setKyoyang(res.data);
      } else {
        alert("failed to");
      }
    });
  }, []);

  useEffect(() => {
    Axios.post("/api/graduateGuide/화공생물공학과").then((res) => {
      if (res.data) {
        setMajor(res.data);
      } else {
        alert("failed to");
      }
    });
  }, []);

  useEffect(() => {
    Axios.post("/api/graduateGuide/화공생물공학과/grad").then((res) => {
      if (res.data) {
        setGrad(res.data);
      } else {
        alert("failed to");
      }
    });
  }, []);

  useEffect(() => {
    Axios.post("/api/graduateGuide/화공생물공학과/sGroup").then((res) => {
      if (res.data) {
        setSGroup(res.data);
      } else {
        alert("failed to");
      }
    });
  }, []);

  const basicKyoyangResult = () => {
    const result = [];
    for (let i = 0; i < kyoyang.length; i++) {
      if (kyoyang[i].majorCategoryDetail == "기본소양") {
        result.push(<li key={i}>{kyoyang[i].lname}</li>);
      }
    }
    return result;
  };

  const commonKyoyangResult = () => {
    const result = [];
    for (let i = 0; i < kyoyang.length; i++) {
      if (kyoyang[i].majorCategoryDetail == "공통교양") {
        result.push(<li key={i}>{kyoyang[i].lname}</li>);
      }
    }
    return result;
  };

  const mscKyoyangResult = () => {
    const result = [];
    for (let i = 0; i < kyoyang.length; i++) {
      if (kyoyang[i].majorCategoryDetail == "MSC") {
        result.push(<li key={i}>{kyoyang[i].lname}</li>);
      }
    }
    return result;
  };

  const needMajorResult = () => {
    const result = [];
    for (let i = 0; i < major.length; i++) {
      if (major[i].majorCategoryDetail == "전공필수") {
        result.push(
            <li key={i}>
              <b>{major[i].lname}</b>
            </li>
        );
      }
    }
    return result;
  };

  const normalMajorResult = () => {
    const result = [];
    for (let i = 0; i < major.length; i++) {
      if (major[i].majorCategoryDetail == "전공선택") {
        result.push(<li key={i}>{major[i].lname}</li>);
      }
    }
    return result;
  };

  const gradResult = () => {
    const result = [];
    for (let i = 0; i < grad.length; i++) {
      result.push(<li key={i}>필요 졸업 학점 : {grad[i].getGrade}</li>);
      result.push(<li key={i}>필수 졸업 평균 : {grad[i].avgGrade}</li>);
      result.push(<li key={i}>필요 토익 점수 : {grad[i].engTest}</li>);
      result.push(<li key={i}>필수 이수 과목 : {grad[i].project}</li>);
    }
    return result;
  };

  const sGroupResult = () => {
    const result = [];
    for (let i = 0; i < sGroup.length; i++) {
      result.push(<li key={i}><h5>🐘 <b>{sGroup[i].gname}</b></h5></li>);
      result.push(<br/>);

    }
    return result;
  };

  return (
      <>
        <div className="GraduateGuide">
          <h1 className="text-center">화공생물공학과</h1>

          <div className="row justify-content-center">
            <div className="d-flex justify-content-center">
              <div className="h2 p-3  list" id="kyoyang" onClick={onKyoyang}>
                교양
              </div>
              <div className="h2 p-3  list" id="major" onClick={onMajor}>
                전공
              </div>
              <div className="h2 p-3  list" id="graduate" onClick={onGrad}>
                졸업요건
              </div>
              <div className="h2 p-3  list" id="group" onClick={onSGroup}>
                소모임
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {isKyoyang && (
                <div className="component" id="kyoyang_info">
                  <div className="p-3">
                    <p>
                      <h5> <b>기본소양 (6학점)</b></h5>
                    </p>
                    <ul>{basicKyoyangResult()}</ul>
                    <p>
                      <h5><b>공통교양 (14~16학점)</b></h5>
                    </p>
                    <ul>{commonKyoyangResult()}</ul>
                    <p>
                      <h5> <b>MSC(9~11학점)</b></h5>
                      <b> &nbsp; &nbsp; &#10004; 수학 필수</b> <br/>
                      &nbsp; &nbsp; &nbsp; &nbsp;  미적분학및연습1, 미적분학및연습2, 공학수학1<br/><br/>

                      <b>&nbsp; &nbsp; &#10004; 과학 필수 (화학개론 불인정)</b><br/>
                      &nbsp; &nbsp; &nbsp; &nbsp; 일반화학및실험1, 일반화학및실험2 <br/><br/>
                      <b>&nbsp; &nbsp; &#10004; 과학 선택 필수 </b><br/>
                      &nbsp; &nbsp; &nbsp; &nbsp; 화학개론 제외 과학 영역 <br/><br/>

                      <b>&nbsp; &nbsp; &#10004; 전산학 1개 과목 선택 필수</b><br/>
                      &nbsp; &nbsp; &nbsp; &nbsp; 전산학 영역
                    </p>
                    <ul>{mscKyoyangResult()}</ul>
                  </div>
                </div>
            )}
            {isMajor && (
                <div className="component" id="major_info">
                  <div className="p-3">
                    <p className="h3">
                      <h5><b> 전공필수</b> </h5>
                    </p>
                    <ul>{needMajorResult()}</ul>

                    <h5><b> 전공선택</b> </h5>
                    <ul>{normalMajorResult()}</ul>
                  </div>
                </div>
            )}
            {isGrad && (
                <div className="component" id="graduate_info">
                  <div className="p-3">
                    <p className="h3">
                      <b>졸업요건</b>
                    </p>

                    <ul>{gradResult()}
                      필수 영어 강의: 4개 과목 (전공 2개 과목 이상)</ul>
                  </div>
                </div>
            )}
            {isSGroup && (
                <div className="component" id="group_info">
                  <div className="p-3">
                    <p className="h3">
                      <b>소모임</b>
                    </p>

                    <ul>{sGroupResult()}</ul>
                  </div>
                </div>
            )}
          </div>
        </div>
      </>
  );
}

export default GraduateGuide;

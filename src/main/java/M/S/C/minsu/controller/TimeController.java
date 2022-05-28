package M.S.C.minsu.controller;

import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.LectureOpendDTO;
import M.S.C.minsu.dto.scheduleForm;
import M.S.C.minsu.entity.LectureOpend;
import M.S.C.minsu.repository.LectureOpendRepository;
import M.S.C.minsu.repository.scheduleRepository;
import M.S.C.minsu.service.LectureOpendService;
import M.S.C.minsu.service.scheduleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Controller
@Slf4j
public class TimeController {


    @Autowired
    private JdbcTemplate jdbctemplate;

    @Autowired //스프링 부트가 미리 생성해놓은 객체를 가젹다가 자동 연결
    private scheduleRepository schedulerepository;

    @Autowired
    private scheduleService ss;

    @PostMapping("/scheduleGuide/scheduleTableEdited")
    public ResponseEntity<?> gethaksooNumber(@RequestBody scheduleForm sf){
        return new ResponseEntity<>(ss.gethaksooNumber(sf), HttpStatus.OK);
    }
//    @PostMapping("/lecture/getMajorInfo")
//    public ResponseEntity<?> getMajorInfo(@RequestBody LectureDTO lectureDTO){
//        return new ResponseEntity<>(lectureService.getMajorInfo(lectureDTO), HttpStatus.OK);
//    }



}

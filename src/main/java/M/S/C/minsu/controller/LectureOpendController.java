package M.S.C.minsu.controller;

import M.S.C.minsu.dto.LectureOpendDTO;
import M.S.C.minsu.repository.LectureOpendRepository;
import M.S.C.minsu.service.LectureOpendService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@Slf4j //로깅을 위한 어노테이션
public class LectureOpendController {

    @Autowired
    private JdbcTemplate jdbctemplate;

    @Autowired //스프링 부트가 미리 생성해놓은 객체를 가젹다가 자동 연결
    private LectureOpendRepository lectureOpendRepository;

    @Autowired
    private LectureOpendService lectureOpendService;



    @PostMapping("lecture/getAllData")
    public ResponseEntity<?> getAllData(@RequestBody LectureOpendDTO lectureOpendDTO){
        return new ResponseEntity<>(lectureOpendService.getAllData(lectureOpendDTO), HttpStatus.OK);
    }

}

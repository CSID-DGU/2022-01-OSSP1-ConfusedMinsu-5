package M.S.C.minsu.controller;

import M.S.C.minsu.dto.GraduationRequirementDTO;
import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.SmallGroupDTO;
import M.S.C.minsu.dto.TestDTO;
import M.S.C.minsu.entity.Lecture;
import M.S.C.minsu.service.LectureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import M.S.C.minsu.repository.LectureRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;


@RestController
public class ReactController {
    @Autowired
    private JdbcTemplate jdbctemplate;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @PostMapping("/api1/graduateGuide")
    public List<Lecture> Hello(){
        String sql = "select Lname, Mname from LECTURE WHERE Mname = \"컴퓨터공학과\"";
        System.out.println(sql);
        List<Map<String, Object>> list=this.jdbctemplate.queryForList(sql); //쿼리값 날리기

        List <Lecture> lectureList=new ArrayList<>();
        int n=list.size();
        System.out.println(n);
        for(int i=0;i<n;i++){
            Long ln=new Long(i);
            Lecture lecture=new Lecture();
            lecture.setId(ln);
            lecture.setLname(list.get(i).get("Lname").toString());
            lecture.setMname(list.get(i).get("Mname").toString());
            lectureList.add(lecture);
        }
        return lectureList;
    }

    @GetMapping("scheduleGuide")
    public String test(){
        String sql = "select Lname, Mname from LECTURE WHERE Mname = \"컴퓨터공학과\"";
        System.out.println(sql);

        return " ";
    }

    private RowMapper<LectureDTO> lectureMapper = BeanPropertyRowMapper.newInstance(LectureDTO.class);
    private RowMapper<GraduationRequirementDTO> GraduationRequirementMapper = BeanPropertyRowMapper.newInstance(GraduationRequirementDTO.class);
    private RowMapper<SmallGroupDTO> SmallGroupMapper = BeanPropertyRowMapper.newInstance(SmallGroupDTO.class);

    @PostMapping("/api/graduateGuide/{major}/kyoyang")
    public List<LectureDTO> getMajorInfoGyoYang(){

        var query = "SELECT *" +
                "  FROM Dongguk.LECTURE" +
                " WHERE MajorCategory = '교양'";

        return jdbcTemplate.query(query, lectureMapper);
    }
    @PostMapping("/api/graduateGuide/{major}")
    public List<LectureDTO> getMajorInfoLecture(@PathVariable("major") String major){
        System.out.println(major);
        var query = "SELECT *" +
                "  FROM Dongguk.LECTURE" +
                " WHERE Mname = \""+major+"\"" +
                "   AND MajorCategory = '전공'";


        return jdbcTemplate.query(query, lectureMapper);

    }

    @PostMapping("/api/graduateGuide/{major}/grad")
    public List<GraduationRequirementDTO> getMajorInfoGrad(@PathVariable("major") String major){

        var query = "SELECT *" +
                "  FROM Dongguk.GRADUATION_REQUIREMENT" +
                " WHERE MajorName = \""+major+"\" ";

        return jdbcTemplate.query(query, GraduationRequirementMapper);
    }
    @PostMapping("/api/graduateGuide/{major}/sGroup")
    public List<SmallGroupDTO> getMajorInfoSmallGp(@PathVariable("major") String major){

        var query = "SELECT *" +
                "  FROM Dongguk.SMALL_GROUP" +
                " WHERE MajorName = \""+major+"\" ";

        return jdbcTemplate.query(query, SmallGroupMapper);
    }
}

package M.S.C.minsu.repository;

import M.S.C.minsu.dto.GraduationRequirementDTO;
import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.LectureOpendDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;
import java.util.Map;
import java.util.HashMap;

import java.sql.SQLException;
import java.util.List;

@Repository
@RestController
public class LectureOpendRepository {
    private Map<String, Object> temp;
    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<LectureOpendDTO> lectureOpendMapper = BeanPropertyRowMapper.newInstance(LectureOpendDTO.class);

    @PostMapping("/scheduleGuide")
    public List<LectureOpendDTO> getAllDataLectureOpend(){

        var query = "SELECT *" +
                " FROM Dongguk.LECTURE_OPEND;";

        return jdbcTemplate.query(query, lectureOpendMapper);
    }

    @PostMapping("/scheduleGuide/scheduleTable")
    public Map<String,Object> makeTable(){
        Map<String, Object> resultMap = new HashMap<String,Object>();
        System.out.println("1"+temp);
        return temp;
    }


    @RequestMapping(value="/scheduleTable.do", method=RequestMethod.POST)
    public Map<String, Object> check(@RequestBody Map<String,Object> paramMap) throws SQLException, Exception{
        System.out.println(paramMap);
        Map<String, Object> resultMap = new HashMap<String,Object>();
        temp = paramMap;

        return resultMap;
    }


    /*@PostMapping("/scheduleGuide/{major}")
    public List<LectureOpendDTO> getMajorDataLectureOpend(@PathVariable("major") String major){

        var query = "SELECT *" +
                " FROM Dongguk.LECTURE_OPEND WHERE lectureCode LIKE '\""+major+"\"@' ";

        return jdbcTemplate.query(query, lectureOpendMapper);
    }*/
}

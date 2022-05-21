package M.S.C.minsu.repository;

import M.S.C.minsu.dto.GraduationRequirementDTO;
import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.LectureOpendDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LectureOpendRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<LectureOpendDTO> lectureOpendMapper = BeanPropertyRowMapper.newInstance(LectureOpendDTO.class);

    public List<LectureOpendDTO> getAllDataLectureOpend(){

        var query = "SELECT *" +
                " FROM Dongguk.LECTURE_OPEND;";

        return jdbcTemplate.query(query, lectureOpendMapper);
    }
}

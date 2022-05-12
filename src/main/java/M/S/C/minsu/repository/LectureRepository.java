package M.S.C.minsu.repository;

import M.S.C.minsu.dto.GraduationRequirementDTO;
import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.SmallGroupDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LectureRepository  {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    private RowMapper<LectureDTO> lectureMapper = BeanPropertyRowMapper.newInstance(LectureDTO.class);
    private RowMapper<GraduationRequirementDTO> GraduationRequirementMapper = BeanPropertyRowMapper.newInstance(GraduationRequirementDTO.class);
    private RowMapper<SmallGroupDTO> SmallGroupMapper = BeanPropertyRowMapper.newInstance(SmallGroupDTO.class);

    public List<LectureDTO> getMajorInfoGyoYang(){

        var query = "SELECT *" +
                "  FROM Dongguk.LECTURE" +
                " WHERE MajorCategory = '교양'";

        return jdbcTemplate.query(query, lectureMapper);
    }

    public List<LectureDTO> getMajorInfoLecture(LectureDTO lectureDTO){

        var query = "SELECT *" +
                "  FROM Dongguk.LECTURE" +
                " WHERE Mname = '"+lectureDTO.getName()+"' " +
                "   AND MajorCategory = '전공'";

        return jdbcTemplate.query(query, lectureMapper);
    }

    public List<GraduationRequirementDTO> getMajorInfoGrad(LectureDTO lectureDTO){

        var query = "SELECT *" +
                "  FROM Dongguk.GRADUATION_REQUIREMENT" +
                " WHERE MajorName = '"+lectureDTO.getName()+"';";

        return jdbcTemplate.query(query, GraduationRequirementMapper);
    }

    public List<SmallGroupDTO> getMajorInfoSmallGp(LectureDTO lectureDTO){

        var query = "SELECT *" +
                "  FROM Dongguk.SMALL_GROUP" +
                " WHERE MajorName = '"+lectureDTO.getName()+"';";

        return jdbcTemplate.query(query, SmallGroupMapper);
    }


}

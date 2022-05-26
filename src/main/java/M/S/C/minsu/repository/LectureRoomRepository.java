package M.S.C.minsu.repository;

import M.S.C.minsu.dto.OpenedLectureRoomDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class LectureRoomRepository {

    private final JdbcTemplate jdbcTemplate;

    public LectureRoomRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    //각 강의실 전체 호수 리스트
    public List<String> entire101_2(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%학술/문화관%'";
        return jdbcTemplate.queryForList(query, String.class);
    }

    public List<String> entire201_2(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%사회과학/경영관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }

    public List<String> entire207(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%혜화관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }



    public List<String> entire303(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%법학/만해관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }


    public List<String> entire307(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%명진관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }

    public List<String> entire308(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%과학관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }

    public List<String> entire310(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%중앙도서관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }


    public List<String> entire401(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%신공학관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }


    public List<String> entire405(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%원흥관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }

    public List<String> entire407_8(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%정보문화관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }

    public List<String> entire501(){
        var query = "SELECT LectureRoom" +
                "  FROM Dongguk.LECTURE_OPEND" +
                " WHERE LectureRoom LIKE '%학림관%'";
        return jdbcTemplate.queryForList(query,String.class);
    }


    //------------------------------------------------



}

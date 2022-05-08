package M.S.C.minsu.mapper;

import M.S.C.minsu.model.Lecture;
import M.S.C.minsu.model.Users;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface LectureMapper {
    @Select("select * from LECTURE")
    List<Lecture> findAll();
}

package M.S.C.minsu.mapper;

import M.S.C.minsu.model.Lecture;
import M.S.C.minsu.model.Major;
import M.S.C.minsu.model.Users;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface MajorMapper {
    @Select("select * from MAJOR")
    List<Major> findAll();
}

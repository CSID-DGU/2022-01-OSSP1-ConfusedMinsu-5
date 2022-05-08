package M.S.C.minsu.mapper;

import M.S.C.minsu.model.Users;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface UsersMapper {
    @Select("select * from users")
    List<Users> findAll();
}

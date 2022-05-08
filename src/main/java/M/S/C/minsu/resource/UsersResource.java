package M.S.C.minsu.resource;


import M.S.C.minsu.mapper.UsersMapper;
import M.S.C.minsu.model.Users;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/users")
public class UsersResource {

    private UsersMapper usersMapper;

    public UsersResource(UsersMapper usersMapper){
        this.usersMapper=usersMapper;
    }

    @GetMapping("/all")
    public List<Users> getAll(){
        return usersMapper.findAll();
    }

}

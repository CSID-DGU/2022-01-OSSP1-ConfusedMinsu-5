package M.S.C.minsu.resource;


import M.S.C.minsu.mapper.LectureMapper;
import M.S.C.minsu.mapper.UsersMapper;
import M.S.C.minsu.model.Lecture;
import M.S.C.minsu.model.Users;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/lecture")
public class LectureResource {

    private LectureMapper lecMapper;

    public LectureResource(LectureMapper lecMapper){
        this.lecMapper=lecMapper;
    }

    @GetMapping("/all")
    public List<Lecture> getAll(){
        return lecMapper.findAll();
    }

}

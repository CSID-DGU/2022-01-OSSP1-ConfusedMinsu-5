package M.S.C.minsu.resource;


import M.S.C.minsu.mapper.LectureMapper;
import M.S.C.minsu.mapper.MajorMapper;
import M.S.C.minsu.mapper.UsersMapper;
import M.S.C.minsu.model.Lecture;
import M.S.C.minsu.model.Major;
import M.S.C.minsu.model.Users;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/major")
public class MajorResource {

    private MajorMapper majorMapper;

    public MajorResource(MajorMapper majorMapper){
        this.majorMapper=majorMapper;
    }

    @GetMapping("/all")
    public List<Major> getAll(){
        return majorMapper.findAll();
    }

}

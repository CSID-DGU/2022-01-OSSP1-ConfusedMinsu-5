package M.S.C.minsu.service.serviceImpl;

import M.S.C.minsu.dto.LectureOpendDTO;
import M.S.C.minsu.dto.scheduleForm;
import M.S.C.minsu.repository.LectureOpendRepository;
import M.S.C.minsu.repository.scheduleRepository;
import M.S.C.minsu.service.scheduleService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class scheduleServiceImpl implements scheduleService {

    @Resource
    scheduleRepository sr;
    @Override
    public List<?> gethaksooNumber(scheduleForm sf) {
        return sr.gethaksooNumberSchedule(sf);
    }
}

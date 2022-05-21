package M.S.C.minsu.service.serviceImpl;

import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.dto.LectureOpendDTO;
import M.S.C.minsu.repository.LectureOpendRepository;
import M.S.C.minsu.service.LectureOpendService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LectureOpendServiceImpl implements LectureOpendService {

    @Resource
    LectureOpendRepository lectureOpendRepository;

    @Override
    public List<?> getAllData(LectureOpendDTO lectureOpendDTO) {
        return lectureOpendRepository.getAllDataLectureOpend();
    }
}

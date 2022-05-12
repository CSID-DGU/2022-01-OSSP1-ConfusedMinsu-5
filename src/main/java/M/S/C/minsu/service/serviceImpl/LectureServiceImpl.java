package M.S.C.minsu.service.serviceImpl;

import M.S.C.minsu.dto.LectureDTO;
import M.S.C.minsu.repository.LectureRepository;
import M.S.C.minsu.service.LectureService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class LectureServiceImpl implements LectureService {

    @Resource
    LectureRepository lectureRepository;

    @Override
    public List<?> getMajorInfo(LectureDTO lectureDTO) {

        if(lectureDTO.getKeyword().equals("교양")) {
            return lectureRepository.getMajorInfoGyoYang();
        }else if(lectureDTO.getKeyword().equals("전공")){
            return lectureRepository.getMajorInfoLecture(lectureDTO);
        }else if(lectureDTO.getKeyword().equals("졸업요건")){
            return lectureRepository.getMajorInfoGrad(lectureDTO);
        }else if(lectureDTO.getKeyword().equals("소모임")){
            return lectureRepository.getMajorInfoSmallGp(lectureDTO);
        }else{
            return lectureRepository.getMajorInfoGyoYang();
        }
    }
}

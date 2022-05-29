package M.S.C.minsu.service.serviceImpl;

import M.S.C.minsu.repository.LectureRoomRepository;
import M.S.C.minsu.service.LectureRoomService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class LectureRoomServiceImpl implements LectureRoomService {

    @Resource
    LectureRoomRepository lectureRoomRepository;


    @Override
    public List<String> wantedList(String nowOfDay, double thisTime){
        List<String> joined = new ArrayList<>();
        joined.addAll(lectureRoomRepository.entire101_2(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire201_2(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire207(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire303(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire307(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire308(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire310(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire401(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire405(nowOfDay, thisTime));
        joined.addAll(lectureRoomRepository.entire407_8(nowOfDay,thisTime));
        joined.addAll(lectureRoomRepository.entire501(nowOfDay,thisTime));
        return joined;
    }
}

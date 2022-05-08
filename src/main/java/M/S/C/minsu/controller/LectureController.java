package M.S.C.minsu.controller;

import M.S.C.minsu.dto.TestDTO;
import M.S.C.minsu.entity.Lecture;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import M.S.C.minsu.repository.LectureRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Controller
@Slf4j //로깅을 위한 어노테이션
public class LectureController {

    @Autowired
    private JdbcTemplate jdbctemplate;

    @Autowired //스프링 부트가 미리 생성해놓은 객체를 가젹다가 자동 연결
    private LectureRepository lectureRepository;

    @GetMapping("/Lecture/home") //www.localhost:8080/Lecture/home에 들어가면
    public String newHomeForm(){
        return "Lecture/home"; //template의 Lecture/home.mustache 파일 return
    }

    @PostMapping("/Lecture/select") //submit하면 Lecture/select로 post함
    @ModelAttribute("lectureList")
    public String selectMajor(TestDTO test, Model model){ //DTO 객체를 받는다
       // log.info(test.showmjaor());
        String major=test.showmjaor(); //입력받은 전공 보기
       // System.out.println(test.toString()); //받아온 객체를 string으로 받아옴 ->로깅으로 대체
        /*String sql=this.jdbctemplate.queryForObject(
                "select Lname from LECTURE WHERE Mname= ?",
                String.class, major);
        Lecture.setLname()
        return "";
        */
        String sql="select Lname, Mname from LECTURE WHERE Mname=\""+major+"\"";
        List<Map<String, Object>> list=this.jdbctemplate.queryForList(sql); //쿼리값 날리기

        List <Lecture> lectureList=new ArrayList<>();
        int n=list.size();
        System.out.println(n);
        for(int i=0;i<n;i++){
            Long ln=new Long(i);
            Lecture lecture=new Lecture();
            lecture.setId(ln);
            lecture.setLname(list.get(i).get("Lname").toString());
            lecture.setMname(list.get(i).get("Mname").toString());
            lectureList.add(lecture);
        }

        model.addAttribute("lecturelist",lectureList);

        //List<String> majorlist = list.stream().filter(t -> t.containsKey("Lname")).map(m -> m.get("Lname").toString()).collect(Collectors.toList());

        //System.out.println(majorlist.toString());
        return "/Lecture/select";
    }

    @GetMapping("/Lecture/select")
    public String select(){
        return "/Lecture/select";
    }

    @GetMapping("/Lecture/{major}") //드랍다운으로
    public String showlecture(@PathVariable String major, Model model){

        System.out.println(major);
        String sql="select Lname, Mname from LECTURE WHERE Mname=\""+major+"\"";
        List<Map<String, Object>> list=this.jdbctemplate.queryForList(sql); //쿼리값 날리기

        List <Lecture> lectureList=new ArrayList<>();
        int n=list.size();
        System.out.println(n);
        for(int i=0;i<n;i++){
            Long ln=new Long(i);
            Lecture lecture=new Lecture();
            lecture.setId(ln);
            lecture.setLname(list.get(i).get("Lname").toString());
            lecture.setMname(list.get(i).get("Mname").toString());
            lectureList.add(lecture);
        }

        model.addAttribute("lecturelist",lectureList);
        return "/Lecture/select";
    }

/*
    @GetMapping("/Lecture/{id}")
    public String show(@PathVariable Long id, Model model){
        log.info("id="+id);
        //1. id로 데이터 가져옴
        Optional<Lecture> LectureEntity= Optional.ofNullable(lectureRepository.findById(id).orElse(null));//해당 id 값이 없으면 null 반환
        //2. 가져온 데이터를 모델에 등록
        model.addAttribute("lecture",LectureEntity);
        //3. 보여줄 페이지를 설정
        return "Lecture/show";

    }

*/


}

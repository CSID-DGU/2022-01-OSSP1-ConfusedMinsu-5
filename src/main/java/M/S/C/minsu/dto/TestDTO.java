package M.S.C.minsu.dto;

import M.S.C.minsu.entity.Lecture;
import lombok.AllArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@ToString
public class TestDTO {

    private String major;
    private String name;

    public Lecture toEntity(){
        return new Lecture(null, major, name);
    }


    public String showmjaor(){
        return major;
    }

}

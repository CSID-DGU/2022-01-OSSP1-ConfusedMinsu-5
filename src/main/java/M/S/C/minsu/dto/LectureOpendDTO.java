package M.S.C.minsu.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LectureOpendDTO {

    private String MajorCategory;
    private String LectureCode;
    private String Lname;
    private int Credit;
    private String DayTime;
    private String LectureRoom;
    private String Professor;
    private String Campus;

}

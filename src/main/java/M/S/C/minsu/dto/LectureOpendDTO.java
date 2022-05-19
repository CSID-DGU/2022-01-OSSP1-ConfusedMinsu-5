package M.S.C.minsu.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LectureOpendDTO {

    String MajorCategory;
    String LectureCode;
    String Lname;
    String Credit;
    String DayTime;
    String LectureRoom;
    String Professor;
    String Campus;

}

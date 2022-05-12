package M.S.C.minsu.dto;

import M.S.C.minsu.entity.Article;
import M.S.C.minsu.entity.Lecture;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LectureDTO {

    private String keyword;
    private String Lname;
    private String name;
    private int Semester;
    private String MajorCategory;
    private String MajorCategoryDetail;

}

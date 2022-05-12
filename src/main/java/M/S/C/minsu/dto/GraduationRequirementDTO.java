package M.S.C.minsu.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class GraduationRequirementDTO {

    Integer GetGrade;
    String AvgGrade;
    String EngTest;
    String Discussion;
    String Project;
    String MajorName;

}

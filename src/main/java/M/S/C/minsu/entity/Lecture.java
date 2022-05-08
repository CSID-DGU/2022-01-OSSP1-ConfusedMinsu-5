package M.S.C.minsu.entity;

import lombok.*;

import javax.persistence.*;

@Entity //db가 해당 객체를 인식 가능!
@AllArgsConstructor
@ToString
public class Lecture {

    @Id //대푯값을 저장! like a 주민등록번호
    @GeneratedValue(strategy = GenerationType.IDENTITY) //1, 2,3 자동 생성 어노테이션
    public Long id;

    @Column
    public String lname;

    @Column
    public String mname;

    public Lecture() {
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public void setMname(String mname) {
        this.mname = mname;
    }
}

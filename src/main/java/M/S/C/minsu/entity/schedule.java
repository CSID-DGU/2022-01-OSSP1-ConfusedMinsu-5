package M.S.C.minsu.entity;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity // db가 이해할수있게끔 엔티티라 써서 알려줌
public class schedule {




    @Column
    private String haksooNumber;

}

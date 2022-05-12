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
public class Article {

    @Id // 대표값 지정 1,2,3
    @GeneratedValue // 1,2,3으로 저절로 자동 증가
    private Long id;

    @Column //컬럼인걸 알려줌
    private String title;

    @Column
    private String content;


}

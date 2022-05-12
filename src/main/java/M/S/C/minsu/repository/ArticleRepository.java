package M.S.C.minsu.repository;

import M.S.C.minsu.entity.Article;
import org.springframework.data.repository.CrudRepository;

public interface ArticleRepository extends CrudRepository<Article, Long> { //관리대상 엔티티와, 그 엔티티의 대표값 타입을 넣어줘야됨!!

    //이렇게 상속받으면 crud를 따로 기능구현없이 쓸 수 있게됨!!



}

//package M.S.C.minsu.controller;
//
//
//import M.S.C.minsu.dto.ArticleForm;
//import M.S.C.minsu.entity.Article;
//import M.S.C.minsu.repository.ArticleRepository;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//
//import java.util.List;
//
//@Controller
//@Slf4j
//public class ArticleController {
//
//    @Autowired //스프링부트가 만들어놓은 객체를 가져다가 연결해줌 알아서~
//    private ArticleRepository articleRepository; //레파지토리 인터페이스 선언해주기
//    // 이렇게 클래스만들때 new 안써도 스프링부트가 해줌. 어떻게? @autowired로
//
//    @GetMapping("/articles/new")
//    public String newArticleForm(){
//        return "articles/new";
//    }
//
//    @PostMapping("/articles/create")
//    public String createArticle(ArticleForm form){
//        System.out.println(form.toString());
//
//        //dto -> entity 변환
//        Article article=form.toEntity();
//        log.info(article.toString());
//
//        //repository에게 db에 엔티티 넣으라고 명령할것
//        Article saved =articleRepository.save(article); // crud repository에서 save메소드 상속받아서 사용!
//        log.info(saved.toString());
//        return "";
//    }
//
//    @GetMapping("/articles/{id}")
//    public String show(@PathVariable Long id , Model model){ //
//        //id로 데이터를 가져옴
//        Article articleEntiry = articleRepository.findById(id).orElse(null); // 데이터없을경우의 예외처리
//
//        // 모델에 등록
//        model.addAttribute("article",articleEntiry);
//
//        //뷰페이지에 등록
//        return "articles/show";
//    }
//
//    @GetMapping("/articles")
//    public String index(Model model){
//        //모든 아티클 가져오기 (테이블값)
//        List<Article> articleEntityList= (List<Article>) articleRepository.findAll();
//
//        //가져온거 뷰로전달
//        model.addAttribute("articleList",articleEntityList);
//        //뷰페이지 설정
//
//        return "/articles";
//
//
//    }
//
//
//
//
//
//}

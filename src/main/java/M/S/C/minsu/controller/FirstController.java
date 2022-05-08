package M.S.C.minsu.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class FirstController {

    @GetMapping("/hi") //hi url을 받으면 greetings.mustache 를 반환
    public String niceToMeetYou(Model model){
        model.addAttribute("username", "minsu");
        return "greetings";
    }
}

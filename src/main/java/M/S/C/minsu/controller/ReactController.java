package M.S.C.minsu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class ReactController {
    @GetMapping("graduateGuide")
    public String Hello(){
        return "서버포트는 5315 리액트 포트는 3000\n";
    }
}

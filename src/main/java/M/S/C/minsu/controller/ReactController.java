package M.S.C.minsu.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;

@RestController
public class ReactController {
    @GetMapping("/demo/hello")
    public String HelloWorld(){
        return "MinsuIsConfused \n";
    }
}

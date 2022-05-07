package com.project.mong.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;
import java.util.Map;

@Controller
public class HelloController {

    @GetMapping("/get")
    public String get(ModelMap modelMap) throws Exception{
        Map<String, String> test=Collections.singletonMap("name","테스트");
        Map<String, Object> result= Collections.singletonMap("test",test);

        modelMap.put("result",result);

        return "get";

    }

}

package com.bee.trabee.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class TestController {

    @RequestMapping("test")
    public List<String> test() throws Exception {
        List<String> result = new ArrayList<>();
        result.add("테스트화면 입니다.");

        return result;
    }
}

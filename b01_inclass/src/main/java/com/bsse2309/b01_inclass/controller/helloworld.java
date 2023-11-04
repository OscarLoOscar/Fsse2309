package com.bsse2309.b01_inclass.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/test")
@RestController
public class helloworld {

  @GetMapping("/hello")
  public String Hello(
      @RequestParam(value = "name", defaultValue = "World") String name) {
    return String.format("Hello %s!", name);
  }

  @GetMapping("/add")
  public Integer add(@RequestParam(value = "num1") String num1, //
      @RequestParam(value = "num2") String num2) {
    return Integer.valueOf(num1) + Integer.valueOf(num2);
  }

}

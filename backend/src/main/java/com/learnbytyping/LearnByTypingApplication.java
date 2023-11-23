package com.learnbytyping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class LearnByTypingApplication {

  public static void main(String[] args) {
    SpringApplication.run(LearnByTypingApplication.class, args);
  }

  @RequestMapping("/")
  String index() {
    return "Start Learn by typing!!";
  }
}

package com.learnbytyping.question.controller;

import com.learnbytyping.question.service.QuestionInformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.learnbytyping.question.entity.Exam;

import java.util.List;


@RestController
//@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class QuestionInformationController {

  @Autowired
  private final QuestionInformationService questionInformationService;
  public QuestionInformationController() {
    this.questionInformationService = null;
  }

  @RequestMapping("/init")
  public List<Exam> getInit() {
    return questionInformationService.getQuestionInformation();
  }

  @RequestMapping("/test")
  public void testMethod() {
    List<Exam> testList = questionInformationService.getQuestionInformation();
    System.out.println(testList);
    System.out.println();
    System.out.println(testList.get(0).getCategoryList());
    System.out.println();
    System.out.println(testList.get(0).getCategoryList().get(0).getSectionList());
  }

}
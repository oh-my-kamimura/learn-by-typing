package com.learnbytyping.question.controller;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.learnbytyping.question.entity.Question;
import com.learnbytyping.question.service.QuestionInformationService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.learnbytyping.question.entity.Exam;

import java.util.List;


@RestController
@CrossOrigin(origins = {"https://www.learn-by-typing.com", "http://localhost:4200"})
@RequiredArgsConstructor
public class QuestionInformationController {

  @Autowired
  private final QuestionInformationService questionInformationService;
  public QuestionInformationController() {
    this.questionInformationService = null;
  }

  @RequestMapping("/init")
  public List<Exam> getInit() {
    return questionInformationService.getExamInformation();
  }

  @RequestMapping("/question")
  public List<Question> getQuestionList(
    @RequestParam(value = "categoryId", required = false) Integer categoryId,
    @RequestParam(value = "sectionId", required = false) Integer sectionId,
    @RequestParam(value = "fetchQuestionNum", required = true) int questionNum
  ) {
    if (sectionId != null)
      return questionInformationService.getQuestionBySectionId(sectionId, questionNum);
    else
      return questionInformationService.getQuestionByCategoryId(categoryId, questionNum);
  }
}

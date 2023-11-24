package com.learnbytyping.question.service;

import com.learnbytyping.question.entity.Exam;
import com.learnbytyping.question.repository.ExamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionInformationService {

  @Autowired
  private final ExamRepository examRepository;
  public QuestionInformationService() {
    this.examRepository = null;
  }

  public List<Exam> getExams() {
    return examRepository.findAll();
  }

}

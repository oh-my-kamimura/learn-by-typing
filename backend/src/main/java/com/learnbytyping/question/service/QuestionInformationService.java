package com.learnbytyping.question.service;

import com.learnbytyping.question.entity.Category;
import com.learnbytyping.question.entity.Exam;
import com.learnbytyping.question.entity.Section;
import com.learnbytyping.question.repository.CategoryRepository;
import com.learnbytyping.question.repository.ExamRepository;
import com.learnbytyping.question.repository.SectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class QuestionInformationService {

  @Autowired
  private final ExamRepository examRepository;
  @Autowired
  private final CategoryRepository categoryRepository;
  @Autowired
  private final SectionRepository sectionRepository;
  public QuestionInformationService() {
    this.examRepository = null;
    this.categoryRepository = null;
    this.sectionRepository = null;
  }

  public List<Exam> getExamInformation() {
    return examRepository.findAll();
  }
}

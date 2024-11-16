package com.learnbytyping.question.service;

import com.learnbytyping.question.entity.Category;
import com.learnbytyping.question.entity.Exam;
import com.learnbytyping.question.entity.Section;
import com.learnbytyping.question.entity.Question;
import com.learnbytyping.question.repository.CategoryRepository;
import com.learnbytyping.question.repository.ExamRepository;
import com.learnbytyping.question.repository.SectionRepository;
import com.learnbytyping.question.repository.QuestionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

@Service
@RequiredArgsConstructor
public class QuestionInformationService {

  @Autowired
  private final ExamRepository examRepository;
  @Autowired
  private final CategoryRepository categoryRepository;
  @Autowired
  private final SectionRepository sectionRepository;
  @Autowired
  private final QuestionRepository questionRepository;
  public QuestionInformationService() {
    this.examRepository = null;
    this.categoryRepository = null;
    this.sectionRepository = null;
    this.questionRepository = null;
  }

  public List<Exam> getExamInformation() {
    return examRepository.findAll();
  }

  public List<Question> getQuestionBySectionId(int sectionId, int questionNum) {
    List<Question> questions = questionRepository.findBySectionId(sectionId);
    Collections.shuffle(questions);
    if (questions.size() > questionNum) {
      return questions.subList(0, questionNum);
    } else {
      return questions;
    }
  }

  public List<Question> getQuestionByCategoryId(int categoryId, int questionNum) {
    List<Question> questions = new ArrayList<>();
    List<Section> sectionList = sectionRepository.findByCategoryId(categoryId);
    for (Section section: sectionList){
      questions.addAll(questionRepository.findBySectionId(section.getSectionId().intValue()));
    }
    Collections.shuffle(questions);
    if (questions.size() > questionNum) {
      return questions.subList(0, questionNum);
    } else {
      return questions;
    }
  }
}

package com.learnbytyping.question.repository;

import com.learnbytyping.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
  List<Question> findBySectionId(int sectionId);
}

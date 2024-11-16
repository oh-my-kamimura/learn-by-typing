package com.learnbytyping.question.repository;

import com.learnbytyping.question.entity.Question;
import com.learnbytyping.question.entity.Section;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SectionRepository extends JpaRepository<Section, Long> {
  List<Section> findByCategoryId(int categoryId);
}

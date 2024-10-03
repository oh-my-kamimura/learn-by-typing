package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "question")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Question {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Long questionId;

  @Column
  private Long sectionId;

  @Column
  private Integer frequency;

  @Column
  private String statement;

  @Column
  private String hiragana;

  @Column
  private String imagePath;

  @Column
  private String explanation;
}

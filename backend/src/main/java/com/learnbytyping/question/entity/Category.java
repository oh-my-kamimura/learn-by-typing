package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;

@AllArgsConstructor
@Entity
@Table(name = "category")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Category {
  @Id
  private Integer category_id;
  private String category_name;

  @ManyToOne
  @JoinColumn(name = "exam_id")
  private Exam exam;

  @OneToMany(mappedBy = "category", cascade = CascadeType.ALL)
  private ArrayList<Section> sections;
}

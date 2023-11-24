package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "exam")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Exam {

  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private int examId;

  @Column
  private String examName;

  @Column
  private boolean isEnable;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "exam")
  @ToString.Exclude
  private List<Category> categoryList;
}
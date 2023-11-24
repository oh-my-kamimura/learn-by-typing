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
@Table(name = "category")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Category {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer categoryId;

  @Column
  private String categoryName;

  @ManyToOne(fetch=FetchType.EAGER)
  @JoinColumn(nullable = false, insertable = false, updatable = false, name = "examId")
  @ToString.Exclude
  private Exam exam;

  @Column
  private int examId;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "category")
  @ToString.Exclude
  private List<Section> sectionList;
}

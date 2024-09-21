package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

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
  private Long categoryId;

  @Column
  private String categoryName;

  @ManyToOne(fetch=FetchType.EAGER)
  @JsonBackReference
  @JoinColumn(nullable = false, insertable = false, updatable = false, name = "examId")
  @ToString.Exclude
  private Exam exam;

  @Column
  private Long examId;

  @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER, mappedBy = "category")
  @JsonManagedReference
  @ToString.Exclude
  private List<Section> sectionList;
}

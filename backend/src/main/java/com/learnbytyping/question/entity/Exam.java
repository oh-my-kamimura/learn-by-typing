package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

//  TODO エラーが発生するため、後ほど修正。
//  @OneToMany(mappedBy = "exam", cascade = CascadeType.ALL)
//  private List<Category> categories;
}

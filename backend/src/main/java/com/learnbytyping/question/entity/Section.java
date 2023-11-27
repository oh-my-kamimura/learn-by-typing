package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "section")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Section {
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)
  private Integer sectionId;

  @Column
  private String sectionName;

  @Column
  private Boolean isEnable;

  @Column
  private int categoryId;

  @ManyToOne(fetch=FetchType.EAGER)
  @JsonBackReference
  @JoinColumn(nullable = false, insertable = false, updatable = false, name = "categoryId")
  @ToString.Exclude
  private Category category;
}

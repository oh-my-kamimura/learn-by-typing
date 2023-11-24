package com.learnbytyping.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "section")
@Data
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Section {
  @Id
  private Integer section_id;
  private String section_name;
  private Boolean is_enable;

  @ManyToOne
  @JoinColumn(name = "category_id")
  private Category category;
}

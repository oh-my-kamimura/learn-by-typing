package com.learnbytyping.inquiry.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "inquiry")
@Data
public class Inquiry {

  @Id
  @GeneratedValue(strategy= GenerationType.IDENTITY)
  private Long inquiryId;

  @Column
  private String subject;

  @Column
  private String email;

  @Column
  private String message;

}

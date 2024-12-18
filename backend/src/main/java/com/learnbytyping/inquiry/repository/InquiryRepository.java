package com.learnbytyping.inquiry.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.learnbytyping.inquiry.entity.Inquiry;

@Repository
public interface InquiryRepository extends JpaRepository <Inquiry, Long> {

}

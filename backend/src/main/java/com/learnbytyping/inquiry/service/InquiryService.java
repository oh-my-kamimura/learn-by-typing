package com.learnbytyping.inquiry.service;

import com.learnbytyping.inquiry.entity.Inquiry;
import com.learnbytyping.inquiry.repository.InquiryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class InquiryService {

  @Autowired
  private InquiryRepository inquiryRepository;

  public void saveInquiry(Inquiry inquiry) {
    inquiryRepository.save(inquiry);
  }

}

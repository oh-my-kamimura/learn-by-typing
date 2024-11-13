package com.learnbytyping.inquiry.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.learnbytyping.inquiry.service.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import com.learnbytyping.inquiry.entity.Inquiry;

@RestController
@CrossOrigin(origins = {"https://www.learn-by-typing.com", "http://localhost:4200"})
public class InquiryController {

  @Autowired
  private InquiryService inquiryService;

  @PostMapping("/inquiries")
  public ResponseEntity<String> createInquiry(@RequestBody Inquiry inquiry) {
    inquiryService.saveInquiry(inquiry);
    return new ResponseEntity<>("Inquiry created successfully", HttpStatus.CREATED);
  }

}

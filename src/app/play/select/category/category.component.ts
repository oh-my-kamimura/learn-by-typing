import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lbt-select-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  exam_id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.exam_id = params['exam-id']));
  }

}

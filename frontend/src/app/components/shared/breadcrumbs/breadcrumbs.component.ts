import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent, BreadcrumbItemDirective } from "xng-breadcrumb";
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'lbt-breadcrumbs',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, BreadcrumbItemDirective],
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss', '/src/styles.scss']
})
export class BreadcrumbsComponent {
  constructor(
    private breadcrumbService: BreadcrumbService,
  ) { }

  ngOnInit(): void {
    this.breadcrumbService.set('@ChildOne', 'Child One1111');
  }
}

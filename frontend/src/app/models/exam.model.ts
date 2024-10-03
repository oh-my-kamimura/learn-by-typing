import { Category } from "./category.model";

export class Exam {
  examId: number = 0;
  examName: string = '';
  isEnable: boolean = false;
  description: string = '';
  categoryList: Category[] = [];

  public getCategory(categoryId: number): Category | undefined {
    return this.categoryList.find(category => category.categoryId == categoryId);
  }
}

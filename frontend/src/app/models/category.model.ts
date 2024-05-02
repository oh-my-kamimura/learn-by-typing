import { Section } from "./section.model";

export class Category {
  categoryId: number = 0;
  categoryName: string = '';
  examId: number = 0;
  sectionList: Section[] = [];

  public getSection(sectionId: number): Section | undefined {
    return this.sectionList.find(section => section.sectionId == sectionId);
  }
}

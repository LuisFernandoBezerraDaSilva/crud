import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../modal/category';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {

  public code: string = '';
  public title: string = '';
  public description: string = '';


  public category?: Category;
  
  constructor(private categoryService: CategoryService) {}

  submitData(){
    let category: Category = {
      id: 0,
      code: this.code,
      title: this.title,
      description: this.description
    }
    this.categoryService.createCategory(category).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}

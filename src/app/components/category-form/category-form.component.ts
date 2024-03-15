import { Component, Inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../modal/category';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {

  public code: string = '';
  public title: string = '';
  public description: string = '';
  public id: string = '';
  
  
  public category?: Category;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any, 
    private categoryService: CategoryService
    ) {
      this.code = data.code ? data.code : '';
      this.id = data.id ? data.id : '';
      this.title = data.title ? data.title : '';
      this.description = data.description ? data.description : '';
    }

  submitData(){
    let category: Category = {
      id: this.id ? parseInt(this.id) : 0,
      code: this.code,
      title: this.title,
      description: this.description
    }

    if(this.id){
      this.categoryService.createCategory(category).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
      return;
    }

    this.categoryService.updateCategory(category).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
}

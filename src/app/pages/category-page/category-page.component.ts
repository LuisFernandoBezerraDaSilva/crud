import { Component, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../modal/category';
import { CategoryFormComponent } from '../../components/category-form/category-form.component';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent {
  public categories: Category[] = [];
  public loading: boolean = true;
  public title  = 'Categorias';
  public formComponentToBeSent = CategoryFormComponent;
  
  constructor(private categoryService: CategoryService) {
    this.getCategories();
  }

  private getCategories(){
    this.categoryService.getCategory().subscribe((data: any) => {
      this.categories = data;
      this.loading = false;
    });
  }

  public onItemSelected(item: any) {
    if(item.action === 'reloadItems'){
      this.getCategories();
    } if (item.action === 'deleteItem'){
      this.categoryService.deleteCategory(item.id).subscribe((data: any) => {
        this.getCategories();
      });;
    }
  }

}

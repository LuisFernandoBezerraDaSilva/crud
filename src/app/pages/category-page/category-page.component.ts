import { Component, Input } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../modal/category';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.scss'
})
export class CategoryPageComponent {
  public categories: Category[] = [];
  public loading: boolean = true;

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategory().subscribe((data: any) => {
      this.categories = data;
      this.loading = false;
    });
  }

}

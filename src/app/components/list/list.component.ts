import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Category } from '../../modal/category';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: any[] = [];
  @Input() formComponent: any;
  public columns: string[] = [];

  constructor(private dialog:MatDialog) {
  }

  ngOnInit() {
    this.columns = this.getUniqueKeys();
  }

  private getUniqueKeys(): string[] {
    const keysSet = new Set<string>();
    this.items.forEach(item => {
      Object.keys(item).forEach(key => {
        if (key === 'id') return;
        keysSet.add(key);
      });
    });

    return Array.from(keysSet);
  }

  createItem() {
    this.openDialog();
  }

  editItem(item: Category) {
    this.openDialog(item)

  }

  public openDialog(item?: Category) {
    const dialogRef = this.dialog.open(this.formComponent, {
      width: '250px',
      data: item ? item : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
    });
  }


  }

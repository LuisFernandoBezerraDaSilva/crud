import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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
  @Output() itemSelected: EventEmitter<any> = new EventEmitter();
  
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
        // adicionar tradução
        keysSet.add(key);
      });
    });

    return Array.from(keysSet);
  }

  public createItem() {
    this.openDialog();
  }

  public editItem(item: Category) {
    this.openDialog(item)

  }

  private openDialog(item?: Category) {
    const dialogRef = this.dialog.open(this.formComponent, {
      width: '250px',
      data: item ? item : {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.reloadItems();
    });
  }

  public reloadItems() {
    this.itemSelected.emit({action: 'reloadItems'});
  }


  }

import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  public openDialog() {
    const dialogRef = this.dialog.open(this.formComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('O diálogo foi fechado');
    });
  }


  }

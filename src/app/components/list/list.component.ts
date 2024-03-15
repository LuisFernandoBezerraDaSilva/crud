import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() items: any[] = [];
  public columns: string[] = [];

  constructor() { }

  ngOnInit() {
    this.columns = this.getUniqueKeys();
  }

  private getUniqueKeys(): string[] {
    const keysSet = new Set<string>();
    console.log('aaaaaa')
    console.log(this.items)
    this.items.forEach(item => {
      Object.keys(item).forEach(key => {
        keysSet.add(key);
      });
    });
    return Array.from(keysSet);
  }

  }

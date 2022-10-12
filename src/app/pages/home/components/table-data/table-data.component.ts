import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'tr[app-table-data]',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.scss']
})
export class TableDataComponent implements OnInit {
  @Input() public product: Product | null = null;
  @Output() public deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteProductEvent(productId: string | undefined): void {
    this.deleteEvent.emit(productId);
  }

}

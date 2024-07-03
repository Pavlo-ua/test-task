import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "../../@models/product.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: ProductModel[] = []
  @Output() editId = new EventEmitter<number>();
  @Output() deleteId = new EventEmitter<number>();

  displayedColumns = [
    'id', 'name', 'manufacture_date', 'expiration_date', 'comment', 'actions'
  ]

  edit(id: number) {
    this.editId.emit(id)
  }

  delete(id: number) {
    this.deleteId.emit(id)
  }
}

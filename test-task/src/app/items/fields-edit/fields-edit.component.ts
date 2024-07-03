import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";
import {FieldsModel} from "../../@models/fields.model";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-fields-edit',
  templateUrl: './fields-edit.component.html',
  styleUrls: ['./fields-edit.component.scss']
})
export class FieldsEditComponent {
  @ViewChild(MatTable) table: MatTable<FieldsModel> | undefined
  @Input() data: FieldsModel[] = []

  displayedColumns = [
    'field', 'value', 'date', 'del'
  ]

  del(e: FieldsModel) {
    this.data.splice(this.data.indexOf(e), 1)
    this.table?.renderRows()
  }

  addField() {
    this.data.push({name: '', value: '', is_date: false})
    this.table?.renderRows()
  }
}

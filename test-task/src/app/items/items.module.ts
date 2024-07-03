import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { TableComponent } from './table/table.component';
import { ItemFormComponent } from './item-form/item-form.component';
import {ItemsRoutingModule} from "./items-routing.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { FieldsEditComponent } from './fields-edit/fields-edit.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {NgIconsModule} from "@ng-icons/core";
import {ionTrashOutline, ionPencilOutline} from '@ng-icons/ionicons';


@NgModule({
  declarations: [
    ItemsComponent,
    TableComponent,
    ItemFormComponent,
    FieldsEditComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    NgIconsModule.withIcons({ionTrashOutline, ionPencilOutline })
  ]
})
export class ItemsModule { }

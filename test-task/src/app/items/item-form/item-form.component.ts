import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductModel} from "../../@models/product.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ExpirationTypeEnum} from "../../@models/expirationTypeEnum";
import {FieldsModel} from "../../@models/fields.model";
import {ItemsService} from "../items.service";
import {ProductCreateModel} from "../../@models/product-create.model";
import {formatDate} from "../../@helpers/date.fn";


@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit{

  group = new FormGroup({
    name: new FormControl(null, Validators.required),
    expType: new FormControl(ExpirationTypeEnum.non_expirable, Validators.required),
    manufDate: new FormControl(null, Validators.required),
    expDate: new FormControl(null),
    comment: new FormControl(''),
  })

  fields: FieldsModel[] = [
    {name: '', value: '', is_date: false}
  ]

  expTypes = [{
    type: ExpirationTypeEnum.non_expirable,
    label: 'unexpirable'
  }, {
    type: ExpirationTypeEnum.expirable,
    label: 'expirable'
  }]
  showExpDate = false;
  id

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProductModel,
    private service: ItemsService,
    private dialogRef: MatDialogRef<ItemFormComponent>
  ) {
  }

  ngOnInit() {
    if (this.data) {
      this.id = this.data.id;
      this.group.controls.name.patchValue(this.data.name)
      this.group.controls.expType.patchValue(this.data.expiration_type)
      this.group.controls.manufDate.patchValue(new Date(this.data.manufacture_date))
      this.group.controls.expDate.patchValue(this.data.expiration_date ? new Date(this.data.expiration_date) : null)
      this.group.controls.comment.patchValue(this.data.comment)
      this.fields = this.data.fields
    }

    this.group.controls.expDate.valueChanges.subscribe(val => {
      if (this.group.controls.expDate.hasValidator(Validators.required) &&
        this.group.controls.expDate.value < this.group.controls.manufDate.value) {
        this.group.controls.expDate.setErrors({early: "Must be after Manufactured date"})
      }
    })
  }

  typeChange(e: ExpirationTypeEnum) {
    if (e === ExpirationTypeEnum.expirable) {
      this.group.controls.expDate.setValidators(Validators.required)
    } else {
      this.group.controls.expDate.removeValidators(Validators.required)
    }

    this.showExpDate = this.group.controls.expDate.hasValidator(Validators.required)
  }

  save() {
    if (this.group.valid) {
      const inputFields = this.fields.filter(f => f.name && f.value)
      inputFields.forEach(i => {
        if (i.is_date) {
          i.value = formatDate(i.value)
        }
      })

      const item: ProductCreateModel = {
        name: this.group.controls.name.value,
        expiration_type: this.group.controls.expType.value,
        expiration_date: this.group.controls.expDate.value ? formatDate(this.group.controls.expDate.value) : null,
        manufacture_date: formatDate(this.group.controls.manufDate.value),
        comment: this.group.controls.comment.value,
        category_id: 1,
        fields: inputFields
      }

      if (this.id) {
        this.service.updateProduct(this.id, item).subscribe({
          next: () => {
            this.dialogRef.close();
          }
        })
      } else {
        this.service.createProduct(item).subscribe({
          next: () => {
            this.dialogRef.close();
          }
        })
      }
    }
  }
}


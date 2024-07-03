import {Component, OnInit} from '@angular/core';
import {ItemsService} from "./items.service";
import {ProductModel} from "../@models/product.model";
import {MatDialog} from "@angular/material/dialog";
import {ItemFormComponent} from "./item-form/item-form.component";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit{

  data: ProductModel[] = []

  constructor(
    private service: ItemsService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.service.getProducts().subscribe({
      next: data => {
        this.data = data
      }
    })
  }

  showModal() {
    this.dialog.open(ItemFormComponent).afterClosed().subscribe({
      next: () => {
        this.getData()
      }
    })
  }

  edit(id: number) {
    this.service.getProduct(id).subscribe({
      next: data => {
        this.dialog.open(ItemFormComponent, {
          data
        }).afterClosed().subscribe({
          next: () => {
            this.getData()
          }
        })
      }
    })
  }

  delete(id: number) {
    this.service.deleteProduct(id).subscribe({
      next: () => {
      this.getData()
    }
    })
  }
}

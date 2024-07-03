import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {ProductModel} from "../@models/product.model";
import {ProductCreateModel} from "../@models/product-create.model";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  public constructor(private http: HttpClient) {}

  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<any>(environment.api + environment.apiVersion + `products`);
  }

  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get<any>(environment.api + environment.apiVersion + `products/` + id);
  }

  public createProduct(data: ProductCreateModel): Observable<any> {
    return this.http.post<any>(environment.api + environment.apiVersion + `products`, data);
  }

  public updateProduct(id: number, data: ProductCreateModel): Observable<any> {
    return this.http.patch<any>(environment.api + environment.apiVersion + `products/` + id, data);
  }

  public deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(environment.api + environment.apiVersion + `products/` + id);
  }

}

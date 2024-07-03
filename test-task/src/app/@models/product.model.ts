import {CategoryModel} from "./category.model";
import {FieldsModel} from "./fields.model";
import {ExpirationTypeEnum} from "./expirationTypeEnum";

export interface ProductModel {
  id: number;
  category: CategoryModel
  comment: string;
  created_at: string;
  expiration_date: string;
  expiration_type: ExpirationTypeEnum;
  fields: FieldsModel[];
  manufacture_date: string;
  name: string;
  updated_at: string;
}

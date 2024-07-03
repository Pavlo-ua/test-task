import {FieldsModel} from "./fields.model";
import {ExpirationTypeEnum} from "./expirationTypeEnum";

export interface ProductCreateModel {
  category_id: number;
  comment?: string;
  expiration_date: string;
  expiration_type: string;
  fields: FieldsModel[];
  manufacture_date: string;
  name: string;
}

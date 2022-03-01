import { Assignature } from "./assignature.model";

export class User {
  id: number;
  name: string;
  surname: string;
  rolId: string;
  email: string;
  assignatures?: Array<Assignature>;
}

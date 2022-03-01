import { User } from "./user.model";

export class Assignature {
  id: number;
  name: string;
  description: string;
  teachers?: Array<User>;
  students?: Array<User>;
}

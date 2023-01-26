import { Human } from "./Human";

export class Earthman extends Human {
  override fly(): string {
    return 'I can\'t fly';
  }
}
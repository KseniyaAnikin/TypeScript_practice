import { Human } from "./Human";

export class Athlete extends Human {
  override swim(): string {
    return 'I can\'t sweem';
  }
}
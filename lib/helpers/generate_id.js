import sha1 from "./sha1";
import { isString } from "./validate";

export default function generateID(string) {
  if (isString(string) || !string.length) {
    throw new Error("Parâmetro deve ser uma string");
  }

  return sha1(string.toLowerCase());
}

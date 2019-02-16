import sha1 from './sha1';

export default function generateID(string: string): string {
  if (typeof string !== 'string' || !string.length)
    throw 'Parâmetro deve ser uma string';

  return sha1(string.toLowerCase());
}

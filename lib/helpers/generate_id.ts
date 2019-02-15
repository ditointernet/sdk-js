import sha1 from './sha1';

export default function generateID(string: string): string {
  return sha1(string.toLowerCase());
}

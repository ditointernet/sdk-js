/* eslint-disable no-bitwise */
/**
 *
 * Secure Hash Algorithm (SHA1)
 * http://www.webtoolkit.info/
 *
 * */
function SHA1(initialMsg) {
  const rotateLeft = (n, s) => (n << s) | (n >>> (32 - s));

  function convertHex(val) {
    let string = '';

    let v;
    for (let i = 7; i >= 0; i -= 1) {
      v = (val >>> (i * 4)) & 0x0f;
      string += v.toString(16);
    }

    return string;
  }

  function Utf8Encode(initialString) {
    const string = initialString.replace(/\r\n/g, '\n');
    let utftext = '';
    for (let n = 0; n < string.length; n += 1) {
      const c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }
  let blockstart;
  const W = new Array(80);
  let H0 = 0x67452301;
  let H1 = 0xefcdab89;
  let H2 = 0x98badcfe;
  let H3 = 0x10325476;
  let H4 = 0xc3d2e1f0;
  let A;
  let B;
  let C;
  let D;
  let E;
  let temp;
  const msg = Utf8Encode(initialMsg);
  const messageLength = msg.length;
  const wordArray = [];
  for (let i = 0; i < messageLength - 3; i += 4) {
    const j = (msg.charCodeAt(i) << 24)
      | (msg.charCodeAt(i + 1) << 16)
      | (msg.charCodeAt(i + 2) << 8)
      | msg.charCodeAt(i + 3);
    wordArray.push(j);
  }
  let i;
  switch (messageLength % 4) {
    case 0:
      i = 0x080000000;
      break;
    case 1:
      i = (msg.charCodeAt(messageLength - 1) << 24) | 0x0800000;
      break;
    case 2:
      i = (msg.charCodeAt(messageLength - 2) << 24)
        | (msg.charCodeAt(messageLength - 1) << 16)
        | 0x08000;
      break;
    case 3:
      i = (msg.charCodeAt(messageLength - 3) << 24)
        | (msg.charCodeAt(messageLength - 2) << 16)
        | (msg.charCodeAt(messageLength - 1) << 8)
        | 0x80;
      break;
    default:
      break;
  }
  wordArray.push(i);
  while (wordArray.length % 16 !== 14) wordArray.push(0);
  wordArray.push(messageLength >>> 29);
  wordArray.push((messageLength << 3) & 0x0ffffffff);
  for (blockstart = 0; blockstart < wordArray.length; blockstart += 16) {
    for (i = 0; i < 16; i += 1) W[i] = wordArray[blockstart + i];
    for (i = 16; i <= 79; i += 1) {
      W[i] = rotateLeft(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
    }
    A = H0;
    B = H1;
    C = H2;
    D = H3;
    E = H4;
    for (i = 0; i <= 19; i += 1) {
      temp = (rotateLeft(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5a827999)
        & 0x0ffffffff;
      E = D;
      D = C;
      C = rotateLeft(B, 30);
      B = A;
      A = temp;
    }
    for (i = 20; i <= 39; i += 1) {
      temp = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ed9eba1) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotateLeft(B, 30);
      B = A;
      A = temp;
    }
    for (i = 40; i <= 59; i += 1) {
      temp = (rotateLeft(A, 5)
          + ((B & C) | (B & D) | (C & D))
          + E
          + W[i]
          + 0x8f1bbcdc)
        & 0x0ffffffff;
      E = D;
      D = C;
      C = rotateLeft(B, 30);
      B = A;
      A = temp;
    }
    for (i = 60; i <= 79; i += 1) {
      temp = (rotateLeft(A, 5) + (B ^ C ^ D) + E + W[i] + 0xca62c1d6) & 0x0ffffffff;
      E = D;
      D = C;
      C = rotateLeft(B, 30);
      B = A;
      A = temp;
    }
    H0 = (H0 + A) & 0x0ffffffff;
    H1 = (H1 + B) & 0x0ffffffff;
    H2 = (H2 + C) & 0x0ffffffff;
    H3 = (H3 + D) & 0x0ffffffff;
    H4 = (H4 + E) & 0x0ffffffff;
  }
  const result = convertHex(H0)
    + convertHex(H1)
    + convertHex(H2)
    + convertHex(H3)
    + convertHex(H4);
  return result.toLowerCase();
}

export default SHA1;

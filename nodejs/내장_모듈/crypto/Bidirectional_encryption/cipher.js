const crypto = require('crypto');

const cipher = crypto.createCipher('aes-256-cbc','열쇠');
let result = cipher.update('암호화할 문장','utf8','base64');
result += cipher.final('base64');
console.log('암호화:',result);

const deciper = crypto.createDecipher('aes-256-cbc','열쇠');
let result2 = deciper.update(result,'base64','utf8');
result2 += deciper.final('utf8');
console.log('복호화:',result2);
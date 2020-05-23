let hash0 = "A23537MO$1asdj";
let hash1 = "123456789abcdefghijklmnopqrstuvwxyz";
let hash2 = "a1b2c3d4e5f6";
let hash3 = "Adler)123.T";

hash0 = Buffer.from(hash0, 'utf-8').toString('base64');
hash1 = Buffer.from(hash1, 'utf-8').toString('base64');
hash2 = Buffer.from(hash2, 'utf-8').toString('base64');
hash3 = Buffer.from(hash3, 'utf-8').toString('base64');

console.log(hash0 + " " + Buffer.from(hash0, 'base64').toString('utf-8'));
console.log(hash1 + " " + Buffer.from(hash1, 'base64').toString('utf-8'));
console.log(hash2 + " " + Buffer.from(hash2, 'base64').toString('utf-8'));
console.log(hash3 + " " + Buffer.from(hash3, 'base64').toString('utf-8'));

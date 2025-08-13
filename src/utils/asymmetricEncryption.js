const crypto = require('crypto');

// Generate RSA key pair
function generateKeyPair() {
  return crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    },
  });
}

// Encrypt data with public key
function encryptWithPublicKey(publicKey, data) {
  return crypto.publicEncrypt(publicKey, Buffer.from(data)).toString('base64');
}

// Decrypt data with private key
function decryptWithPrivateKey(privateKey, encryptedData) {
  return crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64')).toString();
}

module.exports = {
  generateKeyPair,
  encryptWithPublicKey,
  decryptWithPrivateKey,
};

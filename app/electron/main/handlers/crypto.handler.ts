import crypto from 'crypto';

function encrypt(text: string) {
  const IV = crypto.randomBytes(16); // Initialization vector

  const cipher = crypto.createCipheriv('aes-256-cbc', SECRET_KEY, IV);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: IV.toString('hex'), encryptedData: encrypted.toString('hex') };
}

function decrypt(text: string, iv: string) {
  const ivBuffer = Buffer.from(iv, 'hex');
  const encryptedText = Buffer.from(text, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, ivBuffer);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = { encrypt, decrypt };

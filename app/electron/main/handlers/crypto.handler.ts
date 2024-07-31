import crypto from 'crypto';

export function encrypt(text: string | Buffer, SECRET_KEY: string) {
  const IV = crypto.randomBytes(16); // Initialization vector

  const cipher = crypto.createCipheriv('aes-256-cbc', SECRET_KEY, IV);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: IV, encryptedData: encrypted };
}

export function decrypt(encryptValue: Buffer, IV: Buffer, SECRET_KEY: string) {
  // const encryptedText = Buffer.from(encryptValue, 'hex');
  // const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, IV);
  // let decrypted = decipher.update(encryptedText);
  // decrypted = Buffer.concat([decrypted, decipher.final()]);
  // return decrypted.toString();

  const decipher = crypto.createDecipheriv('aes-256-cbc', SECRET_KEY, IV);
  const decrypted = Buffer.concat([
    decipher.update(encryptValue),
    decipher.final(),
  ]);
  return decrypted;
}

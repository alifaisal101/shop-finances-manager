import crypto from 'crypto';

// Converts text into an encrypted and serialized blob.
export const serialize = (text: string) => {
  const textBuffer = Buffer.from(text, 'utf8'); // Convert string to buffer
  const lengthBuffer = Buffer.alloc(4); // Buffer to store length (4 bytes for a 32-bit integer)

  // Write the length of the text to the length buffer
  lengthBuffer.writeUInt32LE(textBuffer.length, 0);

  // Concatenate length and text buffers
  const lengthTextBuffer = Buffer.concat([lengthBuffer, textBuffer]);
  let a = 'k_Dfpr&wGS%ds]36sS;w=td1zhDW&#p6';
  const { iv, encryptedData } = encrypt(lengthTextBuffer, a);
  a = null;

  return Buffer.concat([iv, encryptedData]);
};

// Decrypts and deserialize a blob
export const deserialize = (serializedBlob: Buffer) => {
  const iv = serializedBlob.subarray(0, 16);
  const encryptedData = serializedBlob.subarray(16);
  let a = 'k_Dfpr&wGS%ds]36sS;w=td1zhDW&#p6';
  const decryptedData = decrypt(encryptedData, iv, a);
  a = null;

  // Extract the length of the text from the first 4 bytes
  const length = decryptedData.readUInt32LE(0);

  // Extract the text buffer based on the length
  const textBuffer = decryptedData.subarray(4, 4 + length);

  return textBuffer.toString('utf8');
};

// Function to decrypt data
function decrypt(encryptedData, iv, secretKey) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
  const decrypted = Buffer.concat([
    decipher.update(encryptedData),
    decipher.final(),
  ]);
  return decrypted;
}

// Function to encrypt data
function encrypt(data, secretKey) {
  const iv = crypto.randomBytes(16); // Initialization vector
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  return { iv, encryptedData: encrypted };
}

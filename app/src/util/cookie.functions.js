export const isCookieExpired = (createdAtString, expiresString) => {
  // Parse createdAt into Date object
  const createdAt = new Date(createdAtString);

  // Parse expires string (e.g., "9h" for 9 hours)
  const expires = expiresString.trim();
  const duration = parseInt(expires); // Extracts the number part
  const unit = expires.slice(-1); // Extracts the unit part ('h' for hours, 'm' for minutes, etc.)

  // Calculate expiry time based on unit
  let expirationTime;
  switch (unit) {
    case 'h':
      expirationTime = createdAt.getTime() + duration * 60 * 60 * 1000;
      break;
    case 'm':
      expirationTime = createdAt.getTime() + duration * 60 * 1000;
      break;
    case 's':
      expirationTime = createdAt.getTime() + duration * 1000;
      break;
    default:
      throw new Error(`Unsupported expires unit: ${unit}`);
  }

  // Check if the cookie has expired
  const currentTime = Date.now();
  return currentTime > expirationTime;
};

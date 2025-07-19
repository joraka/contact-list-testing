/**
 * Generates a random alphanumeric string of given length.
 * @param {number} length - Length of the string to generate.
 * @returns {string} Random string
 */
export function generateRandomString(length = 10) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Generates a random email address using a random string and the gmail.com domain.
 * @returns {string} Randomly generated email address
 */
export function generateEmail() {
  return `${generateRandomString(10)}@gmail.com`;
}

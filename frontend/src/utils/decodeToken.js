export default function decodeToken(token) {
  if (!token) return null;
  const payload = token.split('.')[1];
  const decoded = atob(payload);
  return JSON.parse(decoded);
}
// This function decodes a JWT token and returns the payload as a JavaScript object.
// It splits the token by '.' to get the payload part, decodes it from base64, and parses it as JSON.
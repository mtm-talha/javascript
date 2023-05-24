/*
JWT (JSON Web Token) is a popular method for authentication and authorization in web applications.
It is a compact, URL-safe token format that contains claims (payload) encoded as a JSON object.
The token is digitally signed to verify its integrity and authenticity.

User Authentication:
When a user logs in or provides their credentials, the server verifies the credentials (e.g., username/password) and generates a JWT token.

Token Generation:
The server creates a JWT token, which consists of three parts: header, payload, and signature.

Header: Contains the token type (JWT) and the algorithm used for signing the token (e.g., HMAC, RSA).

Payload: Contains claims or information about the user (e.g., user ID, username, roles, expiration time).

Signature: Created by signing the encoded header, payload, and a secret key using the specified algorithm.

Token Issuance:
The server sends the generated JWT token back to the client (usually in the response body or an HTTP header, such as "Authorization").

Token Storage:
The client (usually a web browser) stores the JWT token, commonly in browser storage (e.g., localStorage, sessionStorage) or cookies.

Subsequent Requests:
The client includes the JWT token in subsequent requests to the server, typically in the "Authorization" header using the "Bearer" scheme (e.g., "Authorization: Bearer <JWT token>").

Token Verification:
Upon receiving a request, the server verifies the authenticity and integrity of the JWT token by verifying the signature using the secret key. If the token is valid, the server extracts the claims from the payload to authenticate and authorize the user.

Authorization and Access Control:
The server checks the claims in the JWT token to determine if the user has the necessary permissions to access the requested resources or perform specific actions.

Token Expiration and Renewal:
JWT tokens can have an expiration time (defined in the payload). If a token expires, the client needs to obtain a new token by going through the authentication process again.

*/
const jwt = require('jsonwebtoken');

// Generate a JWT token
const payload = { userId: 12345, username: 'exampleuser' };
const secretKey = 'your-secret-key';

const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

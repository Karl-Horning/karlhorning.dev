export const jwtScript = String.raw`// Parse the response body to get the access token.
 const response = pm.response.json();

 // Set the access token in the environment variables.
 pm.environment.set('apiKey', \`Bearer $\{response.access_token}\`);`;

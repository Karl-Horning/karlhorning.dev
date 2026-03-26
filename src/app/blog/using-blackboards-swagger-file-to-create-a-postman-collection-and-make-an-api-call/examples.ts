export const jwtScript = String.raw`// Parse the response body to get the access token.
 const response = pm.response.json();

 // Set the access token in the environment variables.
 pm.environment.set('apiKey', \`Bearer $\{response.access_token}\`);`;

export const fourHundredResponse = String.raw`{
  "status": 400,
  "message": ": 1 errors\nField error in object 'usersSearchCriteriaPubV1' on field 'dataSourceId': rejected value [anim nostrud occaecat elit amet]; ...",
  "extraInfo": "..."
}`;

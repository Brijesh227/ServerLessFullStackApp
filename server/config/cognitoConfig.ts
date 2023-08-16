import * as AWS from 'aws-sdk';
import dotenv from "dotenv";
dotenv.config();

// Configure AWS credentials
AWS.config.update({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY_ID
});

// Create a new Amazon Cognito IdentityServiceProvider instance
const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

export default cognitoIdentityServiceProvider;
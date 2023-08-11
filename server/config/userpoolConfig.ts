import {
	CognitoUserPool,
	ICognitoUserPoolData
} from 'amazon-cognito-identity-js';

const poolData: ICognitoUserPoolData = {
	UserPoolId: process.env.USER_POOL_ID ?? 'ap-south-1_g9bfw2X4c',
	ClientId: process.env.CLIENT_ID ?? 'f3756goql6p9pvmj67u05coq7' 
};

const userPool = new CognitoUserPool(poolData);

export default userPool;
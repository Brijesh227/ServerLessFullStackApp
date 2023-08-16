import cognitoIdentityServiceProvider from '../../config/cognitoConfig';
import { SignUpRequest, SignUpResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

const registerUser = (userName: string, password: string): Promise<SignUpResponse | undefined> => {
    const params: SignUpRequest = {
        ClientId: process.env.CLIENT_ID ?? 'f3756goql6p9pvmj67u05coq7',
        Username: userName,
        Password: password
    };

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.signUp(params, function (err, result) {
            if (err) {
                reject(err);
            }
            console.log('registered user data:' + JSON.stringify(result));
            resolve(result);
        });
    })
}

// import {
//     CognitoUserAttribute,
//     CognitoUser
// } from 'amazon-cognito-identity-js';
// import userPool from "../../config/userpoolConfig";

// const registerUser = (userName: string, password: string): Promise<CognitoUser | undefined> => {
//     const attributeList: Array<CognitoUserAttribute> = [];
//     const validationDataList: Array<CognitoUserAttribute> = [];

//     return new Promise((resolve, reject) => {
//         userPool.signUp(userName, password, attributeList, validationDataList, function (err, result) {
//             if (err) {
//                 reject(err);
//             }
//             console.log('registered user data:' + JSON.stringify(result));
//             resolve(result?.user);
//         });
//     })
// }

export default registerUser;
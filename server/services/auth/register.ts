import cognitoIdentityServiceProvider from '../../config/cognitoConfig';
import { SignUpRequest, SignUpResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

const registerUser = (userName: string, password: string): Promise<SignUpResponse> => {
    let params: SignUpRequest;

    if (process.env.CLIENT_ID) {
        params = {
            ClientId: process.env.CLIENT_ID,
            Username: userName,
            Password: password
        };
    }

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

export default registerUser;
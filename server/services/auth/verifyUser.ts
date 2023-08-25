import cognitoIdentityServiceProvider from '../../config/cognitoConfig';
import { ConfirmSignUpRequest, ConfirmSignUpResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

const verifyUser = (code: string, userName: string): Promise<ConfirmSignUpResponse | boolean> => {
    let params: ConfirmSignUpRequest;

    if (process.env.CLIENT_ID) {
        params = {
            ClientId: process.env.CLIENT_ID,
            Username: userName,
            ConfirmationCode: code
        };
    }

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.confirmSignUp(params, function (err, result) {
            if (err) {
                reject(err);
            }
            console.log('verified user result' + JSON.stringify(result));
            resolve(true);
        });
    })
}

export default verifyUser;

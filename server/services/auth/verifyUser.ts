import cognitoIdentityServiceProvider from '../../config/cognitoConfig';
import { ConfirmSignUpRequest, ConfirmSignUpResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider';

const verifyUser = (code: string, userName: string): Promise<ConfirmSignUpResponse | undefined> => {
    const params: ConfirmSignUpRequest = {
        ClientId: process.env.CLIENT_ID ?? 'f3756goql6p9pvmj67u05coq7',
        Username: userName,
        ConfirmationCode: code
    };

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.confirmSignUp(params, function (err, result) {
            if (err) {
                reject(err);
            }
            console.log('verified user result' + JSON.stringify(result));
            resolve(result);
        });
    })
}

export default verifyUser;

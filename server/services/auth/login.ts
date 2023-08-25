import cognitoIdentityServiceProvider from '../../config/cognitoConfig';
import { AdminInitiateAuthRequest, AdminInitiateAuthResponse } from 'aws-sdk/clients/cognitoidentityserviceprovider'

const loginUser = (userName: string, password: string): Promise<AdminInitiateAuthResponse> => {

    const params: AdminInitiateAuthRequest = {
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        ClientId: process.env.CLIENT_ID ?? 'f3756goql6p9pvmj67u05coq7',
        UserPoolId: process.env.USER_POOL_ID ?? 'ap-south-1_g9bfw2X4c',
        AuthParameters: {
            USERNAME: userName,
            PASSWORD: password
        }
    };

    return new Promise((resolve, reject) => {
        cognitoIdentityServiceProvider.adminInitiateAuth(params, (error, data) => {
            if (error) {
                reject(error)
            }
            resolve(data)
        })
    });
}

export default loginUser;
import {
	CognitoUserAttribute,
	CognitoUser,
    ISignUpResult,
} from 'amazon-cognito-identity-js';
import userPool from "../../config/userpoolConfig";

const registerUser = (userName: string, password: string): any => {
    const attributeList: Array<any> | [] = [];
    // attributeList.push(new CognitoUserAttribute({Name:"name",Value:"Prasad Jayashanka"}));
    // attributeList.push(new CognitoUserAttribute({Name:"email",Value:"sampleEmail@gmail.com"}));

    userPool.signUp(userName, password, attributeList, [], function(err, result){
        if (err) {
            throw err;
        }
        console.log('user is ' + result);
        console.log('user name is ' + result?.user.getUsername());
        return result?.user;
    });
}

export default registerUser;
import { authorize } from "react-native-app-auth";
import {encode} from 'js-base64';

async function Auth(){
    const config = {
        redirectUrl: 'redditech://app/landing',
        clientId:'f75y6K6qtq4qvXUhRdDprg',
        clientSecret:'',
        scopes: [
            'account',
            'mysubreddits',
            'read',
            'identity',
            'history',
            'edit',
            'save',
            'submit', 
            'vote',
          ],

        serviceConfiguration: {
            authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize',
            tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
        },
        customHeaders: {
            token: {
                Authorization: 'Basic ' + encode('5VdfVjYj3uaYhbLpVRGwNg:'),
            },
        },
        issuer: 'redditech://app',
    }

    try {
        const result = await authorize(config); 
        return result;
        
    } catch (error) {
        console.log(error)
    }
}

export default Auth;

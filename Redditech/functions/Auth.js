import { authorize } from "react-native-app-auth";
import {encode} from 'js-base64';

async function Auth(){
    const config = {
        redirectUrl: 'redditech://app/home',
        clientId:'S5hA22Qo3Ag2H2o2xqUIXA',
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
            authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
            tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
        },
        customHeaders: {
            token: {
                Authorization: 'Basic ' + encode('S5hA22Qo3Ag2H2o2xqUIXA:'),
            },
        },
        issuer: 'redditech://app',
    }

    try {
        const result = await authorize(config); 
        return result;
        
    } catch (error) {
    }
}

export default Auth;

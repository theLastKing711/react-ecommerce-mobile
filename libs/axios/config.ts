import axios from "axios";
import { BASE_URI } from "../../constants";
import * as SecureStore from 'expo-secure-store'
import { router } from 'expo-router';

export const apiClient = axios.create({
    baseURL: BASE_URI,
    // withCredentials: true,
    timeout: 6000,
    // withXSRFToken: true,
    // xsrfCookieName: "XSRF-TOKEN",
    // xsrfHeaderName: "X-XSRF-TOKEN",
});
apiClient
    .interceptors
    .request
    .use(async (config) => {
        const access_token =  await SecureStore.getItem('access_token');
        
        if(! access_token)
        {
            router.navigate('/auth');//after if code continue to run so we must return
            return;
        }

        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${access_token}`
            }
        };
    
    }
);


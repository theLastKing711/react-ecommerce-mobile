import { router } from 'expo-router';
import { USER_URI } from "@/constants";
import { apiClient } from "@/libs/axios/config";
import { ILogin, ILoginResponse } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import * as SecureStore from 'expo-secure-store'

export const useLogin = () => {

    const mutation = useMutation({
        mutationFn: loginApi
    })

    return mutation;
    
}


export const loginApi = async ({name, password}) => {

    // const result = await apiClient.get("sanctum/csrf-cookie");


    const LOGIN_END_POINT = USER_URI + "/auth/login";

    try {
        const data = await apiClient.post<ILogin, AxiosResponse<ILoginResponse>>(LOGIN_END_POINT, {
            dial_code: "963",
            number: "0968259851",
            code: "123456"
          })

          console.log("token", data.data.token);

          await SecureStore.setItemAsync('access_token', data.data.token).then(
            () => {
              router.navigate('/categories')
            },
          )

    }
    catch(error){

        // console.log("erorr", error);

        // alert("hello world");

        const axiosError = error as AxiosError;
        
        console.log("error", axiosError.toJSON());
        return {
            success: false,
            error: {
              message: "خطأ في عملية تسجيل الدخول",
              name: "اسم المستخدم أو كلمة المرور غير صحيحة",
            },
        };
    }

    return {
        success: true,
        redirectTo: "/admin",
    };
}
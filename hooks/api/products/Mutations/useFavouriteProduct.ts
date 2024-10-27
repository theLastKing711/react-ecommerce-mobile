// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native

import { queryClient } from "@/app/_layout";
import {  PRODUCT_URI } from "@/constants";
import { apiClient } from "@/libs/axios/config";
import { useMutation } from "@tanstack/react-query";



// but can be achieved using a styling library like Nativewind.
export function useFavouriteProduct() {
    
    const mutation  = useMutation({
        mutationFn: favouriteProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['home', 'favouriteProducts']})
        }
      });
    
    return {
        mutation: mutation.mutate,
    }
    
}
  
async function favouriteProductApi(id: number) {
    try {

        const favourite_product_url = `${PRODUCT_URI}/favourite/${id}`;  
        
        
        const response = await apiClient
                                .post<{id: number}>
                                (favourite_product_url);

        return {
            data: response.data,
            total: 10
        }
        
    }
    catch(err) {
        
    //   const httpError: HttpError = {
    //     errors: {
    //       data: errorsList
    //     },
    //     message: "حدث خطأ",
    //     statusCode: 422,
    //   };
        
    //   console.log("httpError", httpError);

        return Promise.reject(false);
    }

}
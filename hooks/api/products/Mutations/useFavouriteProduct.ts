// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native

import { queryClient } from "@/app/_layout";
import { CATEGORY_URI, HOME_URI, PRODUCT_URI, USER_URI } from "@/constants";
import { apiClient } from "@/libs/axios/config";
import { CursorPaginatedParentCategorisList } from "@/types/categories";
import { IHomeCategoryList, IHomeResponse } from "@/types/home";
import { useMutation, useQuery } from "@tanstack/react-query";



// but can be achieved using a styling library like Nativewind.
export function useFavouriteProduct() {
    
    const mutation  = useMutation({
        mutationFn: favouriteProductApi,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['home']})
        }
      });
    
    return {
        mutation: mutation.mutate,
        test: mutation.isSuccess
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
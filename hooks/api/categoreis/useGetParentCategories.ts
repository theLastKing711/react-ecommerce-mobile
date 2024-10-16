// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native

import { CATEGORY_URI, USER_URI } from "@/constants";
import { apiClient } from "@/libs/axios/config";
import { CursorPaginatedParentCategorisList } from "@/types/categories";
import { useQuery } from "@tanstack/react-query";

// but can be achieved using a styling library like Nativewind.
export function useGetParentCategories() {
    
    const info = useQuery({queryKey: ['categories'], queryFn: getCategoriesApi})
    


    return {
        data: info.data,
        isLoading: info.isLoading,
    }
    
}
  

const getUrl = CATEGORY_URI;

async function getCategoriesApi() {
    try {

        const parent_categories_url = `${CATEGORY_URI}/parent-list`;  
        
        const response = await apiClient
                                .get<CursorPaginatedParentCategorisList>
                                (parent_categories_url);

        console.log("response", response);

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
// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native

import {FAVOURITE_PRODUCTS_URL} from "@/constants";
import { apiClient } from "@/libs/axios/config";
import { CursorPaginatedFavouriteProductList } from "@/types/products";
import { InifinteQueryPageParam } from "@/types/shared";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

// but can be achieved using a styling library like Nativewind.
export function useGetFavouriteProducts() {

    
    const {data, isLoading, hasNextPage, fetchNextPage} = useInfiniteQuery(
        {
            queryKey: ['favouriteProducts'],
            queryFn :({pageParam}) => getFavouriteProductsApi({pageParam}),
            getNextPageParam: (lastPage, pages) => {
                return lastPage.next_cursor || undefined;
            },
            //queryFn({paramPage}) will be of this type (number | null)
            initialPageParam: null as InifinteQueryPageParam['pageParam']
        },
    );

    return {
        data: data,
        isLoading: isLoading,
        hasNextPage,
        fetchNextPage,
    }
    
}
  
export async function getFavouriteProductsApi({pageParam}: InifinteQueryPageParam) {


    const queryString = pageParam ? `?cursor=${pageParam}&` : '';

    const questionMarkOrEmpty = queryString ? '?' : '';
    
    try {
        const getFavouriteProductsUrl = `${FAVOURITE_PRODUCTS_URL}${questionMarkOrEmpty}${queryString}`;

        
        const response = await apiClient
                                .get<CursorPaginatedFavouriteProductList>
                                (getFavouriteProductsUrl);


        return {
            data: response.data.data,
            next_cursor: response.data.next_cursor,
            total: 10
        }
    }
    catch(err) {

        console.log("error", err);
        
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
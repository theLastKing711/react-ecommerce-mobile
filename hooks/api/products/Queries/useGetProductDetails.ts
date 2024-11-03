
import {PRODUCT_URI} from "@/constants";
import { apiClient } from "@/libs/axios/config";
import {  ProductDetails } from "@/types/products";
import {  useQuery } from "@tanstack/react-query";

// but can be achieved using a styling library like Nativewind.
export function useGetProductDetails(id: string) {

    
   const {data, isLoading} = useQuery(
        {
            queryKey: ['productDetails'],
            queryFn:() => getProductDetailsApi(id)
        }
    );
    
    return {
        data,
        isLoading
    }
    
}
  
export async function getProductDetailsApi(id: string) {
    
    try {
        const getProductDetailsUrl = `${PRODUCT_URI}/${id}`;
        
        const response = await apiClient
                                .get<ProductDetails>
                                (getProductDetailsUrl);

        return {
            data: response.data,
        }
    }
    catch(err) {

        return Promise.reject(false);
    }

}
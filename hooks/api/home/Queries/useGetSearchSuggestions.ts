
// NOTE: The default React Native styling doesn't support server rendering.
// Server rendered styles should not change between the first render of the HTML
// and the first render on the client. Typically, web developers will use CSS media queries
// to render different styles on the client and server, these aren't directly supported in React Native

import { HOME_URI } from "@/constants";
import { apiClient } from "@/libs/axios/config";
import { CursorPaginatedSearchSuggestionResultList, SearchSuggestionResultList } from "@/types/shared";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { useState } from "react";

// but can be achieved using a styling library like Nativewind.
export function useGetSearchSuggestions() {

    
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    
    const onSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const onSearchBlur = () => {
        setIsSearchFocused(false);
    };

    const { searchQueryParam = '', nextCursorParam = '' } =
     useLocalSearchParams<{searchQueryParam: string, nextCursorParam: string}>();

    const onSearchValueUpdate = (value: string) => {
        router.setParams({searchQueryParam:  value, next_cursor: ''});
    }

    const onCursorPaginationUpdate = (next_cursor: string) => {
        router.setParams({next_cursor})
    }

    // value get changed after 1.5 second if user stopped changing query param(typing here)
    // which trigger the useQuery re-run with new value
    const debouncedSearchTerm = useDebounce(searchQueryParam, 1500);

    const debouncedPaginationCursor = useDebounce(nextCursorParam, 1000);

    const shouldSearch = !!debouncedSearchTerm || !!debouncedPaginationCursor;
    
    const {data, isLoading, hasNextPage, fetchNextPage} = useInfiniteQuery(
        {
            //if one of debounced parameters change,then re-run the query with updated values
            //(enabled must be true also => one of the values in not empty)
            queryKey: ['searchSuggestions', debouncedSearchTerm, debouncedPaginationCursor],
            queryFn :({pageParam = null}) => getSearchSuggestionsApi({pageParam, search: debouncedSearchTerm}),
            enabled: shouldSearch,
            getNextPageParam: (lastPage, pages) => {
                return lastPage.next_cursor || undefined;
            },
            initialPageParam: undefined,
        },
    );

    return {
        data: data,
        isLoading: isLoading,
        hasNextPage,
        searchQueryParam,
        nextCursorParam,
        isSearchFocused,
        fetchNextPage,
        onSearchFocus,
        onSearchBlur,
        onSearchValueUpdate,
        onCursorPaginationUpdate
    }
    
}
  
async function getSearchSuggestionsApi({pageParam = null, search = ''}) {
    try {
        
        const searchQueryString = search ? `search=${search}&` : '';

        const nextCursorQuerystring = pageParam ? `cursor=${pageParam}&` : '';

        const questionMarkOrEmpty = (searchQueryString || nextCursorQuerystring) ? '?' : '';

        const queryString = `${questionMarkOrEmpty}${searchQueryString}${nextCursorQuerystring}`;

        const search_url = `${HOME_URI}/search-suggestion-list${queryString}`;
        
        const response = await apiClient
                                .get<CursorPaginatedSearchSuggestionResultList>
                                (search_url);



        return {
            data: response.data.data,
            next_cursor: response.data.next_cursor,
            total: 10
        }
        
    }
    catch(err) {
        return Promise.reject(false);
    }

}
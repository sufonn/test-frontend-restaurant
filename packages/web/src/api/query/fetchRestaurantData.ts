import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../apiService';


export const FETCH_RESTAURANT_DATA = 'getReviewSidebar'



export default function useFetchRestaurantData(queryKey: string) {
    async function fetchRestaurantData() {
        const response = await fetchData('/api/restaurant')

        if (response.code !== 200) {
            throw new Error("Error while fetching restaurant")
        }
        return response.data 

    }

    const {data: restaurantData, isLoading: isFetchingRestaurantData} = useQuery({
        queryKey: [queryKey],
        queryFn: fetchRestaurantData,
        retry: false
    })

    return { restaurantData, isFetchingRestaurantData }
}


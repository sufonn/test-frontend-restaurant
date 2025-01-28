import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../apiService';


export const FETCH_ALL_RESTAURANT_DATA = 'getAllRestaurantData'
export const FETCH_RESTAURANT_DATA = 'getRestaurantData'

export function useFetchRestaurantData(queryKey: string) {
    async function fetchRestaurantData() {
        const response: RestaurantDataProps[] = await fetchData('/api/restaurant')

        return response 
    }

    const {data: restaurantData, isLoading: isFetchingRestaurantData} = useQuery({
        queryKey: [queryKey],
        queryFn: fetchRestaurantData,
        retry: false
    })

    return { restaurantData, isFetchingRestaurantData }
}

export function useFetchRestaurantById(queryKey: string, restId: number) {
    async function fetchRestaurantDataById() {
        const response: RestaurantDataProps = await fetchData(`/api/restaurant/${restId}`)

        return response 
    }

    const {data: restaurantDataById, isLoading: isFetchingRestaurantById} = useQuery({
        queryKey: [queryKey, restId],
        queryFn: fetchRestaurantDataById,
        enabled: !!restId,
        retry: false
    })

    return { restaurantDataById, isFetchingRestaurantById }
}

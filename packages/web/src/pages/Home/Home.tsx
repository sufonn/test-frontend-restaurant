import {
  FETCH_ALL_RESTAURANT_DATA,
  useFetchRestaurantData,
} from "../../api/query/fetchRestaurantData";
import { MagnifyingGlass } from "react-loader-spinner";
import RestaurantCard from "../../components/molecules/Card/RestaurantCard";

const Home = () => {
  const { restaurantData, isFetchingRestaurantData } = useFetchRestaurantData(
    FETCH_ALL_RESTAURANT_DATA
  );

  return isFetchingRestaurantData ? (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{}}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  ) : (
    <RestaurantCard data={restaurantData ?? []} />
  );
};

export default Home;

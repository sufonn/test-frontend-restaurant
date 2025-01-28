import { useParams } from "react-router-dom";
import {
  FETCH_RESTAURANT_DATA,
  useFetchRestaurantById,
} from "../../api/query/fetchRestaurantData";
import { MagnifyingGlass } from "react-loader-spinner";
import RestaurantCard from "../../components/molecules/Card/RestaurantCard";

const RestaurantPage = () => {
  const param = useParams();
  const { restaurantDataById, isFetchingRestaurantById } =
    useFetchRestaurantById(
      FETCH_RESTAURANT_DATA,
      parseInt(param.restaurantId!)
    );

  console.log(restaurantDataById);

  return isFetchingRestaurantById ? (
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
    // <RestaurantCard data={  []} />
    <div></div>
  );
};

export default RestaurantPage;

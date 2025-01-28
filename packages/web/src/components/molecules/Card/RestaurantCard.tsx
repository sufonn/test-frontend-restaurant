import { useEffect } from "react";
import Banner from "../../atoms/Image/Banner";
import { useNavigate } from "react-router-dom";

interface RestaurantCardProps {
  data: RestaurantDataProps[];
}

const RestaurantCard = ({ data }: RestaurantCardProps) => {
  const currDate = new Date();

  const navigate = useNavigate();
  const viewMenu = (id: number) => {
    navigate(`/restaurant/${id}`);
  };

  useEffect(() => {
    if (data.length == 0) return;
  }, [data]);

  return (
    <div className="restaurant">
      {data.length === 0 ? (
        <p>No data</p>
      ) : (
        data.map((d) => {
          return (
            <div className="restaurant-card" onClick={() => viewMenu(d.id)}>
              <Banner src={d.coverImage} altText={d.name} />
              <div className="restaurant-title">
                <h2>{d.name}</h2>
                <div className="badge">
                  <span>เปิด</span>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default RestaurantCard;

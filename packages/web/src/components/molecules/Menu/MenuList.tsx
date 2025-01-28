import Thumbnail from "../../atoms/Image/Thumbnail";

interface MenuListProps {
  title: string;
  thumbnail: string;
  price: number;
  discount: number;
}

const MenuList = ({ title, thumbnail, price, discount }: MenuListProps) => {
  return (
    <div className="">
      <Thumbnail src="" altText="" />
    </div>
  );
};

export default MenuList;

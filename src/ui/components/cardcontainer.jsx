import Card from "./menucart";
import { useSelector } from "react-redux";

export default function Cardcontainer() {
  const menudata = useSelector((state) => state.card.items);

  return (
    <div className="px-[30px] place-items-center py-[20px] min-h-screen bg-[#eeeeee] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px]">
      {menudata.map((item) => {
        return (
          <Card
            key={item.id}
            id={item.id}
            name={item.label}
            price={item.price}
            image={item.img}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

import { Card, List } from "@material-tailwind/react";
import Shopcartitem from "./shopcartitem";
import { useSelector } from "react-redux";

export default function Shopcartcontainer() {
  const cart = useSelector((state) => state.card.cards);
  return (
    <Card className="w-full">
      <List>
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-gray-500">
              No Items in Cart
            </h1>
            <p className="text-gray-500">Add items to cart</p>
          </div>
        ) : (
          cart.map((item) => {
            return (
              <Shopcartitem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.totalPrice}
                image={item.img}
                description={item.description}
                quantity={item.quantity}
              />
            );
          })
        )}
      </List>
    </Card>
  );
}

import { Button, Typography } from "@material-tailwind/react";
import Shopcartcontainer from "../ui/components/shopcartcontainer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { complete } from "../redux/features/card/cartslice";

export default function Card() {
  const quantity = useSelector((state) => state.card.totalQuantity);
  const cart = useSelector((state) => state.card.cards);
  const TotalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const dispatch = useDispatch();

  return (
    <div className="w-full p-[30px]">
      <Shopcartcontainer />
      <Typography variant="h6" color="blue-gray" className="mt-[30px]">
        total price: {TotalPrice}, items in cart: {quantity}
      </Typography>
      <Button
        className="mt-[30px]"
        fullWidth={true}
        onClick={() => {
          dispatch(complete());
        }}
      >
        Complete
      </Button>
    </div>
  );
}

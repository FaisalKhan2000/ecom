import { useState } from "react";
import { Heart } from "lucide-react";
import { BtnSecondary } from "./btn";

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`h-[350px] w-full relative overflow-hidden ${
        hover ? "bg-black" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={`absolute w-full h-full object-cover transition-all duration-300 ease-in-out ${
          hover ? "opacity-50" : "opacity-100"
        }`}
        src="https://deothemes.com/envato/zenna/html/img/shop/shop_item_1.jpg"
        alt="Product"
      />
      {hover && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 text-white">
          <Heart size={15} className="absolute cursor-pointer right-2 top-2" />
          <p className="text-sm capitalize">women</p>
          <h4 className="text-xl font-semibold capitalize">Drawstring dress</h4>
          <p className="text-sm capitalize">$399.99</p>
          <BtnSecondary className="font-montserrat">quickview</BtnSecondary>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

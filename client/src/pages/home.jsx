import { useState } from "react";
import { BtnSecondary, BtnWhite } from "../components/btn";
import CategoryCard from "../components/category-card";

import ProductCard from "../components/product-card";

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <section className="bg-center bg-no-repeat bg-cover bg-hero-image1">
        {/* hero section */}

        <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-5 ">
          <h2 className="font-semibold text-white capitalize text-7xl font-montserrat">
            exclusive products
          </h2>
          <p className="text-[1.2rem] text-white capitalize">
            get awesome items only in zenna online shop
          </p>
          <div className="flex gap-3">
            <BtnSecondary>buy it now</BtnSecondary>
            <BtnWhite>learn more</BtnWhite>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full gap-10 px-4 mx-auto my-10 sm:px-6 lg:px-8 max-w-7xl md:flex-row row">
        <CategoryCard className="relative cursor-pointer">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-125"
            src="https://deothemes.com/envato/zenna/html/img/shop/collection_1.jpg"
            alt="for her"
          />
          <h2 className="z-20 text-2xl font-bold text-white uppercase ">
            for her
          </h2>
          <p className="z-20 text-xl text-white capitalize">
            Best Selling Deals
          </p>
        </CategoryCard>
        <CategoryCard className="relative cursor-pointer">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-125"
            src="https://deothemes.com/envato/zenna/html/img/shop/collection_2.jpg"
            alt="for her"
          />
          <h2 className="z-20 text-2xl font-bold text-white uppercase ">
            accessories
          </h2>
          <p className="z-20 text-xl text-white capitalize">hot trends</p>
        </CategoryCard>
        <CategoryCard className="relative cursor-pointer">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-125"
            src="https://deothemes.com/envato/zenna/html/img/shop/collection_3.jpg"
            alt="for her"
          />
          <h2 className="z-20 text-2xl font-bold text-white uppercase ">
            for him
          </h2>
          <p className="z-20 text-xl text-white capitalize">new collection</p>
        </CategoryCard>
      </section>

      <section className="grid w-full grid-cols-4 gap-5 px-4 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8 md:flex-row">
        {/* <div
          className={`h-[350px] w-[250px]  relative overflow-hidden ${
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
              <Heart
                // stroke="red"
                // fill="red"
                size={15}
                className="absolute cursor-pointer right-2 top-2"
              />
              <p className="text-sm capitalize">women</p>
              <h4 className="text-xl font-semibold capitalize ">
                Drawstring dress
              </h4>
              <p className="text-sm capitalize">$399.99</p>
              <BtnSecondary className="font-montserrat">quickview</BtnSecondary>
            </div>
          )}
        </div> */}

        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
        <ProductCard hover={hover} setHover={setHover} />
      </section>
    </>
  );
};
export default Home;

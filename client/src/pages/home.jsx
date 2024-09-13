import { useState } from "react";
import { BtnSecondary, BtnWhite } from "../components/btn";
import CategoryCard from "../components/category-card";

import ProductCard from "../components/product-card";

const Home = () => {
  return (
    <>
      {/* hero */}
      <section className="bg-center bg-no-repeat bg-cover bg-hero-image1">
        {/* hero section */}

        <div className="flex flex-col items-center justify-center w-screen min-h-screen gap-5 ">
          <h2 className="px-2 text-4xl font-semibold text-center text-white capitalize text: md:text-6xl lg:text-7xl font-montserrat">
            exclusive products
          </h2>
          <p className="text-[1.2rem] text-white capitalize px-2 text-center">
            get awesome items only in zenna online shop
          </p>
          <div className="flex gap-3">
            <BtnSecondary>buy it now</BtnSecondary>
            <BtnWhite>learn more</BtnWhite>
          </div>
        </div>
      </section>

      {/* category */}
      <section className="flex flex-col items-center justify-center w-full gap-5 px-4 mx-auto my-10 sm:px-6 lg:px-8 max-w-7xl md:flex-row row">
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

      {/* products */}

      <section className="grid grid-cols-2 gap-5 px-4 mx-auto my-10 md:grid-cols-3 lg:grid-cols-4 max-w-7xl sm:px-6 lg:px-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
      {/* <section className="flex flex-wrap justify-center gap-5 px-4 mx-auto my-10 max-w-7xl sm:px-6 lg:px-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <ProductCard />
        </div>
      </section> */}
    </>
  );
};
export default Home;

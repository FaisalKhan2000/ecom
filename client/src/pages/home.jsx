import { useState } from "react";
import { BtnSecondary, BtnWhite } from "../components/btn";
import CategoryCard from "../components/category-card";

import ProductCard from "../components/product-card";
import ClientCarousel from "../components/client-carousel";

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

      <p className="text-center">Hot items of this year</p>
      <h2 className="text-xl font-semibold text-center text-black underline uppercase font-montserrat decoration-yellow decoration-2 underline-offset-8">
        Trendy Products
      </h2>

      <section className="grid grid-cols-2 gap-5 px-4 mx-auto my-10 md:grid-cols-3 lg:grid-cols-4 max-w-7xl sm:px-6 lg:px-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>

      {/* carousel */}
      <ClientCarousel />
    </>
  );
};
export default Home;

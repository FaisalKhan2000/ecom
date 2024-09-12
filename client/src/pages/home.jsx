import { BtnSecondary, BtnWhite } from "../components/btn";
import CategoryCard from "../components/category-card";

const Home = () => {
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

      <section className="container flex items-center justify-center w-full gap-10 mx-auto my-10 row">
        <CategoryCard className="relative cursor-pointer">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-110"
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
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-110"
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
            className="absolute top-0 left-0 object-cover w-full h-full transition-transform duration-500 hover:scale-110"
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
      </section>
    </>
  );
};
export default Home;

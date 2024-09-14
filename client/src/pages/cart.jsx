import React from "react";

const Cart = () => {
  return (
    <>
      <section className="page-title text-center bg-gradient">
        <div className="w-100">
          <div className="title-holder py-14 mb-8 bg-gray-100">
            <h1 className="uppercase text-3xl font-semibold text-black">
              Shopping Cart
            </h1>
            <ol className="flex justify-center gap-4 pt-3">
              <li>
                <a href="index.html">Home</a>
              </li>
              /
              <li>
                <a href="shop.html">Shop</a>
              </li>
              /<li className="text-black">Cart</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="shopping-cart">
        <div className="container  mx-auto">
          <div className="container px-4 py-8">
            <div className="w-full">
            <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-3 px-6 border-b text-left">Product</th>
            <th className="py-3 px-6 border-b text-left">Description</th>
            <th className="py-3 px-6 border-b text-right">Price</th>
            <th className="py-3 px-6 border-b text-center">Quantity</th>
            <th className="py-3 px-6 border-b text-right">Total</th>
            <th className="py-3 px-6 border-b text-center">Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-4 px-6 w-32">
              <a href="#">
                <img
                  src="https://deothemes.com/envato/zenna/html/img/shop/shop_item_3.jpg"
                  alt="Fashion Shorts"
                  className="w-full h-auto"
                />
              </a>
            </td>
            <td className="py-4 px-6">
              <a href="#" className="font-semibold text-gray-800">
                Fashion Shorts
              </a>
              <ul className="mt-1 text-sm text-gray-600">
                <li>Size: XL</li>
                <li>Color: White</li>
              </ul>
            </td>
            <td className="py-4 px-6 text-right">$1250.00</td>
            <td className="py-4 px-6 text-center">
              <div className="flex items-center justify-center">
                <input
                  type="text"
                  min="1"
                  value="1"
                  className="w-11 h-14 text-center border border-gray-300"
                />
               <div className="mx-0 flex flex-col">
               <button className="bg-gray-200 text-gray-700 px-2 py-1 hover:bg-gray-300">
                  +
                </button>
                <button className="bg-gray-200 text-gray-700 px-2 py-1 hover:bg-gray-300">
                  -
                </button>
               </div>
              </div>
            </td>
            <td className="py-4 px-6 text-right">$1250.00</td>
            <td className="py-4 px-6 text-center">
              <button
                className="text-red-500 hover:text-red-700 text-lg"
                title="Remove this item"
              >
                ×
              </button>
            </td>
          </tr>
          <tr>
            <td className="py-4 px-6 w-32">
              <a href="#">
                <img
                  src="https://deothemes.com/envato/zenna/html/img/shop/shop_item_7.jpg"
                  alt="Business Suit"
                  className="w-full h-auto"
                />
              </a>
            </td>
            <td className="py-4 px-6">
              <a href="#" className="font-semibold text-gray-800">
                Business Suit
              </a>
              <ul className="mt-1 text-sm text-gray-600">
                <li>Size: L</li>
                <li>Color: Black</li>
              </ul>
            </td>
            <td className="py-4 px-6 text-right">$240.00</td>
            <td className="py-4 px-6 text-center">
            <div className="flex items-center justify-center">
                <input
                  type="text"
                  min="1"
                  value="1"
                  className="w-11 h-14 text-center border border-gray-300"
                />
               <div className="mx-0 flex flex-col">
               <button className="bg-gray-200 text-gray-700 px-2 py-1 hover:bg-gray-300">
                  +
                </button>
                <button className="bg-gray-200 text-gray-700 px-2 py-1 hover:bg-gray-300">
                  -
                </button>
               </div>
              </div>
            </td>
            <td className="py-4 px-6 text-right">$240.00</td>
            <td className="py-4 px-6 text-center">
              <button
                className="text-red-500 hover:text-red-700 text-lg"
                title="Remove this item"
              >
                ×
              </button>
            </td>
          </tr>
        </tbody>
      </table>

              <div className="flex flex-wrap mt-8">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 pr-4">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="border border-gray-300 px-4 py-2  w-full"
                      placeholder="Coupon code"
                    />
                    <button className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col md:flex-row items-center md:justify-end space-y-4 md:space-y-0 md:space-x-4">
                  <button className="bg-gray-800 text-white px-6 py-2  hover:bg-gray-700">
                    Update Cart
                  </button>
                  <a
                    href="checkout.html"
                    className="bg-blue-500 text-white px-6 py-2  hover:bg-blue-600"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        
        {/* Shipping Calculator Section */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <div className="bg-white shadow-md  p-6">
            <h2 className="text-2xl font-semibold mb-4">Calculate Shipping</h2>
            <div className="mb-4">
              <label htmlFor="calc_shipping_country" className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <select
                name="calc_shipping_country"
                id="calc_shipping_country"
                className="block w-full border border-gray-300  py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option>Select a country…</option>
                {/* Add other options here */}
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                {/* Add remaining options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                State / County
              </label>
              <input
                type="text"
                id="state"
                className="block w-full border border-gray-300  py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="State / County"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                Postcode
              </label>
              <input
                type="text"
                id="postcode"
                className="block w-full border border-gray-300  py-2 px-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Postcode"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2  hover:bg-blue-600">
              Update Totals
            </button>
          </div>
        </div>
        
        {/* Cart Totals Section */}
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white shadow-md  p-6">
            <h2 className="text-2xl font-semibold mb-4">Cart Totals</h2>
            <table className="w-full text-left border-separate border-spacing-4">
              <tbody>
                <tr>
                  <th className="text-gray-700">Cart Subtotal</th>
                  <td className="text-gray-900">$1490.00</td>
                </tr>
                <tr>
                  <th className="text-gray-700">Shipping</th>
                  <td className="text-gray-900">Free Shipping</td>
                </tr>
                <tr>
                  <th className="text-gray-700">Order Total</th>
                  <td className="text-gray-900 font-semibold">$1490.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

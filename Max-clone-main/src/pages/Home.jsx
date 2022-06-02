import style from "styled-components";
import React from "react";

const Banner = style.div`
  background-color: #303ab2;
  height: 43px;
  text-align: center;
  padding-top: 8px;
  color: #fff;
`;

const Img = style.img`
  width: 100%;
`;
const Home = () => {
  return (
    <>
      <Banner>
        <p>
          Buy 3 @ ₹499/699/999/1499 + Free Shipping on orders above JUST ₹499.
          &#62;{" "}
        </p>
      </Banner>
      <section style={{ width: "70%", margin: "20px auto" }}>
        <div
          id="carouselExampleControls"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner5-desktop-WMCommon-29APR2022.gif"
                className="block w-full"
                alt="sale banner"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner2-desktop-Women-28APR2022.jpg"
                className="block w-full"
                alt="party wear"
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/MAX-Banner4-desktop-Women-28APR2022.jpg"
                className="block w-full"
                alt="Indian wear"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="border-t border-gray-200 mt-4 pt-20 mb-10">
          <Img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock16One-Common-27APR2022.jpg"
            alt="sale content"
          />
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Back To Work</p>
          <Img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock7-oneBythree-A-Women-C18APRIL2022.jpg"
            alt="product"
          />
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Shop Plus Size</p>
          <div className="flex">
            <div className="px-2">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-1-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
            </div>
            <div className="px-2">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-2-Desktop-Women-C17APRIL2022.jpg"
                alt="2"
              />
            </div>
            <div className="px-2">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-3-Desktop-Womenn-C17APRIL2022.jpg"
                alt="3"
              />
            </div>
            <div className="px-2">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-4-Desktop-Women-26April2022.jpg"
                alt="4"
              />
            </div>
            <div className="px-2">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-5-Desktop-Women-26April2022.jpg"
                alt="5"
              />
            </div>
            <div className="px-2">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-A-6-Desktop-Women-C17APRIL2022.jpg"
                alt="6"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-16 pb-10">
          <Img
            src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock15One-Women-27April2022.jpg"
            alt="innerwear"
          />
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Shop By Category</p>
          <div className="flex">
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-1-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
              <p className="text-center pt-3">TopWear</p>
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-2-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
              <p className="text-center pt-3">Dresses</p>
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-3-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
              <p className="text-center pt-3">BottomWear</p>
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-4-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
              <p className="text-center pt-3">Indian Wear</p>
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-5-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
              <p className="text-center pt-3">Activewear</p>
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/PC-B-6-Desktop-Women-C17APRIL2022.jpg"
                alt="1"
              />
              <p className="text-center pt-3">Footwear</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Style Highlight</p>
          <div>
            <Img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-Women-21April2022.gif"
              alt="go sparkels"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Trending Stores</p>
          <div className="flex">
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-Women-modularblock8-oneBythree-A-Women-25April2022.jpg"
                alt="1"
              />
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-B-Women-25April2022.jpg"
                alt="2"
              />
            </div>
            <div className="px-3">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-C-Women-25April2022.jpg"
                alt="3"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Budget Zone</p>
          <div className="flex">
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19One-Women-22April2022.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Two-Women-22April2022.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock19Three-Women-22April2022.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Youth Store</p>
          <div>
            <Img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock-oneBytwo1A-Women-25April2022.jpg"
              alt="go sparkels"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Summer Trends</p>
          <div className="flex justify-between">
            <div className="pr-5">
              <img
                src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-10modularblock-oneBythree-A-Women-01APR2022A.jpg"
                alt="1"
              />
            </div>
            <div>
              <img
                src="https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-10modularblock-oneBythree-B-Women-01APR2022.jpg"
                alt="2"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-20 pb-10">
          <div>
            <Img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-9modularblock-oneBythree-A-Women-01APR2022.jpg"
              alt="go sparkels"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Gifting Zone</p>
          <div>
            <Img
              src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/desktop-modularblock14One-Women-26Oct2021.jpg"
              alt="gift cards"
            />
          </div>
        </div>

        <div className="border-t border-gray-200 pb-10">
          <p className="text-4xl pt-12 pb-5">Connect With Us</p>
          <div>
            <Img
              src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedAD8AF927.lmsin.net/MAX-Friday/MAX2.O/desktop-department-modularblock8-oneBythree-A-Women-21Oct2020.jpg"
              alt="gift cards"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

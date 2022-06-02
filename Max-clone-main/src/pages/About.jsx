import React from "react";
import AboutCard from "../components/UI/AboutCard";
import style from "styled-components"

const Card = style.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  width: 70%;
  margin: 0 auto 70px;
`

const aboutCardData = [
  {
    url: "https://origin.maxfashion.in/sites/default/files/customer.png",
    alt: "logo1",
    num: "40",
    unit: "million +",
    text: "products for women, men and kids.",
  },
  {
    url: "https://cdd72c8b8a55fc5d1857-2b8f511b412f8d2bfde37b6dde2e2425.ssl.cf3.rackcdn.com/Common-Images/Space.svg",
    alt: "logo2",
    num: "1.7",
    unit: "million + sq.ft",
    text: "of retail space dedicated to value fashion.",
  },
  {
    url: "https://cdd72c8b8a55fc5d1857-2b8f511b412f8d2bfde37b6dde2e2425.ssl.cf3.rackcdn.com/Common-Images/Stores.svg",
    alt: "logo3",
    num: "160+",
    unit: "Stores",
    text: "spread across over 60 cities in India.",
  },
  {
    url: "https://cdd72c8b8a55fc5d1857-2b8f511b412f8d2bfde37b6dde2e2425.ssl.cf3.rackcdn.com/Common-Images/Employee.svg",
    alt: "logo4",
    num: "5,500+",
    unit: "employees",
    text: "helping us deliver real value to our customers.",
  },
];

const About = () => {
  return (
    <section style={{ width: "70%", margin: "20px auto" }}>
      <div className="pb-8">
        <h1 className="text-4xl font-semibold">About Us</h1>
        <p className="text-gray-500">India’s home for trends and style.</p>
      </div>

      <div>
        <img
          style={{ width: "100%" }}
          src="https://origin.maxfashion.in/sites/default/files/Max%20-%20About%20Us%20-%20Final.png"
          alt="about"
        />
      </div>

      <div style={{ width: "70%", margin: "auto" }}>
        <p className="text-4xl font-thin mt-20 pb-8">
          Max brings international fashion and value to discerning shoppers in
          over 325 stores across 16 countries.
        </p>
        <p className="text-gray-500 pb-3">
          Launched in the UAE in May 2004, Max was established in India in 2006,
          opening its first store in Indore. Now, Max India has a reach that
          extends to over 60 cities. Boasting a loyal customer base of over 5.5
          million, Max is the most profitable value fashion format in the
          region.
        </p>
        <p className="text-gray-500 mb-10">
          Max offers apparel, footwear and accessories for the entire family -
          women, men and children. Customers can expect a world-class shopping
          environment stocking the latest in international fashion from around
          the globe, as well as Max's own label of in-house designs in carefully
          chosen colour palettes. Shoppers enjoy great prices on an excellent
          range of over 3,000 styles every season, in brand new designs,
          silhouettes and fabrics.
        </p>
      </div>

      <Card>
        {aboutCardData.map((item) => (
          <AboutCard 
            {...item}
          />
        ))}
      </Card>
    </section>
  );
};

export default About;

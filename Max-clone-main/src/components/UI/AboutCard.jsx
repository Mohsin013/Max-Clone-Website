import React from "react";
import style from "styled-components";

const Card = style.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  height: 210px;
  margin: 8px;
  padding: 40px 0 0 100px
`;
const AboutCard = ({ url, alt, num, unit, text }) => {
  return (
    <Card>
      <div className="flex mb-7">
        <img src={url} alt={alt} />
        <span className="text-4xl font-bold ml-8">{num}</span>
        <span>{unit}</span>
      </div>
      <div>{text}</div>
    </Card>
  );
};

export default AboutCard;

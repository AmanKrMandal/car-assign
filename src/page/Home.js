import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
import Card from "../components/Card";
import img1 from "../images/xc90_recharge.jpg";
import img2 from "../images/xc60_recharge.jpg";
import img3 from "../images/xc40_recharge.jpg";
import img4 from "../images/xc40_bev.jpg";
import img5 from "../images/v90_recharge.jpg";
import img6 from "../images/v60_recharge.jpg";
import img7 from "../images/s90_recharge.jpg";
import img8 from "../images/s60_recharge.jpg";
import SVG1 from "../docs/chevron-circled.svg";
export default function App() {
  const [data] = useState([
    {
      id: "1",
      modelName: "XC90 Recharge",
      bodyType: "suv",
      modelType: "plug-in hybrid",
      imageUrl: img1,
    },
    {
      id: "2",
      modelName: "XC60 Recharge",
      bodyType: "suv",
      modelType: "plug-in hybrid",
      imageUrl: img2,
    },
    {
      id: "3",
      modelName: "XC40 Recharge",
      bodyType: "suv",
      modelType: "plug-in hybrid",
      imageUrl: img3,
    },
    {
      id: "4",
      modelName: "XC40 Recharge",
      bodyType: "suv",
      modelType: "pure electric",
      imageUrl: img4,
    },
    {
      id: "5",
      modelName: "V90 Recharge",
      bodyType: "estate",
      modelType: "plug-in hybrid",
      imageUrl: img5,
    },
    {
      id: "6",
      modelName: "V60 Recharge",
      bodyType: "estate",
      modelType: "plug-in hybrid",
      imageUrl: img6,
    },
    {
      id: "7",
      modelName: "S90 Recharge",
      bodyType: "sedan",
      modelType: "plug-in hybrid",
      imageUrl: img7,
    },
    {
      id: "8",
      modelName: "S60 Recharge",
      bodyType: "sedan",
      modelType: "plug-in hybrid",
      imageUrl: img8,
    },
  ]);

  const [nextcount, setNextCount] = useState(5);
  const [precount, setPreCount] = useState(0);

  const nextCard = () => {
    setNextCount((next) => next + 1);
    setPreCount((prv) => prv + 1);
  };
  const prevCard = () => {
    setNextCount((next) => next - 1);
    setPreCount((prv) => prv - 1);
  };
  return (
    <>
      <div className="d-flex justify-content-between gap-3 ex2">
        {data.slice(precount, nextcount).map((v, index) => {
          return <Card key={v.id} value={v} index={index} />;
        })}
      </div>

      <div className="d-flex justify-content-end p-2">
        <div>
          {precount === 0 ? (
            <img className="preCss" src={SVG1} height="40px" alt="loading" />
          ) : (
            <img
              className="preCss"
              onClick={prevCard}
              src={SVG1}
              height="40px"
              alt="loading"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div>
          {precount === 4 ? (
            <img
              src={SVG1}
              height="40px"
              alt="loading"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <img
              onClick={nextCard}
              src={SVG1}
              height="40px"
              alt="loading"
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </>
  );
}

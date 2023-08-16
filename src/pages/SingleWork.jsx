/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";
import singleFile from "../../data/mainFile.json";
import { useEffect, useState } from "react";

const SingleWork = () => {
  // get specific data
  const params = useParams();
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    const findData = singleFile.find((item) => item.name === params.id);
    setStoreData(findData.src);
  }, [params.id]);
  console.log(storeData);
  return (
    <>
      <div className="hero-container">
        <div className="inner-hero">
          <div className="inner-text">
            <h1 className="text-white">
              <span>{params.id}</span>.
            </h1>
          </div>
        </div>
        <div className="gradient-circle"></div>
        <div className="gradient-circle-two"></div>
      </div>
      {/* Work Show */}
      <div className="workShow-container">
        <div className="inner-hero">
          <div className="inner-text">
            <h2 className="text-white">
              <span>AMAZING WORKS</span>.
            </h2>
          </div>
        </div>
        {/* Work Show */}
        <div className="product-container">
          {storeData.map((item, i) => {
            return (
              <div key={i} className="main-product">
                <div
                  style={{
                    background: `url(${item.img})`,
                  }}
                  className="work-container"
                >
                  <div className="product-content">
                    <div className="work-button">
                      <a href={item.link}>Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SingleWork;

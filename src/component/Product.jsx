import { useState } from "react";
import homeFile from "../../data/homeFile.json";
import { useEffect } from "react";
const Product = () => {
  const [loadData, setLoadData] = useState([]);
  useEffect(() => {
    setLoadData(homeFile);
  }, []);

  return (
    <>
      {loadData.map((item, i) => {
        return (
          <div key={i} className="main-product">
            <div
              style={{
                background: `url(${item.img})`,
              }}
              className="work-container"
            >
              <div className="product-content">
                <div className="work-category">
                  <h5>/{item.cat}</h5>
                </div>
                <div className="work-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="work-button">
                 
                    <a href={item.link}>Learn More</a>
                
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Product;

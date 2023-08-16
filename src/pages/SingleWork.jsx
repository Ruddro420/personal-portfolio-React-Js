/* eslint-disable react/prop-types */

import { useParams } from "react-router-dom";

const SingleWork = () => {
    const params = useParams();
    return (
      <>
       <div className="hero-container">
                <div className="inner-hero">
                    <div className="inner-text">
                        <h1 className="text-white"><span>{params.id}</span>.</h1>
                    </div>
                </div>
                <div className="gradient-circle"></div>
                <div className="gradient-circle-two"></div>
            </div>
      </>
    );
};

export default SingleWork;
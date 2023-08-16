import Product from "./Product";

const WorkShow = () => {
    return (
        <>
            <div className="workShow-container">
                <div className="inner-hero">
                    <div className="inner-text">
                        <h2 className="text-white"><span>AMAZING WORKS</span>.</h2>
                    </div>
                    <div className="working-category">
                        <div className="list-category">
                            <ul>
                                
                                <li>
                                    <a href="#">Web Apps</a>
                                </li>
                                <li>
                                    <a href="#">React</a>
                                </li>
                                <li>
                                    <a href="#">Laravel</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Work Show */}
                <div className="product-container">
                    <Product />
                </div>
            </div>
        </>
    );
};

export default WorkShow;
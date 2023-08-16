import { useNavigate } from "react-router-dom";
import Product from "./Product";

const WorkShow = () => {
    const navigate = useNavigate();
    const technology = [
        'JavaScript',
        'React',
        'Laravel'
    ]
    // main action
    const routeHandler = (item) =>{
        navigate(`/${item}`);
    }
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
                                {
                                    technology.map((item,i) => {
                                        return(
                                            <li key={i}>
                                            <a onClick={()=> routeHandler(item)}>{item}</a>
                                        </li>
                                        )
                                    })
                                }
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
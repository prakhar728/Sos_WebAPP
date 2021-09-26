import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <article className="Error">
            <div className="container">
                <div className="sketch"></div>
                <p>Oops, Somthing went wrong !</p>
                <Link to="/home"><span className="link-hover">Back to Home</span></Link>
            </div>
        </article>
    );
}
 
export default Error;
import imageError from "../../img/pngwing.com.png"

//styles
import "./error.css"

//Link
import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="error">
            <h1>Oh, An error occurred</h1>
            <h2>Press the button <Link className="link-error" to="/">Home</Link> to come back</h2>
            <img src={imageError} alt="image_error"/>
        </div>
     );
}
 
export default Error;
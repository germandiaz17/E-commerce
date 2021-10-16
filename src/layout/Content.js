//STYLES
import "./content.css"

const Content = ({children}) => {
    return ( 
        <div className='content-layout'>
            {children}
        </div>
     );
}
 
export default Content;
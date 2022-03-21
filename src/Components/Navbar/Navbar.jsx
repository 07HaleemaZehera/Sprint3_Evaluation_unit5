import { Link } from "react-router-dom";
import "./CssNav/CssNav.css"


export const Navbar = () => {


  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
<Link to = {"/Forms" }>Forms</Link>
<Link to = {`/Mystery`}>Mystery</Link>
<Link to = {"/Technology"}>Technology</Link>
<Link to = {"/Mythology"}>Mythology</Link>
<Link to = {"/history"}>History</Link>

      </div>
    </>
  );
};

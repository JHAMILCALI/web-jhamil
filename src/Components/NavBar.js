import { Outlet, Link } from "react-router-dom"

const NavBar=()=>{
    return<div>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link  to="/videos">Videos</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
    
}
export default NavBar;
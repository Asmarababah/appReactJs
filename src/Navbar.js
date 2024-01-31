import './App.css';
import { Outlet, Link } from 'react-router-dom';


const Navbar = () => {
    return (<nav className="navbar">
        <h1> our website </h1>
        <div className="links">
            <Link to="/">Home </Link>
            <Link to="/create"> New Blog</Link>
            <Link to="/about"> About</Link>

        </div>
        <Outlet />
    </nav>);
}
export default Navbar;
import "./navbar.css";
import logo from "../../assets/img/frisbix.png";


const Navbar = ({color}) => {

    return ( 
        <div className="navbar" style={color}>
            <div className="logo-wrapper">
                <a href="index.html">
                    <img src={logo} alt="logo"/>   
                </a>
            </div>
            
            <div className="nav-btn-container">
                <a className="nav-btn" href="index.html">Home</a>
                <a className="nav-btn" href="index.html">Productos</a>
                <a className="nav-btn" href="index.html">Nosotros</a>
                <a className="nav-btn" href="index.html">Contacto</a>
            </div>

        </div>
     );
}
 
export default Navbar;
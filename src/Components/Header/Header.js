import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
    const headerBg = {
        backgroundColor: '#f32735',
    };

    return ( 
            <Navbar color={headerBg}/>
     );
}
 
export default Header;
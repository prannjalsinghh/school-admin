import { Link } from 'react-router-dom';
import './Header.module.css';
const Header = ()=>{

    return(
        <header>
            <nav>
               <Link to="/"><p>HOME</p></Link>
                <Link to="/admin"><p>Admin</p></Link>
                <Link to="/contactUs"><p>Contact Us</p></Link>
            </nav>
        </header>
    )
}
export default Header;

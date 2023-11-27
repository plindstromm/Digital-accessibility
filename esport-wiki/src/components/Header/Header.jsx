import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

return(
    <section 
        className='header'>
            <h1>ES-wiki</h1>
            <Link to='/profile'>
            <h2 className="header-text">Profile</h2>
            </Link>
            <h2 className="header-text">Contact us</h2>
            <h2 className="header-text">About us</h2>
    </section>
)

}

export default Header;
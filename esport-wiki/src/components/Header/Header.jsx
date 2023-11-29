import './Header.css'
import { Link } from 'react-router-dom';

function Header() {

return(
    <section 
        className='header'>
            <Link to='/' style={{ textDecoration: 'none'}}>
                <h1>Esport-wiki</h1>
            </Link>
            <div className='links'>
                <Link to='/profile' style={{ textDecoration: 'none'}}>
                <h2 className="header-text">Profile</h2>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none'}}>
                <h2 className="header-text">About me</h2>
            </Link>
            </div>
    </section>
)

}

export default Header;




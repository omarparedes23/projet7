import { NavLink } from 'react-router-dom';
import './header.css';
import logoheader from '../../assets/logo.png';
function Header() {
	return (
		<header className='header'>
			<img src={logoheader} alt='Logo' />
			<nav className='nav'>
				<NavLink to='/accueil' className='navlien'>
					Accueil
				</NavLink>
				<NavLink to='/apropos' className='navlien'>
					A propos
				</NavLink>
			</nav>
		</header>
	);
}
export default Header;

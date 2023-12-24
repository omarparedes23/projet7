import './footer.css';
import logofooter from '../../assets/logofooter.png';
function Footer() {
	return (
		<footer>
			<div id='conteneurfooter'>
				<img src={logofooter} alt='Logo' />
				<p>&copy; 2020 Kasa. All rights reserved</p>
			</div>
		</footer>
	);
}
export default Footer;

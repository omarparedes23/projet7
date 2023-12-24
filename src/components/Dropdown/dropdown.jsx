import './dropdown.css';
import vectordown from '../../assets/vectordown.png';
import vectorup from '../../assets/vectorup.png';
import { useState } from 'react';
export default function Dropdown({ title, description, page }) {
	const [text, setText] = useState(false);
	const display = () => {
		setText(!text);
	};
	return (
		<>
			<div className='aproposdropdown'>
				<h3
					className={
						page === 'apropos'
							? 'aproposdropdown_title'
							: 'logementdropdown_title'
					}
				>
					{title}
					<p onClick={display}>
						{text ? (
							<img className='fleche' src={vectorup} alt='vector arrow ' />
						) : (
							<img className='fleche' src={vectordown} alt='vector arrow ' />
						)}
					</p>
				</h3>
				{text && (
					<div
						className={
							page === 'apropos'
								? 'aproposdropdown_text'
								: 'logementdropdown_text'
						}
					>
						{text && <p>{description}</p>}
					</div>
				)}
			</div>
		</>
	);
}

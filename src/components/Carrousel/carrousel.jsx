import './carrousel.css';
import vectorright from '../../assets/vectorright.png';
import vectorleft from '../../assets/vectorleft.png';
import { useState } from 'react';
export default function Carrousel({ listephotos }) {
	const [initialValue, setinitialValue] = useState(0);
	const nextImage = () => {
		setinitialValue(initialValue + 1);
		if (initialValue === listephotos.length - 1) {
			setinitialValue(0);
		}
	};
	const lastImage = () => {
		setinitialValue(initialValue - 1);
		if (initialValue === 0) {
			setinitialValue(listephotos.length - 1);
		}
	};
	return (
		<div
			style={{ backgroundImage: `url(${listephotos[initialValue]})` }}
			className='carrousel'
		>
			{listephotos.length > 1 ? (
				<>
					<img
						className='vectorright'
						src={vectorright}
						alt=''
						onClick={nextImage}
					/>
					<img
						className='vectorleft'
						src={vectorleft}
						alt=''
						onClick={lastImage}
					/>

					<p className='imagecount'>
						{initialValue + 1}/{listephotos.length}
					</p>
				</>
			) : (
				<div></div>
			)}
		</div>
	);
}

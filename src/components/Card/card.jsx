import './card.css';
export default function Card({ titre, image }) {
	return (
		<div className='cardcomponent'>
			<img src={image} alt={titre} />
			<h3>{titre}</h3>
		</div>
	);
}

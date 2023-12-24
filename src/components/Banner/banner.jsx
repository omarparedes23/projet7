import './banner.css';
export default function Banner({ texte, page }) {
	return (
		<div className={page === 'accueil' ? 'banneraccueil' : 'bannerapropos'}>
			<div className='banner-texte-container'>
				<span className='banner-texte'>{texte}</span>
			</div>
		</div>
	);
}

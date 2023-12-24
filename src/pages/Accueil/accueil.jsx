import './accueil.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import { NavLink } from 'react-router-dom';
import listejson from '../../assets/logements.json';

export default function Accueil() {
	return (
		<div>
			<Header />
			<Banner texte='Chez vous, partout et ailleurs' page='accueil' />
			<main className='accueil'>
				{listejson.map(listeimage => (
					<NavLink
						key={listeimage.id}
						to={'/logement/' + listeimage.id}
						className='navlink'
					>
						<Card
							key={listeimage.id}
							id={listeimage.id}
							image={listeimage.cover}
							titre={listeimage.title}
						/>
					</NavLink>
				))}
			</main>
			<Footer />
		</div>
	);
}

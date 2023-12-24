import './erreur.css';
import Header from '../../components/Header/header';
import { Link } from 'react-router-dom';
export default function Erreur() {
	return (
		<>
			<Header />
			<div className='erreur'>
				<h1 className='erreur_titre'>404</h1>
				<p className='erreur_demandez'>
					Oups, la page que vous demandez n&apos;existe pas.
				</p>
			</div>
			<Link className='erreur_retourner' to='/'>
				Retourner sur la page d&apos;accueil
			</Link>
		</>
	);
}

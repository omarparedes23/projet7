import './logement.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import Carrousel from '../../components/Carrousel/carrousel';
import Dropdown from '../../components/Dropdown/dropdown';
import { Navigate, useParams } from 'react-router-dom';
import liste from '../../assets/logements.json';
import Tag from '../../components/Tag/tag';
import etoilegrise from '../../assets/etoilegrise.png';
import etoilerouge from '../../assets/etoilerouge.png';
export default function Logement() {
	const idLogement = useParams('id').id;
	const listeimages = liste.find(tempo => tempo.id === idLogement);
	if (idLogement === undefined || listeimages === undefined) {
		return <Navigate replace to='/Erreur' />;
	}
	const owner = listeimages.host.name.split(' ');
	const buttonsLogement = listeimages.tags.map((tags, index) => {
		return <Tag key={index} nom={tags} />;
	});
	const noteLogement = [];
	let etoileComplete = true;
	for (let index = 0; index < 5; index++) {
		if (index === parseInt(listeimages.rating)) {
			etoileComplete = false;
		}
		if (etoileComplete === true) {
			noteLogement.push(
				<img
					key={index}
					className='etoiles'
					src={etoilerouge}
					alt='etoile rouge'
				/>
			);
		} else {
			noteLogement.push(
				<img
					key={index}
					className='etoiles'
					src={etoilegrise}
					alt='etoile grise'
				/>
			);
		}
	}
	const equipements = listeimages?.equipments.map((tempo, index) => {
		return <li key={index}>{tempo}</li>;
	});
	return (
		<>
			{listeimages ? (
				<div className='logement'>
					<Header />
					<Carrousel
						listephotos={listeimages?.pictures}
						className='starsliste'
					/>
					<section className='details'>
						<div className='details_title'>
							<p className='imagetitle'>{listeimages?.title}</p>
							<p className='imagelocation'>{listeimages?.location}</p>
							<div className='tags'>{buttonsLogement}</div>
						</div>
						<div className='details_host'>
							<div className='details_host_info'>
								<div className='details_host_titre'>
									<span>{owner[0]}</span>
									<span>{owner[1]}</span>
								</div>
								<img
									src={listeimages.host.picture}
									alt='host of this accomodation'
								/>
							</div>
							<div className='etoilesliste'>{noteLogement}</div>
						</div>
					</section>
					<div className='collapse_logement'>
						<div className='collapse_description'>
							<Dropdown
								title='Description'
								description={listeimages.description}
								page='logement'
							/>
						</div>
						<div className='collapse_equipment'>
							<Dropdown
								title='Équipements'
								description={equipements}
								page='logement'
							/>
						</div>
					</div>
					<Footer />
				</div>
			) : (
				<Navigate replace to='/Erreur' />
			)}
		</>
	);
}

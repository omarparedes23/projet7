import './apropos.css';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import bannerapropos from '../../assets/bannerapropos.png';
import Banner from '../../components/Banner/banner';
import Dropdown from '../../components/Dropdown/dropdown';
import aproposData from '../../assets/aproposdata.json';
export default function Apropos() {
	return (
		<div>
			<Header />
			<Banner image={bannerapropos} texte='' page='apropos' />
			<main className='apropos'>
				{aproposData.map(aproposarray => {
					return (
						<div key={aproposarray.id} className='apropos_main'>
							<Dropdown
								title={aproposarray.title}
								description={aproposarray.description}
								page='apropos'
							/>
						</div>
					);
				})}
			</main>
			<Footer />
		</div>
	);
}

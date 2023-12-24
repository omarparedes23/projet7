import Accueil from './pages/Accueil/accueil';
import Erreur from './pages/Erreur/erreur';
import Apropos from './pages/Apropos/apropos';
import Logement from './pages/Logement/logement';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Accueil />,
	},
	{
		path: '/accueil',
		element: <Accueil />,
	},
	{
		path: '/logement',
		element: <Logement />,
	},
	{
		path: '/logement/:id',
		element: <Logement />,
	},
	{
		path: '/apropos',
		element: <Apropos />,
	},
	{
		path: '*',
		element: <Erreur />,
	},
]);

function App() {
	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;

import api from '../../services/api';
import { Background } from './styles';

function Home() {
	async function getMovies() {
		const data = await api.get('/movie/popular');

		console.log(data);
	}
	getMovies();

	return (
		<Background img="https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg">
			<h1>Home</h1>
			<p>essa é a home</p>
		</Background>
	);
}

export default Home;

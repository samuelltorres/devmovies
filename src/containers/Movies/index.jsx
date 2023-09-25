import { useState, useEffect } from 'react';
import { Container } from './styles';
import { getTopMovies } from '../../services/getData';
import { getImages } from '../../services/utils/getImages';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [topMovies, setTopMovies] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		async function getAllData() {
			Promise.all([getTopMovies()])
				.then(([topMovies]) => {
					setTopMovies(topMovies);
				})
				.catch((error) => console.error(error));
		}

		getAllData();
	}, []);

	return (
		<Container>
			{topMovies &&
				topMovies.map((movie) => (
					<img
						key={movie.id}
						src={getImages(movie.poster_path || movie.profile_path || '')}
						onClick={() => navigate(`/detalhe/${movie.id}`)}
						alt=""
					/>
				))}
		</Container>
	);
}

export default Home;

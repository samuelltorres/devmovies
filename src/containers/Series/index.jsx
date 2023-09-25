import { useState, useEffect } from 'react';
import { Container } from './styles';
import { getTopMovies, getTopSeries } from '../../services/getData';
import { getImages } from '../../services/utils/getImages';
import { useNavigate } from 'react-router-dom';

function Home() {
	const [topSeries, setTopSeries] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		async function getAllData() {
			Promise.all([getTopSeries()])
				.then(([topSeries]) => {
					setTopSeries(topSeries);
				})
				.catch((error) => console.error(error));
		}

		getAllData();
	}, []);

	return (
		<Container>
			{topSeries &&
				topSeries.map((movie) => (
					<img
						key={movie.id}
						src={getImages(movie.poster_path || movie.profile_path || '')}
						onClick={() => navigate(`/serie/${movie.id}`)}
						alt=""
					/>
				))}
		</Container>
	);
}

export default Home;

import Button from '../../components/Button';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Background, Container, Info, Poster, ContainerButton } from './styles';

function Home() {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getMovies() {
			const {
				data: { results }
			} = await api.get('/movie/popular');

			setMovie(results[1]);
		}
		getMovies();
	}, []);

	return (
		<>
			{movie && (
				<Background
					img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
				>
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<ContainerButton>
								<Button red color="#e21">
									Assista agora
								</Button>
								<Button>Trailer</Button>
							</ContainerButton>
						</Info>
						<Poster>
							<img
								src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								alt="poster-do-filme"
							/>
						</Poster>
					</Container>
				</Background>
			)}
		</>
	);
}

export default Home;

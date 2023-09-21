import Button from '../../components/Button';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { Background, Container, Info, Poster, ContainerButton } from './styles';
import Slider from '../../components/Slider';
import { getImages } from '../../services/utils/getImages';

function Home() {
	const [movie, setMovie] = useState();
	const [topMovies, setTopMovies] = useState();
	const [topSeries, setTopSeries] = useState();
	const [popularSeries, setPopularSeries] = useState();
	const [popularArtists, setPopularArtists] = useState();

	useEffect(() => {
		async function getMovies() {
			const {
				data: { results }
			} = await api.get('/movie/popular');

			setMovie(results[1]);
		}

		async function getTopMovies() {
			const {
				data: { results }
			} = await api.get('/movie/top_rated');

			setTopMovies(results);
		}

		async function getTopSeries() {
			const {
				data: { results }
			} = await api.get('/tv/top_rated');

			setTopSeries(results);
		}

		async function getPopularSeries() {
			const {
				data: { results }
			} = await api.get('/tv/popular');

			setPopularSeries(results);
		}

		async function getPopularArtists() {
			const {
				data: { results }
			} = await api.get('/person/popular');

			setPopularArtists(results);
		}

		getMovies();
		getTopMovies();
		getTopSeries();
		getPopularSeries();
		getPopularArtists();
	}, []);

	return (
		<>
			{movie && (
				<Background img={getImages(movie.backdrop_path)}>
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
							<img src={getImages(movie.poster_path)} alt="poster-do-filme" />
						</Poster>
					</Container>
				</Background>
			)}
			{topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
			{topSeries && <Slider info={topSeries} title={'Top Series'} />}
			{popularSeries && (
				<Slider info={popularSeries} title={'Popular Series'} />
			)}
			{popularArtists && (
				<Slider info={popularArtists} title={'Popular Artists'} />
			)}
		</>
	);
}

export default Home;

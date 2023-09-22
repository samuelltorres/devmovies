import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import api from '../../services/api';
import { Background, Container, Info, Poster, ContainerButton } from './styles';
import Slider from '../../components/Slider';
import { getImages } from '../../services/utils/getImages';
import Modal from '../../components/Modal';
import {
	getMovies,
	getPopularArtists,
	getPopularSeries,
	getTopMovies,
	getTopSeries
} from '../../services/getData';

function Home() {
	const [showModal, setShowModal] = useState(false);
	const [movie, setMovie] = useState();
	const [topMovies, setTopMovies] = useState();
	const [topSeries, setTopSeries] = useState();
	const [popularSeries, setPopularSeries] = useState();
	const [popularArtists, setPopularArtists] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		async function getAllData() {
			Promise.all([
				getMovies(),
				getTopMovies(),
				getTopSeries(),
				getPopularSeries(),
				getPopularArtists()
			])
				.then(
					([movie, topMovies, topSeries, popularSeries, popularArtists]) => {
						setMovie(movie);
						setTopMovies(topMovies);
						setTopSeries(topSeries);
						setPopularSeries(popularSeries);
						setPopularArtists(popularArtists);
					}
				)
				.catch((error) => console.error(error));
		}

		getAllData();
	}, []);

	return (
		<>
			{movie && (
				<Background img={getImages(movie.backdrop_path)}>
					{showModal && (
						<Modal movieId={movie.id} setShowModal={setShowModal} />
					)}
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<ContainerButton>
								<Button
									red
									color="#e21"
									onClick={() => navigate(`/detalhe/${movie.id}`)}
								>
									Assista agora
								</Button>
								<Button onClick={() => setShowModal(true)}>Trailer</Button>
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

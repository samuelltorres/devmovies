/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Container, Background } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { getMovieVideos } from '../../services/getData';

function Modal({ movieId, setShowModal }) {
	const [video, setVideo] = useState();

	useEffect(() => {
		async function getVideos() {
			setVideo(await getMovieVideos(movieId));
		}
		getVideos();
	}, []);

	return (
		<Background onClick={() => setShowModal(false)}>
			{video && (
				<Container>
					<button onClick={() => setShowModal(false)}>
						<AiOutlineCloseCircle />
					</button>
					<iframe
						height="500px"
						width="100%"
						src={`https://www.youtube.com/embed/${video[0].key}`}
						title="YouTube Video Player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowfullscreen
					></iframe>
				</Container>
			)}
		</Background>
	);
}

export default Modal;

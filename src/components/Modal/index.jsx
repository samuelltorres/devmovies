/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Container, Background } from './styles';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function Modal({ movieId, setShowModal }) {
	const [video, setVideo] = useState();

	useEffect(() => {
		async function getVideos() {
			const {
				data: { results }
			} = await api.get(`/movie/${movieId}/videos`);

			console.log(results[1]);
			setVideo(results[0]);
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
						src={`https://www.youtube.com/embed/${video.key}`}
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

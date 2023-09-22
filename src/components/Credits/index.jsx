import { getImages } from '../../services/utils/getImages';
import { Container, Title } from './styles';

function Credits({ credits }) {
	return (
		<>
			<Title>Elenco</Title>
			{credits && (
				<Container>
					{credits.slice(0, 5).map((cast) => (
						<div key={cast.id}>
							<img src={getImages(cast.profile_path)} alt="" />
							<p>{cast.original_name}</p>
						</div>
					))}
				</Container>
			)}
		</>
	);
}

export default Credits;

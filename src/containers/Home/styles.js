import styled from 'styled-components';

export const Background = styled.div`
	background-image: url(${(props) => props.img});
	height: 100vh;
	background-position: center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.8);
	}
`;

export const Container = styled.div`
	max-width: 1200px;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 60px;
`;

export const Info = styled.div`
	z-index: 2;
	padding: 20px;

	h1 {
		font-size: 4rem;
		font-weight: 700;
		color: #f8f8f8;
		margin-bottom: 30px;
	}

	p {
		font-size: 1.25rem;
		font-weight: 500;
		color: #f1f1f1;
		margin-bottom: 50px;
	}
`;

export const Poster = styled.div`
	z-index: 2;
	img {
		width: 400px;
		border-radius: 16px;
		box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);
	}
`;

export const ContainerButton = styled.div`
	display: flex;
	gap: 30px;
`;

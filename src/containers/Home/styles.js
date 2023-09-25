import styled, { keyframes } from 'styled-components';

const showToRight = keyframes`
  	from {
		opacity: 0;
		transform: translate3d(-30px, 0, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;
const showToLeft = keyframes`
  	from {
		opacity: 0;
		transform: translate3d(30px, 0, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

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

	@media (max-width: 950px) {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
`;

export const Info = styled.div`
	z-index: 2;
	padding: 20px;

	animation: ${showToLeft} 1s forwards;

	h1 {
		font-size: 4rem;
		font-weight: 700;
		color: #f8f8f8;
		margin-bottom: 30px;

		@media (max-width: 950px) {
			font-size: 2rem;
		}
	}

	p {
		font-size: 1.25rem;
		font-weight: 500;
		color: #f1f1f1;
		margin-bottom: 50px;

		@media (max-width: 950px) {
			font-size: 1rem;
		}
	}
`;

export const Poster = styled.div`
	z-index: 2;
	img {
		width: 400px;
		border-radius: 16px;
		box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);

		animation: ${showToRight} 1s forwards;
	}

	@media (max-width: 950px) {
		display: none;
	}
`;

export const ContainerButton = styled.div`
	display: flex;
	gap: 30px;
`;

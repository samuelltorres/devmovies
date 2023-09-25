import styled, { keyframes } from 'styled-components';

const showToRight = keyframes`
  	from {
		opacity: 0;
		transform: translate3d(-40px, 0, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;
const showToLeft = keyframes`
  	from {
		opacity: 0;
		transform: translate3d(40px, 0, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
`;

export const Background = styled.div`
	background-image: url(${(props) => props.image});
	height: 50vh;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	&::after {
		content: '';
		position: absolute;
		position: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 150px;
		background-image: linear-gradient(to top, #111, rgba(0, 0, 0, 0));
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin-top: -100px;

	@media (max-width: 820px) {
		/* justify-content: flex-start; */
	}
`;

export const Cover = styled.div`
	padding: 20px;
	display: flex;
	align-items: flex-start;
	height: 100%;
	z-index: 99;

	img {
		width: 400px;
		border-radius: 16px;
		box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
		animation: ${showToRight} 1.5s forwards;
	}

	@media (max-width: 1350px) {
		display: none;
	}
`;

export const Info = styled.div`
	z-index: 99;
	padding: 20px;
	width: 50%;
	display: flex;
	flex-direction: column;
	/* color: #505050; */
	align-items: flex-start;
	animation: ${showToLeft} 1.5s forwards;

	h2 {
		font-size: 2rem;
		font-weight: 700;
		color: #f7f7f7;
		margin-bottom: 30px;
	}

	p {
		font-weight: 500;
		color: #ededed;
		margin-bottom: 30px;
	}
	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const ContainerMovies = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 20px;
	width: 100%;

	div {
		display: flex;
		flex-direction: column;
		max-width: 1000px;
		width: 100%;
		height: 100%;
		margin: 30px 0;
	}

	h4 {
		color: #f7f7f7;
		font-size: 1.25rem;
		margin-bottom: 16px;

		@media (max-width: 400px) {
			font-size: 1rem;
		}
	}

	iframe {
		border-radius: 8px;
		border: 1px solid #272727;
		/* border: none; */
		box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.5);
	}
`;

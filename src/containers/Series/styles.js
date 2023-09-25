import styled, { keyframes } from 'styled-components';

const show = keyframes`
  	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const Container = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	/* display: flex;
	justify-content: center; */
	flex-wrap: wrap;
	gap: 30px;
	margin-top: 100px;

	img {
		border-radius: 12px;
		width: 250px;
		height: 375px;
		margin-top: 15px;
		object-fit: cover;

		transition: all 0.3s ease 0s;
		box-shadow:
			rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
			rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
			rgba(150, 150, 150, 0.3) 0px 30px 60px -30px;
	}

	img:hover {
		cursor: pointer;
		margin-top: 0px;
	}
`;

import styled from 'styled-components';

export const Title = styled.h4`
	color: #f7f7f7;
	font-size: 1.6rem;
	font-weight: 700;
	margin-bottom: 30px;
`;

export const Container = styled.div`
	display: flex;
	gap: 10px;

	div {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	img {
		height: 200px;
		border-radius: 4px;
		box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;

		@media (max-width: 1050px) {
			width: 100px;
			height: 150px;
		}
		@media (max-width: 580px) {
			width: 60px;
			height: 100px;
		}
		@media (max-width: 380px) {
			width: 40px;
			height: 60px;
		}
	}

	p {
		color: #f7f7f7;
		font-weight: 500;

		@media (max-width: 1050px) {
			font-size: 0.75rem;
		}
	}
`;

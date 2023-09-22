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
	}

	p {
		color: #f7f7f7;
		font-weight: 500;
	}
`;

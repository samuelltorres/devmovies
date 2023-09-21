import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background: inherit;
	border: none;

	img {
		border-radius: 12px;
		width: 250px;
		height: 375px;
		margin-bottom: 15px;
		object-fit: cover;
	}
	h3 {
		color: #ededed;
	}

	margin-bottom: 23px;
`;
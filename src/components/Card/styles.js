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

		@media (max-width: 950px) {
			width: 150px;
			height: 225px;
		}
	}
	h3 {
		color: #ededed;
		font-size: 0.75rem;
	}

	margin-bottom: 23px;
`;

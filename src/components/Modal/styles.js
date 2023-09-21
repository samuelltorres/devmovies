import styled from 'styled-components';

export const Background = styled.div`
	height: 100vh;
	width: 100vw;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.5);
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	background: #000;
	width: 60%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	padding: 16px;
	max-width: 1200px;
	border: 2px solid #404040;
	border-radius: 8px;
	box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.4);

	iframe {
		border: none;
	}

	button {
		position: absolute;
		top: 5px;
		right: 0px;
		font-size: 24px;
		width: 32px;
		color: #f7f7f7;
		background: transparent;
		border: none;
		cursor: pointer;
		margin-left: auto;
	}

	button:hover {
		color: #e21;
	}
`;

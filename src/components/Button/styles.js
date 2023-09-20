import styled, { css } from 'styled-components';

const buttonStyles = css`
	border: 2px solid #f7f7f7;
	background: transparent;
	color: #f7f7f7;
	border-radius: 20px;
	padding: 12px 20px;
	cursor: pointer;
	font-size: 1rem;
	font-weight: 500;
	transition: all 0.5s;

	&:hover {
		color: #e21;
		background: #f7f7f7;
	}
`;

export const ButtonWhite = styled.button`
	${buttonStyles}
`;

export const ButtonRed = styled.button`
	${buttonStyles}

	background: ${(props) => props.color};
	border: 2px solid transparent;
	box-shadow: 0px 0px 20px 0px rgba(153, 0, 0, 0.4);

	&:hover {
		box-shadow: 0px 0px 20px 2px rgba(238, 34, 17, 0.7);
		background: #e21;
		color: #f7f7f7;
	}
`;

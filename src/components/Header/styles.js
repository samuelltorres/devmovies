import styled from 'styled-components';

export const Container = styled.div`
	z-index: 99;
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 50px;
	width: 100vw;

	background-color: ${(props) =>
		props.changeBackground ? '#1a1a1a' : 'transparent'};
	transition: background-color 0.5s ease-in-out;

	img {
		width: 300px;
	}
`;

export const Menu = styled.ul`
	display: flex;
	list-style: none;
	gap: 30px;
`;

export const Li = styled.li`
	font-weight: 600;
	font-size: 1.5rem;
	cursor: pointer;
	position: relative;
	padding: 0 5px;

	a {
		color: #f7f7f7;
		text-decoration: none;
	}

	&::after {
		content: '';
		height: 1px;
		width: ${(props) => (props.isActive ? '100%' : '0')};
		background: #e21;
		position: absolute;
		bottom: -10px;
		left: 0;
		left: 50%;
		transform: translateX(-50%);
		transition: width 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
	}

	&:hover::after {
		width: 100%;
		background: #e21;
	}
`;

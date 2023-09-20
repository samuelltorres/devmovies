import { ButtonRed, ButtonWhite } from './styles';

function Button({ children, red, color }) {
	return (
		<>
			{red ? (
				<ButtonRed color={color}>{children}</ButtonRed>
			) : (
				<ButtonWhite>{children}</ButtonWhite>
			)}
		</>
	);
}

export default Button;

import { ButtonRed, ButtonWhite } from './styles';

function Button({ children, red, color, ...rest }) {
	return (
		<>
			{red ? (
				<ButtonRed color={color} {...rest}>
					{children}
				</ButtonRed>
			) : (
				<ButtonWhite {...rest}>{children}</ButtonWhite>
			)}
		</>
	);
}

export default Button;

type ButtonProps = {
	onClick?: () => void;
	className?: string;
};

const Button = ({ className = "", onClick }: ButtonProps) => {
	return (
		<button
			type="button"
			className={`advice-start-app-btn text-2xl font-bold text-white transition-colors duration-300 cursor-pointer ${className}`}
			onClick={onClick}
		>
			Start App
		</button>
	);
};

export default Button;

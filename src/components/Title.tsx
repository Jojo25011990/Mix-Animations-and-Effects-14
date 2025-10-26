type TitleProps = {
	text?: string;
	className?: string;
	isMainHeading: boolean;
};

const Title = ({ text, className = "", isMainHeading = false }: TitleProps) => {
	return isMainHeading ? (
		<h1 className="heading-primary">
			<span>W</span>
			<span>e</span>
			<span>l</span>
			<span>c</span>
			<span>o</span>
			<span>m</span>
			<span>e</span>
			<span>&hearts;</span>
		</h1>
	) : (
		<h2 className={`text-3xl font-bold ${className}`}>{text}</h2>
	);
};

export default Title;

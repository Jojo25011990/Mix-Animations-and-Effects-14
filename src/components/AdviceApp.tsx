import { useState, useEffect } from "react";
import Monkey from "../assets/monkey.png";

type AdviceAppProps = {
	className?: string;
};

const AdviceApp = ({ className = "" }: AdviceAppProps) => {
	const url = "https://api.adviceslip.com/advice";

	const [advice, setAdvice] = useState<string>("");

	const handleClick = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				const adviceText = data.slip.advice;

				setAdvice(
					adviceText.length > 60
						? adviceText.slice(0, 60) + "..."
						: adviceText
				);
			})
			.catch(() => setAdvice("No more advice for you 🤣"));
	};

	useEffect(() => {
		handleClick();
	}, []);

	return (
		<div className={`advice ${className}`}>
			<img
				src={Monkey}
				alt="Beaatiful Monkey"
				className="advice-monkey"
			/>

			<h3 className="advice-title">Advice</h3>

			<p className="advice-text">{advice}</p>

			<button type="button" className="advice-btn" onClick={handleClick}>
				Advice
			</button>
		</div>
	);
};

export default AdviceApp;

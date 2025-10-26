import { useState } from "react";
import AdviceApp from "./components/AdviceApp";
import Bomberman from "./components/Bomberman";
import Button from "./components/Button";
import Card from "./components/Card";
import Title from "./components/Title";

const App = () => {
	const [isClicked, setIsClicked] = useState<boolean>(false);

	const handleClickBtn = () => setIsClicked(true);

	return (
		<>
			{/* Title - Welcome */}
			<section className="bg-black w-full h-screen flex items-center justify-center">
				<Title isMainHeading={true} />
			</section>
			{/* End of Title - Welcome */}

			{/* Bomberman + Bomb */}
			<section className="bg-dark-secondary w-full h-screen flex flex-col items-center justify-center gap-10">
				<Title
					isMainHeading={false}
					text="Bomberman | Bomb"
					className="text-white"
				/>
				<Bomberman />
			</section>
			{/* End of Bomberman + Bomb */}

			{/* Advice App */}
			<section className="bg-black w-full h-screen flex flex-col items-center justify-center gap-10">
				<Title
					isMainHeading={false}
					text="Advice App"
					className="text-white"
				/>

				<AdviceApp
					className={`${isClicked ? "active-timeline" : ""}`}
				/>

				<div className="relative bottom-5 w-full max-w-[350px] flex flex-col items-center">
					<div
						className={`w-1 h-20 bg-white mb-2 advice-line ${
							isClicked ? "active" : ""
						}`}
					></div>
					<Button
						onClick={handleClickBtn}
						className={`${isClicked ? "active" : ""}`}
					/>
				</div>
			</section>
			{/* End of Advice App */}

			{/* Card */}
			<section className="bg-white w-full h-screen flex flex-col items-center justify-center gap-10">
				<Title isMainHeading={false} text="Image Card" />
				<Card />
			</section>
			{/* End of Card */}
		</>
	);
};

export default App;

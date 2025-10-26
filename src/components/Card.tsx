import CardImage from "../assets/image-1.jpg";
import { HiMiniPencil } from "react-icons/hi2";

const Card = () => {
	return (
		<div className="relative w-[450px] h-[450px] flex overflow-hidden card">
			<img
				src={CardImage}
				alt="Card Image"
				className="w-full transition-all duration-700 card-img"
			/>

			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-around flex-col gap-10 text-white bg-[rgba(0,0,0,0.5)] transition-all duration-700 p-10 card-content">
				<h3 className="text-2xl font-black">Card Heading</h3>
				<p className="text-center text-lg leading-8">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolorum sapiente autem et placeat illum beatae, cupiditate
					ipsum animi nisi nulla atque accusamus ipsam ipsa labore
					aliquid quis rerum quibusdam provident!
				</p>
				<HiMiniPencil className="text-white text-5xl card-content-pencil" />
			</div>
		</div>
	);
};

export default Card;

const Bomberman = () => {
	return (
		<div className="w-full max-w-[500px] flex justify-center items-center bomberman-container">
			<div className="bomb">
				<div className="bomb-top"></div>
				<div className="bomb-fuse">
					<div className="bomb-fuse-01">
						<div className="bomb-fuse-02"></div>
					</div>
				</div>

				<div className="bomb-body"></div>
			</div>
			<div className="bomberman">
				<div className="bomberman-head"></div>
				<div className="bomberman-head-top"></div>
				<div className="bomberman-face"></div>
				<div className="bomberman-body"></div>
				<div className="bomberman-left-arm"></div>
				<div className="bomberman-left-hand"></div>
				<div className="bomberman-right-arm"></div>
				<div className="bomberman-right-hand"></div>
				<div className="bomberman-left-leg"></div>
				<div className="bomberman-left-foot"></div>
				<div className="bomberman-right-leg"></div>
				<div className="bomberman-right-foot"></div>
			</div>
		</div>
	);
};

export default Bomberman;

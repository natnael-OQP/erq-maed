import { useRef, useState } from "react";
import YouTube from "react-youtube";
import { useStore } from "../lib/store";

const Video_player = () => {
	const toggle = useStore((state) => state.toggle);
	const playId = useStore((state) => state.id);
	const isOpen = useStore((state) => state.isOpen);
	
	const [player, setPlayer] = useState();
	const opts = {
		height: "390",
		width: "100%",
		playerVars: {
			// autoplay: 1,
		},
	};

	const onReady = (event) => {
		setPlayer(event.target);
	};

	const onPauseVideo = () => {
		player.pauseVideo();
		toggle();
	};

	return (
		<div
			onClick={onPauseVideo}
			className={`cursor-pointer ${isOpen?"fixed":"hidden"}   top-0 left-0 w-full min-h-screen bg-secondary bg-opacity-60 backdrop-filter backdrop-blur-lg  flex items-center justify-center`}
		>
			<div className="h-[390] w-[640px]">
				<YouTube videoId={playId} opts={opts} onReady={onReady} />
			</div>
		</div>
	);
};

export default Video_player;

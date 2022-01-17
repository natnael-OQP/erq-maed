import { useState } from "react";
import YouTube from "react-youtube";

const Video_player = () => {
	const [player, setPlayer] = useState();
	const [id, setId] = useState("3AUY6xLFgkg");
	const opts = {
		height: "100%",
		width: "100%",
		playerVars: {
			// autoplay: 1,
		},
	};
	const onReady = (event) => {
		setPlayer(event.target);
	};

	const onPlayVideo = () => {
		setId("3AUY6xLFgkg");
		player.playVideo();
	};

	const onPauseVideo = () => {
		player.pauseVideo();
	};

	const onEndVideo = () => {
		setId(null);
	};
	return (
		<div>
			<YouTube videoId={id} opts={opts} onReady={onReady} />
			<div className="space-x-4">
				<button onClick={onPlayVideo}>play</button>
				<button onClick={onPauseVideo}>pause</button>
				<button onClick={onEndVideo}>close</button>
			</div>
		</div>
	);
};

export default Video_player;

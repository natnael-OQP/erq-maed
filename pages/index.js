import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import { BsYoutube, BsSpotify } from "react-icons/bs";
export default function Home() {
	// const [player, setPlayer] = useState();
	// const [id, setId] = useState("3AUY6xLFgkg");
	// const opts = {
	// 	height: '390',
	// 	width: '100%',
	// 	playerVars: {
	// 		// autoplay: 1,
	// 	},
	// }
	// const onReady = (event) => {
	// 	setPlayer(event.target);
	// };

	// const onPlayVideo = () => {
	// 	setId("3AUY6xLFgkg");
	// 	player.playVideo();
	// };

	// const onPauseVideo = () => {
	// 	player.pauseVideo();
	// };

	// const onEndVideo = () => {
	// 	setId(null);
	// };


	return (
		<div className="text-color3">
			<Head>
				<title>erq maed</title>
				<meta name="description" content="about erq maed" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<div className="px-3 md:px-10 lg:px-20   h-[80vh] bg-[#10121F]">
					<div className="pt-20 md:pt-[20%] lg:pt-[13%] px-3">
						<h1 className="text-4xl md:text-6xl text-white font-bold text-center md:text-left">
							Lorem ipsum
						</h1>
						<p className="text-color3 font-lato text-sm pt-5 md:pt-10 md:w-[70%] lg:w-[50%]">
							Village did removed enjoyed explain nor ham saw
							calling talking. Securing as informed declared or
							margaret. Joy horrible moreover man feelings own
							shy. Request norland neither mistake for yet.
							Between the for morning assured country believe. On
							even feet time have an no at. Relation so in
							confined smallest children unpacked delicate. Why
							sir end believe uncivil respect. Always get adieus
							nature day course for common. My little garret
							repair to desire he esteem.Sister depend change off
							piqued one. Contented continued any happiness
						</p>
						<div className="fx pt-4 md:pt-6 gap-x-2">
							<button className="bg-color4 text-lato font-sm font-light px-5 py-[3px] text-gray-100">
								See more
							</button>
							<BsYoutube className="w-7 h-7 text-[#FA0F0C]" />
							<BsSpotify className="w-7 h-7 text-[#199C49]" />
							<div className="relative w-24 h-6">
								<Image
									layout="fill"
									objectFill="contain"
									src="https://pluspng.com/img-png/deezer-png-deezer-360.png"
									alt="deezer-logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

// <YouTube videoId={id} opts={opts} onReady={onReady} />
// 				<div className="space-x-4">
// 					<button onClick={onPlayVideo}>play</button>
// 					<button onClick={onPauseVideo}>pause</button>
// 					<button onClick={onEndVideo} >close</button>
// 				</div>
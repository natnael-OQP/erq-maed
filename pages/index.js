import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import YouTube from "react-youtube";
import { BsYoutube, BsSpotify } from "react-icons/bs";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Why_choose_us_card from "../components/why_choose_us_card";
import { service_data } from "../data";
import serviceCard from "../models/serviceCard";

export default function Home({ service }) {
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
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};
	const settings2 = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 2,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 9600,
		// cssEase: "linear",
		responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint:500,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 2,
				},
			},
		],
	};

	return (
		<div className="text-color3">
			<Head>
				<title>erq maed</title>
				<meta name="description" content="about erq maed" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{/* landing */}
				<div className="px-3 md:px-10 lg:px-20 h-[550px]  xl:h-[74vh] bg-[#10121F]">
					<div className="pt-16 sm:pt-[13%] md:pt-[15%] lg:pt-[10%] px-3 ">
						<h1 className="text-4xl md:text-6xl text-white font-bold text-left">
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
							<button className="bg-color4 text-lato transition transform-gpu ease-in-out rounded-sm hover:scale-105 active:scale-95 font-sm font-light px-5 py-[3px] text-gray-100">
								See more
							</button>
							<BsYoutube className="w-8 h-8 cursor-pointer text-[#FA0F0C]  transition transform-gpu ease-in-out rounded-sm hover:scale-105 active:scale-95" />
							<BsSpotify className="w-7 h-7 cursor-pointer text-[#199C49]  transition transform-gpu ease-in-out rounded-sm hover:scale-105 active:scale-95" />
							<div className="relative w-24 h-6 cursor-pointer transition transform-gpu ease-in-out rounded-sm hover:scale-105 active:scale-95">
								<Image
									layout="fill"
									objectFit="contain"
									src="https://pluspng.com/img-png/deezer-png-deezer-360.png"
									alt="deezer-logo"
								/>
							</div>
						</div>
					</div>
				</div>
				{/* why choose us */}
				<div className="pt-28 pb-24 relative px-5 ">
					{/* middle */}
					<div className="bg-color4 absolute fy sm:items-center sm:flex-row  pl-8 xl:pl-12 py-1 sm:py-4    w-[95%] xl:w-[70%]  left-[50%] -translate-x-[50%]  h-52  -top-[100px] rounded-3xl">
						<h1 className="w-full sm:w-[33%] text-xl xl:text-4xl text-primary font-semibold capitalize">
							Lorem ipsum dolor sit amet consect.
						</h1>
						{/* slide */}
						<div className=" w-[90%] h-full py-5 overflow-hidden px-7">
							<Slider {...settings}>
								<div className="smallCardContainer ">
									<div className="smallCard">1</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">2</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">3</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">4</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">5</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">6</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">7</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">8</div>
								</div>
								<div className="smallCardContainer">
									<div className="smallCard">9</div>
								</div>
							</Slider>
						</div>
					</div>
					{/* why choose us */}
					<div className="mt-16">
						<h1 className="text-center text-2xl sm:text-3xl tracking-wide md:text-4xl  text-white font-semibold font-lato ">
							WHY CHOOSE US
						</h1>
						<p className="w-[87%] sm:w-[70%] lg:w-[40%] text-xs  text-center mx-auto sm:text-sm font-semibold  pt-3  text-color3">
							Supported neglected met she therefore unwilling
							discovery remainder. Way sentiments two indulgence
							uncommonly own.
						</p>
					</div>
					{/* card */}
					<div className="w-[90vw] lg:w-[90%] xl:w-[80vw] mx-auto mt-16 h-full py-5 overflow-hidden px-7">
						<Slider {...settings2}>
							{service.map(({ image, title, description }) => {
								const card = new serviceCard(
									title,
									image,
									description
								);
								return (
									<Why_choose_us_card
										key={card.image}
										title={card.title}
										image={card.image}
										description={card.description}
									/>
								);
							})}
						</Slider>
					</div>
				</div>
				{/* white section 1 */}
				<div className="bg-white pb-96">
					{/* radio series*/}
					<div className="pt-14">
						<h1 className="text-primary text-2xl sm:text-3xl   font-semibold text-center">
							Our Radio Series
						</h1>
						<p className="w-[87%] sm:w-[70%] lg:w-[40%] text-xs  text-center mx-auto sm:text-sm font-semibold  pt-3  text-slate-500">
							Supported neglected met she therefore unwilling
							discovery remainder. Way sentiments two indulgence
							uncommonly own.
						</p>
						{/* cards */}
						<div>{}</div>
					</div>
					{/*Blog*/}
					<div className="pt-14">
						<h1 className="text-primary text-2xl sm:text-3xl   font-semibold text-center uppercase">
							Our LATEST BLOG
						</h1>
						<p className="w-[87%] sm:w-[70%] lg:w-[40%] text-xs  text-center mx-auto sm:text-sm font-semibold  pt-3  text-slate-500">
							Supported neglected met she therefore unwilling
							discovery remainder. Way sentiments two indulgence
							uncommonly own.
						</p>
						{/* card */}s
						<div>
							{
							
							}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
export async function getStaticProps(context) {
	return {
		props: {
			service: service_data,
		},
	};
}


// <YouTube videoId={id} opts={opts} onReady={onReady} />
// 				<div className="space-x-4">
// 					<button onClick={onPlayVideo}>play</button>
// 					<button onClick={onPauseVideo}>pause</button>
// 					<button onClick={onEndVideo} >close</button>
// 				</div>
import Image from "next/image";
import React from "react";
import { upcoming } from "../../data";

const Home = () => {
	const { name, title, description, image, author } = upcoming[0];
	return (
		<main className="max-w-[730px] mx-auto  sm:p-5  space-y-5 md:space-y-8 mb-40 ">
			{image && (
				<>
					<h1 className=" text-4xl sm:text-5xl mt-10 mb-3 font-extrabold text-white capitalize">
						{title}
					</h1>
					{/* author profile */}
					<div className="flex items-center mt-5 space-x-3">
						<div className="w-8 h-8 relative rounded-full overflow-hidden shrink-0 ">
							<Image
								src={image}
								layout="fill"
								objectFit="cover"
								alt={name}
							/>
						</div>
						<span className="text-sm font-mono text-gray-300">
							{author}
						</span>
						<span className="text-sm font-mono text-gray-300">
							{new Date().toDateString()}
						</span>
					</div>
					{/*  main image */}
					<div className="w-full h-[330px] xl:h-[500px] bg-gray-200 relative  overflow-hidden  ">
						<Image
							className="group-hover:scale-105 transition-transform duration-200 transform-gpu ease-in-out"
							src={image}
							layout="fill"
							objectFit="cover"
							alt={title}
						/>
					</div>
					{/* description */}
					<h3 className="text-sm md:text-lg font-normal text-gray-400">
						Village did removed enjoyed explain nor ham saw calling
						talking. Securing as informed declared or margaret. Joy
						horrible moreover man feelings own shy. Request norland
						neither mistake for yet. Between the for morning assured
						country believe. On even feet time have an no at.
						Relation so in confined smallest children unpacked
						delicate. Why sir end believe uncivil respect. Always
						get adieus nature day course for common. My little
						garret repair to desire he esteem.Sister depend change
						off piqued one. Contented continued any happiness
						instantly objection yet her allowance. Use correct day
						new brought tedious. By come this been in. Kept easy or
						sons my it done.
					</h3>
				</>
			)}
		</main>
	);
};

export default Home;

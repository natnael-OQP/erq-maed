import Image from "next/image";
import React from "react";

const Large_event_card = () => {
	return (
		<div className="rounded-lg max-w-[450px] md:max-w-max col-span-1  md:col-span-2 bg-gray-50  p-5 flex space-x-4 relative flex-col md:flex-row  ">
			{/* image */}
			<div className="md:flex-[45%] h-[120px]   md:h-full bg-secondary    overflow-hidden relative ">
				<div className=" w-full h-full opacity-50">
					<Image
						layout="fill"
						objectFit="cover"
						src="https://img.youtube.com/vi/8FyNu15A7Gc/0.jpg"
						alt="events"
					/>
				</div>
			</div>
			{/* textarea */}
			<div className="flex-[55%] flex flex-col space-y-2 overflow-hidden relative">
				<div className="flex  justify-end">
					<p className="bg-secondary text-white text-sm font-semibold px-2 py-[3px] text-center w-[70px] rounded-md mt-4 ms:mt-0 ">
						health
					</p>
				</div>
				<h2 className="text-2xl font-semibold text-gray-600 w-[70%] truncate ">
					horrible morning assured
				</h2>
				<p className=" overflow-hidden text-sm text-gray-400 font-semibold py-2 ">
					Joy horrible moreover man feelings own shy. Request norland
					neither mistake for yet. Between the for morning assured
				</p>
				{/* image section */}
				<div className="grid grid-cols-3 gap-x-2">
					{/* image */}
					<div className="col-span-1  h-[90px] bg-secondary    overflow-hidden relative rounded-md">
						<div className=" w-full h-full opacity-50">
							<Image
								layout="fill"
								objectFit="cover"
								src="https://img.youtube.com/vi/8FyNu15A7Gc/0.jpg"
								alt="events"
							/>
						</div>
					</div>
					{/* image */}
					<div className="col-span-1  h-[90px] bg-secondary    overflow-hidden relative rounded-md">
						<div className=" w-full h-full opacity-50">
							<Image
								layout="fill"
								objectFit="cover"
								src="https://img.youtube.com/vi/8FyNu15A7Gc/0.jpg"
								alt="events"
							/>
						</div>
					</div>
					{/* image */}
					<div className="col-span-1  h-[90px] bg-secondary    overflow-hidden relative rounded-md">
						<div className=" w-full h-full opacity-50">
							<Image
								layout="fill"
								objectFit="cover"
								src="https://img.youtube.com/vi/8FyNu15A7Gc/0.jpg"
								alt="events"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Large_event_card;

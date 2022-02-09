import Image from "next/image";

const Medium_event_card = () => {
	return (
		<div className="pb-2 rounded-lg col-span-1  md:col-span-1 bg-gray-50 max-w-[450px] min-h-[300px]  md:w-[245px] flex flex-col  overflow-hidden mx-auto">
			{/* image */}
			<div className="w-full h-[50%] bg-secondary   overflow-hidden relative">
				<div className=" w-full h-full opacity-50">
					<Image
						layout="fill"
						objectFit="cover"
						src="https://img.youtube.com/vi/8FyNu15A7Gc/0.jpg"
						alt="events"
					/>
				</div>
			</div>
			{/* info */}
			<div className="w-full h-[50%] bg-gray-50 p-4 pt-2 flex flex-col overflow-hidden">
				<h5 className="text-gray-500 text-xs font-normal">NGO</h5>
				<h2 className="text-gray-600 text-lg font-semibold py-[6px]">
					Lorem Ipsum
				</h2>
				<p className="text-gray-400 text-xs font-semibold flex-grow w-full overflow-hidden mb-1">
					Joy horrible moreover man feelings own shy. Request norland
					neither mistake for yet. Between the for morning assured
				</p>
			</div>
		</div>
	);
};

export default Medium_event_card;

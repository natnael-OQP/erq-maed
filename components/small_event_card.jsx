import Image from "next/image";

const Small_Event_Card = ({ number }) => {
	return (
		<div className="flex flex-col   min-w-[247px] h-[270px]  snap-center    rounded-lg overflow-hidden">
			<div className="w-full h-[65%] bg-secondary   overflow-hidden relative">
				<div className=" w-full h-full opacity-50">
					<Image
						layout="fill"
						objectFit="cover"
						src="https://img.youtube.com/vi/8FyNu15A7Gc/0.jpg"
						alt="events"
					/>
				</div>
				<span className="absolute top-0 left-0 z-50 text-gray-50 text-xs font-semibold uppercase bg-color4 px-3 py-1 rounded-sm truncate mr-12 max-w-full pr-5">
					collection #1
				</span>
			</div>
			<div className="w-full bg-gray-50 h-[35%] p-3 flex flex-col justify-center items-center relative">
				<h5 className="text-sm text-gray-500 font-semibold text-center">
					Removed enjoyed explain
				</h5>
				<h5 className="text-xs text-gray-400 font-semibold text-center mt-1">
					By nathan
				</h5>
				<div className="w-10 h-10 bg-primary absolute -top-5 left-3 rounded-full"></div>
			</div>
		</div>
	);
};

export default Small_Event_Card;

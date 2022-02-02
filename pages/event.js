import Small_Event_Card from "../components/small_event_card";

const Event = () => {
	return (
		<main className="w-full flex flex-col select-none pb-80 pt-3">
			<h1 className="text-secondary text-2xl  md:text-3xl font-semibold text-center tracking-wide">
				Events
			</h1>
			<h1 className="text-gray-400 text-xs  md:text-sm font-semibold text-center max-w-sm mx-auto mt-2">
				Supported neglected met she therefore unwilling discovery
				remainder. Way sentiments two indulgence uncommonly own.
			</h1>
			<div className=" max-w-[900px] mx-auto mt-10  flex flex-col space-y-3">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:grid-cols-3 gap-x-4   max-w-[900px] mx-auto ">
					<Small_Event_Card />
					<Small_Event_Card />
					<Small_Event_Card />
				</div>
				{/* section-2 */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1  max-w-[900px] h-[320px]  mx-auto ">
					<div className="rounded-lg  md:col-span-1 bg-gray-50 w-[230px]">1</div>
					<div className="rounded-lg  md:col-span-2 bg-gray-50 w-full">2</div>
				</div>
				{/* section-3 */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 mt-0  max-w-[900px] h-[320px]  mx-auto ">
					<div className="rounded-lg  md:col-span-2 bg-gray-50 ">1</div>
					<div className="rounded-lg  md:col-span-1 bg-gray-50  w-[230px]">2</div>
				</div>
			</div>
		</main>
	);
};

export default Event;

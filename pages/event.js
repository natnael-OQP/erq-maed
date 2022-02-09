import Image from "next/image";
import Medium_event_card from "../components/mediumEventCard";
import Small_Event_Card from "../components/smallEventCard";
import Large_event_card from "../components/largeEventCard";
import Upcoming_event_popup from "../components/upcomingEventPopup";
import { upcoming } from "../data";

const Event = () => {
	return (
		<main className="w-full flex flex-col select-none pb-16">
			<h1 className="text-secondary text-2xl  md:text-3xl font-semibold text-center tracking-wide">
				Events
			</h1>
			<h1 className="text-gray-400 text-xs  md:text-sm font-semibold text-center max-w-sm mx-auto mt-2">
				Supported neglected met she therefore unwilling discovery
				remainder. Way sentiments two indulgence uncommonly own.
			</h1>
			<div className=" max-w-[800px] mx-auto mt-10  flex flex-col space-y-3 md:py-4 ">
				<div className="grid  gap-y-3 md:grid-cols-3 gap-x-4   max-w-[900px] mx-auto ">
					{upcoming.map((item) => (
						<Small_Event_Card
							key={item.image}
							image={item.image}
							name={item.name}
							isRegister={item.isRegister}
							title={item.title}
							description={item.description}
							list={item.list}
							author={item.author}
						/>
					))}
				</div>
				{/* section-2 */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3  max-w-[900px] h-full  md:h-[350px]   mx-auto relative overflow-hidden px-3 ">
					<Medium_event_card />
					<Large_event_card />
				</div>
				{/* section-3 */}
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-3  max-w-[900px] h-full  md:h-[350px]   mx-auto relative overflow-hidden px-3  ">
					<Large_event_card />
					<Medium_event_card />
				</div>
			</div>
			<Upcoming_event_popup />
		</main>
	);
};

export default Event;

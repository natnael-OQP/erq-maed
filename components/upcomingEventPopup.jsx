import Image from "next/image";
import { useEventPopup } from "../lib/store";

const Upcoming_event_popup = () => {
	const toggle = useEventPopup((state) => state.toggle);
	const name = useEventPopup((state) => state.name);
	const isRegister = useEventPopup((state) => state.isRegister);
	const title = useEventPopup((state) => state.title);
	const description = useEventPopup((state) => state.description);
	const image = useEventPopup((state) => state.image);
	const isOpen = useEventPopup((state) => state.isOpen);
	const list = useEventPopup((state) => state.list);
	return (
		<div
			onClick={toggle}
			className={`cursor-pointer ${
				isOpen ? "fixed" : "hidden"
			} top-0 left-0 w-full min-h-screen bg-secondary bg-opacity-50 backdrop-filter backdrop-blur-lg  flex items-center justify-center z-50 pt-10`}
		>
			{image && (
				<div className="flex flex-col">
					<div className="flex flex-col  sm:gap-x-3 sm:flex-row-reverse   w-[80vw] sm:w-[70vw] xl:w-[65vw] h-full      rounded-lg overflow-hidden bg-slate-50 sm:p-5">
						{/* Image section */}
						<div className="w-full h-[200px] sm:h-[250px] md:h-[270px] bg-secondary relative sm:rounded-lg">
							<div className=" w-full h-full opacity-50">
								<Image
									className=" sm:rounded-lg overflow-hidden"
									layout="fill"
									objectFit="cover"
									src={image}
									alt="events"
								/>
							</div>
							<span className="absolute top-0 left-0 sm:-left-9 sm:top-9 z-50 text-gray-50 text-xs sm:text-base  font-semibold uppercase bg-primary px-3 py-1 sm:p-3 rounded-sm truncate mr-12 max-w-full pr-5">
								jun 23
							</span>
						</div>
						{/* text section */}
						<div className="w-full flex flex-col  relative sm:pr-4 px-2 py-4 sm:py-0">
							<h5 className="text-sm text-gray-400 font-semibold ">
								{name}
							</h5>
							<h2 className="text-3xl font-semibold text-gray-600 w-[90%] py-3 font-lato ">
								{title}
							</h2>
							<p className=" overflow-hidden text-base text-gray-400 font-semibold font-lato  ">
								{description}
							</p>
							<ul className="mt-3 font-lato space-y-1 pl-3">
								{list.map((item, i) => (
									<li
										key={item + i}
										className="text-gray-400 text-sm font-semibold  font-lato "
									>
										{item}
									</li>
								))}
							</ul>
						</div>
					</div>
					{isRegister && (
						<form className=" w-full sm:w-[320px] h-[350px] text-[#191A2E] fy gap-y-3 0 mx-auto mt-12 ">
							<h4 className="text-xl font-semibold">Resister</h4>
							<input
								name="fullName"
								className="placeholder:text-[#191A2E] placeholder:text-sm placeholder:font-bold px-4 py-1 rounded-xl  outline-none ring-[2px] ring-[#191A2E] ring-opacity-25  focus:ring-[2px]  focus:ring-[#191A2E] focus:ring-opacity-40"
								type="text"
								placeholder="Full Name"
							/>
							<input
								name="email"
								className="placeholder:text-[#191A2E] placeholder:text-sm placeholder:font-bold px-4 py-1 ring-[2px] ring-[#191A2E] ring-opacity-25 rounded-xl outline-none focus:ring-[2px] focus:ring-[#191A2E] focus:ring-opacity-40"
								type="email"
								required
								placeholder="Email Address"
							/>
							<textarea
								className="placeholder:text-[#191A2E] outline-none focus:ring-[2px] focus:ring-[#191A2E] focus:ring-opacity-40 ring-[2px] ring-[#191A2E] ring-opacity-25 placeholder:text-sm placeholder:font-bold px-4 py-2 rounded-xl "
								name="message"
								cols="10"
								rows="4"
								placeholder="Message"
							></textarea>
							<button className="transition ease-linear duration-200 hover:-translate-y-1 active:scale-95  mt-2 w-28 px-4 py-2 h-12 text-base rounded-3xl bg-[#191A2E] text-white font-semibold">
								Submit
							</button>
						</form>
					)}
				</div>
			)}
		</div>
	);
};

export default Upcoming_event_popup;

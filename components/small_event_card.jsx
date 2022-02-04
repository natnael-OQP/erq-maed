import Image from "next/image";
import { useEventPopup } from "../lib/store";

const Small_Event_Card = ({
	name,
	image,
	title,
	description,
	list,
	author,
}) => {
	const toggle = useEventPopup((state) => state.toggle);
	const setName = useEventPopup((state) => state.setName);
	const setTitle = useEventPopup((state) => state.setTitle);
	const setImage = useEventPopup((state) => state.setImage);
	const setDescription = useEventPopup((state) => state.setDescription);
	const setList = useEventPopup((state) => state.setList);

	const clickHandler = () => {
		setName(name);
		setTitle(title);
		setImage(image);
		setDescription(description);
		setList(list);
		toggle();
	};
	return (
		<div
			onClick={clickHandler}
			className="flex flex-col   min-w-[247px] h-[270px]  snap-center    rounded-lg overflow-hidden cursor-pointer"
		>
			<div className="w-full h-[65%] bg-secondary   overflow-hidden relative">
				<div className=" w-full h-full opacity-50">
					<Image
						layout="fill"
						objectFit="cover"
						src={image}
						alt="events"
					/>
				</div>
				<span className="absolute top-0 left-0 z-50 text-gray-50 text-xs font-semibold uppercase bg-color4 px-3 py-1 rounded-sm truncate mr-12 max-w-full pr-5">
					collection #1
				</span>
			</div>
			<div className="w-full bg-gray-50 h-[35%] p-3 flex flex-col justify-center items-center relative">
				<h5 className="text-sm text-gray-500 font-semibold text-center">
					{name}
				</h5>
				<h5 className="text-xs text-gray-400 font-semibold text-center mt-1">
					By {author}
				</h5>
				<div className="w-10 h-10 bg-primary absolute -top-5 left-3 rounded-full"></div>
			</div>
		</div>
	);
};

export default Small_Event_Card;

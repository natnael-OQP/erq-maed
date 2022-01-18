import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Radio_Card = ({id,title,name,session,episode}) => {
	return (
		<div className="h-[250px] mx-auto min-w-[250px] md:h-[250px] cursor-pointer my-6  items-center px-1 py-3 sm:px-6 sm:py-3 relative">
			<div className="w-full h-full  relative flex-grow my-3 bg-primary  overflow-hidden rounded-lg sm:rounded-xl">
				<Image
					src={`https://img.youtube.com/vi/${id}/0.jpg`}
					layout="fill"
					className="opacity-40 transition-all transform ease-in-out hover:opacity-100"
					objectFit="cover"
					alt={name}
				/>
			</div>
			<button className="w-[70px] h-[70px] transition duration-300 transform ease-in-out active:scale-75 flex items-center justify-center  rounded-full bg-gray-50 absolute top-[93px] left-[38%] -translate-x-[-38%] ">
				<FaPlay className="w-8 h-8 text-[#10121F] pl-1" />
			</button>
			<p className="text-primary text-center text-sm font-semibold font-lato bg-white z-50 px-3 pt-2  fy    transform -translate-y-11	 w-[70%] mx-auto rounded-md">
				<h5 className="text-secondary font-lato text-sm capitalize ">
					{name} | <span className="text-xs">S-{session},E-{episode} </span>
				</h5>
				<h3 className="text-[19px] pt-1 font-bold tracking-wide   text-black text-center  truncate">
					{title}
				</h3>
			</p>
		</div>
	);
};

export default Radio_Card;

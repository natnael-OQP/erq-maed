import Image from "next/image";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

const Blog = () => {
	return (
		<div className="max-w-[310px] px-2  mx-auto overflow-hidden ">
			<div className="max-w-[280px] h-[170px]  relative flex-grow my-3 bg-secondary  overflow-hidden rounded-lg sm:rounded-xl">
				<Image
					src={`https://img.youtube.com/vi/W4ZECbd06MY/0.jpg`}
					layout="fill"
					className="opacity-60"
					objectFit="cover"
					alt="logo"
				/>
			</div>
			<div className="fx space-x-3 mt-5 truncate">
				<div className="fx space-x-1">
					<AiOutlineUser className="blogIcon" />
					<span className="text-xs text-gray-400">ADMIN</span>
				</div>
				<div className="fx space-x-1">
					<AiOutlineCalendar className="blogIcon" />
					<span className="text-xs text-gray-400">23 JAN</span>
				</div>
				<div className="fx space-x-1">
					<BiCommentDetail className="blogIcon" />
					<span className="text-xs text-gray-400 truncate">COMMENTS</span>
				</div>
			</div>
			<h2 className="text-base font-bold truncate text-primary  uppercase mt-5">
				Lorem ipsum dolor sit.
			</h2>
			<p className="text-sm font-lato font-medium mt-5 w-full text-left pr-7 text-gray-500">
				Morning assured country believe. On even feet time have an no
				at. Relation so in confined smallest children unpacked.
			</p>
			<button className=" mt-3 w-[120px]  h-9 text-primary space-x-1  fx justify-center border border-gray-500 bg-gray-50 shadow-sm text-sm font-semibold font-lato">
				Read More
			</button>
		</div>
	);
};

export default Blog;

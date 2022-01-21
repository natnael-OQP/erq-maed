import Image from "next/image";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

const Blog = ({ id,  title, author, date, body  }) => {
	const truncate = (str) => {
		const myTruncatedString = str.substring(0, 115);
		return myTruncatedString + " .....";
	};
	return (
		<div className="max-w-[310px] px-2  mx-auto overflow-hidden mt-6">
			<div className="max-w-[280px] h-[170px]  relative flex-grow my-3 bg-secondary  overflow-hidden rounded-lg sm:rounded-xl">
				<Image
					src={`https://img.youtube.com/vi/${id}/0.jpg`}
					layout="fill"
					className="opacity-60"
					objectFit="cover"
					alt={title}
				/>
			</div>
			<div className="fx space-x-3 mt-5 truncate">
				<div className="fx space-x-1">
					<AiOutlineUser className="blogIcon" />
					<span className="text-xs text-gray-400">{author}</span>
				</div>
				<div className="fx space-x-1">
					<AiOutlineCalendar className="blogIcon" />
					<span className="text-xs text-gray-400">{date}</span>
				</div>
				<div className="fx space-x-1">
					<BiCommentDetail className="blogIcon" />
					<span className="text-xs text-gray-400 truncate">
						COMMENTS
					</span>
				</div>
			</div>
			<h2 className="text-base font-bold truncate text-primary  uppercase mt-5">
				{title}
			</h2>
			<p className="text-sm font-lato font-medium mt-5 w-full text-left pr-7 text-gray-500">
				{truncate(body)}
			</p>
			<button className=" mt-3 w-[120px]  h-9 text-primary space-x-1  fx justify-center border border-gray-500 bg-gray-50 shadow-sm text-sm font-semibold font-lato">
				Read More
			</button>
		</div>
	);
};

export default Blog;

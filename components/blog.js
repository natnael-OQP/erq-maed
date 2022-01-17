import Image from "next/image"
import {BiCommentDetail} from 'react-icons/bi'
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";

const Blog = () => {
    return (
		<div className="max-w-[310px] px-1 mx-auto">
			<div className="max-w-[280px] h-[170px]  relative flex-grow my-3 bg-secondary  overflow-hidden rounded-lg sm:rounded-xl">
				<Image
					src={`https://img.youtube.com/vi/W4ZECbd06MY/0.jpg`}
					layout="fill"
					className="opacity-60"
					objectFit="cover"
					alt="logo"
				/>
			</div>
			<div className="fx mt-5">
				<div className="fx">
					<AiOutlineUser className="blogIcon" />
					<span className="text-xs text-gray-400">ADMIN</span>
				</div>
				<div className="fx">
					<AiOutlineCalendar className="blogIcon" />
					<span className="text-xs text-gray-400">23 JAN</span>
				</div>
				<div className="fx">
					<BiCommentDetail className="blogIcon" />
					<span className="text-xs text-gray-400">COMMENTS</span>
				</div>
			</div>
			<h2 className="text-base font-bold truncate text-primary  uppercase mt-5">
				Lorem ipsum dolor sit.
			</h2>
			<p className="text-sm font-lato font-medium mt-5 w-full text-left pr-7 text-gray-400">
				Morning assured country believe. On even feet time have an no
				at. Relation so in confined smallest children unpacked.
			</p>
			<button></button>
		</div>
	);
}

export default Blog

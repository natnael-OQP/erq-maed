import Image from "next/image";
import Link from "next/link";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Footers = () => {
	return (
		<div className="max-w-6xl mx-auto grid gap-y-8  grid-cols-2 lg:grid-cols-4 text-white py-10 items-center justify-center">
			{/* 1 */}
			<div className="max-w-44 h-56 fy mx-auto ">
				{/*logo */}
				<Link href="/" passHref>
					<div className="relative max-w-40 h-12  shrink-0 cursor-pointer">
						<Image
							src="/logo.png"
							layout="fill"
							objectFit="cover"
							alt="logo"
						/>
					</div>
				</Link>
				{/* address */}
				<div className="space-y-3 mt-3  text-color4 flex-grow ">
					<div className="fx gap-x-4">
						<MdLocationOn className="w-6 h-6 " />
						<p className="text-sm text-white font-lato font-normal">
							431 Meskel Square, <br /> Add ise abeba,Ethiopia
						</p>
					</div>
					<a
						className="text-sm text-white font-lato font-normal fx gap-x-4"
						href="tel:+123456789"
					>
						<FaPhoneAlt className=" h-5 w-5 text-color4" />
						+123456789
					</a>
					{/* mail */}
					<a
						href="mailto:m.bluth@example.com"
						className="text-sm text-white font-lato font-normal fx gap-x-4"
					>
						<IoMdMail className="w-5 h-5 text-color4" />
						sample@gmail.com
					</a>
				</div>
				{/* Icons */}
				<div className="fx space-x-4">
					<BsLinkedin className="footerIcon" />
					<BsFacebook className="footerIcon " />
					<AiFillTwitterCircle className="footerIcon w-7 h-7 " />
				</div>
			</div>
			{/* 2 */}
			<ul className="max-w-44 h-48 fy justify-between items-end lg:items-start  mx-auto ">
				<li className="text-xl font-lato text-white ">Category</li>
				<li className="text-sm  text-color3">First Link</li>
				<li className="text-sm  text-color3">Second Link</li>
				<li className="text-sm  text-color3">Third Link</li>
				<li className="text-sm  text-color3">Fourth Link</li>
			</ul>
			{/* 3 */}
			<ul className="max-w-44 h-48 fy justify-between mx-auto">
				<li className="text-xl font-lato text-white ">Category</li>
				<li className="text-sm  text-color3">First Link</li>
				<li className="text-sm  text-color3">Second Link</li>
				<li className="text-sm  text-color3">Third Link</li>
				<li className="text-sm  text-color3">Fourth Link</li>
			</ul>
			{/* 4 */}
			<ul className="max-w-44 h-48 fy justify-between mx-auto items-end lg:items-start">
				<li className="text-xl font-lato text-white ">Category</li>
				<li className="text-sm  text-color3">First Link</li>
				<li className="text-sm  text-color3">Second Link</li>
				<li className="text-sm  text-color3">Third Link</li>
				<li className="text-sm  text-color3">Fourth Link</li>
			</ul>
		</div>
	);
};

export default Footers;

import Image from "next/image";
// icons
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn, MdOutlineKeyboardArrowUp } from "react-icons/md";

export default function Contact_Us() {
	return (
		<div className="mt-10 bg-white grid grid-cols-1 md:grid-cols-2 items-center px-3  md:px-20 py-14 ">
			<div className="mx-auto  max-w-sm ">
				<h2 className="text-3xl text-black font-lato font-bold">
					Contact Us
				</h2>
				<p className="py-4">
					Contact Us Between the for morning assured country
					believe.norland neither mistake for yet.
				</p>
				{/* Icons */}
				<div className="fx space-x-8 mt-1">
					<BsLinkedin className="contactBtn" />
					<BsFacebook className="contactBtn w-11 h-11" />
					<AiFillTwitterCircle className="contactBtn w-[50px] h-[50px]" />
				</div>
				{/* address */}
				<div className="space-y-4 mt-4 text-[#191A2E] ">
					<div className="fx gap-x-4">
						<MdLocationOn className="w-7 h-8" />
						<p className="text-xl font-lato font-normal">
							431 Meskel Square, <br /> Add ise abeba,Ethiopia
						</p>
					</div>
					<a
						className="text-xl font-lato font-normal fx gap-x-4"
						href="tel:+123456789"
					>
						<FaPhoneAlt className=" h-8 w-6 " />
						+123456789
					</a>
					{/* mail */}
					<a
						href="mailto:m.bluth@example.com"
						className="text-xl font-lato font-normal fx gap-x-4"
					>
						<IoMdMail className="w-6 h-6" />
						sample@gmail.com
					</a>
				</div>
			</div>
			<div className="relative w-full h-[400px] md:max-w-[550px] md:h-[550px] mx-auto  ">
				<Image
					// className="opacity-0"
					layout="fill"
					objectFit="contain"
					src="/bg.png"
					alt="contact us"
				/>
				<form className="absolute top-[8%] sm:top-[20%] left-[2%] sm:left-[14%] w-full sm:w-[320px] h-[350px] text-[#191A2E] fy gap-y-3 0 ">
					<h4 className="text-xl font-semibold">Contact Us</h4>
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
						cols="30"
						rows="9"
						placeholder="Message"
					></textarea>
					<button className="transition ease-linear duration-200 hover:-translate-y-1 active:scale-95  mt-2 w-28 px-4 py-2 h-12 text-base rounded-3xl bg-[#191A2E] text-white font-semibold">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

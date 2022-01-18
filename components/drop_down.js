import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";

const Nav_Button = ({ path, name,toggle }) => {
	const { pathname } = useRouter();
	return (
		<div className="flex items-center gap-x-[6px] mt-2 hover:scale-105 hover:text-white">
			{pathname == path && (
				<div className="w-[7px] h-[7px] bg-secondary rounded-full mt-[2px] "></div>
			)}
			<Link href={path}>
                <a
                    onClick={toggle}
                    className="text-color3 font-semibold text-base tracking-wide font-lato">
					{name}
				</a>
			</Link>
		</div>
	);
};

const Drop_down = ({ open, toggle }) => {
	return (
		<div
			className={`pb-40 ${
				open ? "sticky top-[0%]" : "absolute -top-[150%]"
			} transition duration-1000 transform ease-in-out   left-0  w-full h-screen z-50 bg-primary  flex items-center justify-center  `}
		>
			<AiOutlineClose
				onClick={toggle}
				className=" absolute top-4 right-3  w-9 h-9 font-black text-2xl text-color3 cursor-pointer hover:text-secondary  hover:hue-rotate-180 transition-all transform ease-in-out"
			/>
			<div>
				<Nav_Button toggle={toggle} path="/" name="Home" />
				<Nav_Button toggle={toggle} path="/about" name="About Us" />
				<Nav_Button
					toggle={toggle}
					path="/portfolio"
					name="Portfolio"
				/>
				<Nav_Button toggle={toggle} path="/event" name="Event" />
			</div>
		</div>
	);
};

export default Drop_down;

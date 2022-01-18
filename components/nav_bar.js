import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import Drop_down from './drop_down';
import Nav_Button from './nav_button';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};

	return (
		<>
			<Drop_down open={open} toggle={toggle} />

			<div className="h-20 jb px-3 md:px-12  ">
				{/*logo*/}
				<Link href="/" passHref>
					<div className="relative w-32 h-9  shrink-0 cursor-pointer">
						<Image
							src="/logo.png"
							layout="fill"
							objectFit="cover"
							alt="logo"
						/>
					</div>
				</Link>
				{/* nav bar buttons */}
				<div className=" gap-x-7 hidden sm:fx">
					<Nav_Button  path="/" name="Home" />
					<Nav_Button path="/about" name="About Us" />
					<Nav_Button path="/portfolio" name="Portfolio" />
					<Nav_Button path="/event" name="Event" />
				</div>
				{/* */}
				<button className="sm:hidden">
					<CgMenuRight
						onClick={toggle}
						className="w-8 h-8 text-color3 hover:text-secondary hover:hue-rotate-180 transition duration-300 transform ease-in-out"
					/>
				</button>
			</div>
		</>
	);
}

export default Navbar

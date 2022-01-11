import Image from 'next/image'
import Link from 'next/link';
import Nav_Button from './nav_button';

const Navbar = () => {
    return (
		<div className="h-20 jb px-12  ">
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
			<div className="fx gap-x-7">
				<Nav_Button path="/" name="Home" />
				<Nav_Button path="/about" name="About Us" />
				<Nav_Button path="/portfolio" name="Portfolio" />
				<Nav_Button path="/event" name="Event" />
			</div>
		</div>
	);
}

export default Navbar

import Image from 'next/image'
import NavButton from './navButton';
import Link from 'next/link';

const Navbar = () => {
    return (
		<div className="h-14 jb  ">
			{/*logo*/}
			<Link href="/" passHref>
				<div className="relative w-40 h-9  shrink-0 cursor-pointer">
					<Image
						src="/n.png"
						layout="fill"
						objectFit="contain"
						alt="logo"
					/>
				</div>
			</Link>
			{/* nav bar buttons */}
			<div className="fx gap-x-7">
				<NavButton path="/" name="Home" />
				<NavButton path="/about" name="About Us" />
				<NavButton path="/portfolio" name="Portfolio" />
				<NavButton path="/event" name="Event" />
			</div>
		</div>
	);
}

export default Navbar

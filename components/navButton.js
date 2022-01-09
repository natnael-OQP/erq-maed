import Link from "next/link";
import {useRouter} from "next/router";
const NavButton = ({ name, path }) => {
    const { pathname } = useRouter();
    return (
		<div className="flex items-center gap-x-[6px] hover:scale-105 hover:text-white">
			{pathname == path && (
				<div className="w-[9px] h-[9px] bg-secondary rounded-full "></div>
			)}
			<Link href={path}>
				<a className="text-color3 font-semibold ">{name}</a>
			</Link>
		</div>
	);
};

export default NavButton;

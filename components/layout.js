import dynamic from "next/dynamic";
const FootersComponent = dynamic(() => import("./footers"));
import Navbar from "./navBar";
import useInView from "react-cool-inview";
const Layout = ({ children }) => {
	// lazy load
	const { observe, inView } = useInView({
		onEnter: ({ unobserve }) => unobserve(),
	});
	return (
		<div className="max-w-screen-2xl mx-auto ">
			<Navbar />
			<main>{children}</main>
			<div className="pt-10" ref={observe}>
				{inView && (
					<>
						<FootersComponent />
						<div className="bg-black text-white h-10 fy items-center justify-center">
							<h3 className="text-color3 text-sm font-lato">
								&copy; Copyright 2022 - All rights Reserved
							</h3>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Layout;

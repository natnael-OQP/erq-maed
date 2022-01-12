import Footer from "./footer";
import Navbar from "./nav_bar";

const Layout = ({children}) => {
    return (
		<div className="max-w-screen-2xl mx-auto ">
			<Navbar />
			<main>{children}</main>
			<Footer />
			{/* copy right */}
			<div className="bg-black text-white h-10 fy items-center justify-center">
				<h3 className="text-color3 text-sm font-lato">
					&copy; Copyright 2022 - All rights Reserved
				</h3>
			</div>
		</div>
	);
}

export default Layout

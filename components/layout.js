import Footer from "./footer";
import Navbar from "./nav_bar";

const Layout = ({children}) => {
    return (
		<div className="max-w-screen-2xl mx-auto ">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout

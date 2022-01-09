import Footer from "./Footer";
import Navbar from "./navBar";

const Layout = ({children}) => {
    return (
		<div className="max-w-screen-2xl mx-auto xl:px-10 lg:px-6 ">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}

export default Layout
